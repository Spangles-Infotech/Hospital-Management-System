const Patient = require("../models/patient.model")
const { sendMessage, skipPage, setQuery } = require("../utils/function")

const addPatient = async (req, res, next) => {
  const additionalInfo = {
    birthTime: req.body.birthTime,
    birthPlace: req.body.birthPlace,
    birthWeight: req.body.birthWeight,
  };
  try {
    const lastPatient = await Patient.findOne().sort({ _id: -1 });
    let nextPatientIdNum = 1;
    const currentYear = new Date().getFullYear();
    
    if (lastPatient && lastPatient.patientId) {
      // Extract the numeric part after the last '|' character
      const parts = lastPatient.patientId.split('|');
      if (parts.length === 4) {
        const lastIdNum = parseInt(parts[3]);
        if (!isNaN(lastIdNum)) {
          nextPatientIdNum = lastIdNum + 1;
        }
      }
    }
    const newPatientId = `GH|IP|${currentYear}|${String(nextPatientIdNum).padStart(4, '0')}`;
    req.body.patientId = newPatientId;
    await Patient.create({ ...req.body, additionalInfo });
    return sendMessage(res, 201, "Patient Created Successfully");
  } catch (error) {
    next(error);
  }
};

const getAllPatient = async (req, res, next) => {
  const { page, limit = 15, search } = req.query;
  let query = {};
  try {
    if (search) {
      const searchNumber = Number(search);
      const isNumber = !isNaN(searchNumber);

      query = {
        $or: [
          { "patientName.name": { $regex: search, $options: "i" } },
          { "mobileNumber.number": { $regex: search, $options: "i" } },
          ...(isNumber ? [{ "mobileNumber.number": searchNumber }] : []),
        ],
      };
    }

    const patients = await Patient.find(query)
      .sort({ _id: -1 })
      .limit(Number(limit))
      .skip(skipPage(page, limit));

    return sendMessage(res, 200, "Patients fetched Successfully", patients);
  } catch (error) {
    next(error);
  }
};

const getPatientById = async (req, res, next) => {
  const { patientId } = req.params;
  try {
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return sendMessage(res, 404, "Patient Not Found");
    }
    return sendMessage(res, 200, "Patient fetched Successfully", patient);
  } catch (error) {
    next(error);
  }
};

const updatePatient = async (req, res, next) => {
  const { patientId } = req.params;
  try {
    await Patient.findByIdAndUpdate(
      patientId,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    return sendMessage(res, 200, "Patient Updated Successfully");
  } catch (error) {
    next(error);
  }
};

const getNextPatientId = async (req, res, next) => {
  try {
    const lastPatient = await Patient.findOne().sort({ _id: -1 });
    let nextPatientIdNum = 1;
    const currentYear = new Date().getFullYear();
    
    if (lastPatient && lastPatient.patientId) {
      // Extract the numeric part after the last '|' character
      const parts = lastPatient.patientId.split('|');
      if (parts.length === 4) {
        const lastIdNum = parseInt(parts[3]);
        if (!isNaN(lastIdNum)) {
          nextPatientIdNum = lastIdNum + 1;
        }
      }
    }
    const nextId = `GH|IP|${currentYear}|${String(nextPatientIdNum).padStart(4, '0')}`;
    return sendMessage(res, 200, "Next Patient ID fetched Successfully", { patientId: nextId });
  } catch (error) {
    next(error);
  }
};

const getPatientInfo = async (req, res, next) => {
  try {
    const { search } = req.query;
    const searchItems = ["mobileNumber.number", "patientId"];
    let query = {};
    if (search) {
      setQuery([], search, searchItems, query);
      const patient = await Patient.find(query)
        .select(["_id", "patientId", "mobileNumber", "patientName"])
        .limit(4);
      return sendMessage(res, 200, "Data fetched successfully", patient);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPatient,
  getAllPatient,
  getPatientById,
  updatePatient,
  getNextPatientId,
  getPatientInfo,
};