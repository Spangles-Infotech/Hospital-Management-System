import React, { useEffect, useState, useRef } from 'react';
import './MedicalBill.css';
import Select from "react-select";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TextField, IconButton
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { fetch } from '../../../api/fetch'; // working fetch instance
import { useReactToPrint } from 'react-to-print';

const medicineList = [
  { code: "MD001", name: "Paracetamol 500mg", price: 5 },
  { code: "MD002", name: "Amoxicillin 250mg", price: 12 },
  { code: "MD003", name: "Ibuprofen 400mg", price: 8 },
  { code: "MD004", name: "Cetirizine 10mg", price: 6 },
];

export const MedicalBill = () => {
  const componentRef = useRef();

  const [rows, setRows] = useState([{ medicine: null, quantity: 1, price: 0, total: 0 }]);
  const [discount, setDiscount] = useState(0);
  const [taxPercent, setTaxPercent] = useState(5);
  const [roundOff, setRoundOff] = useState(0);
  const [formData, setFormData] = useState({
    patientId: '',
    name: '',
    age: '',
    sex: '',
    phone: '',
    doctorName: '',
    billNo: Math.floor(100000 + Math.random() * 900000)
  });
  const [patientId, setPatientId] = useState("");
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    bloodGroup: ""
  });
  const [phone, setPhone] = useState("");
  const [patientList, setPatientList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // ✅ Working patient search by ID
  const handleSearchByPatientId = async (id) => {
    try {
      const response = await fetch.get(`get-patient/${id}`);
      if (response.data && response.data.status === 200 && response.data.data) {
        const patient = response.data.data;
        setSelectedPatient(patient);
        setPatientDetails({
          id: patient._id,
          name: patient.patientName?.name || "",
          phone: patient.mobileNumber?.number || "",
          age: patient.age || "",
          gender: patient.gender || "",
          address: patient.address || "",
          bloodGroup: patient.bloodGroup || ""
        });
      } else {
        setPatientDetails({
          id: "",
          name: "",
          phone: "",
          age: "",
          gender: "",
          address: "",
          bloodGroup: ""
        });
      }
    } catch (error) {
      console.error("Error searching by patient ID:", error);
      setPatientDetails({
        id: "",
        name: "",
        phone: "",
        age: "",
        gender: "",
        address: "",
        bloodGroup: ""
      });
    }
  };

  // ✅ Working patient search by phone
  const fetchPatientsByPhone = async (phoneNumber) => {
    try {
      const response = await fetch.get(`get-patient-info?search=${phoneNumber}`);
      if (response.data && response.data.status === 200 && response.data.data) {
        const patients = response.data.data;
        setPatientList(patients);
        if (patients.length === 1) {
          const patient = patients[0];
          setSelectedPatient(patient);
          setPatientDetails({
            id: patient._id,
            name: patient.patientName?.name || "",
            phone: patient.mobileNumber?.number || "",
            age: patient.age || "",
            gender: patient.gender || "",
            address: patient.address || "",
            bloodGroup: patient.bloodGroup || ""
          });
        }
      } else {
        setPatientList([]);
      }
    } catch (err) {
      console.error("Error fetching patient info by phone", err);
      setPatientList([]);
    }
  };

  useEffect(() => {
    if (patientId.trim() && (patientId.startsWith('PAT-') || patientId.length >= 3)) {
      handleSearchByPatientId(patientId);
    } else if (patientId.trim() === '') {
      setPatientDetails({
        id: '',
        name: '',
        phone: '',
        age: '',
        gender: '',
        address: '',
        bloodGroup: ''
      });
      setSelectedPatient(null);
    }
  }, [patientId]);

  const handleMedicineChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].medicine = value;
    updatedRows[index].price = value?.price || 0;
    updatedRows[index].total = value ? value.price * updatedRows[index].quantity : 0;
    setRows(updatedRows);
  };

  const handleQuantityChange = (index, value) => {
    const updatedRows = [...rows];
    const qty = parseInt(value, 10) || 0;
    updatedRows[index].quantity = qty;
    updatedRows[index].total = updatedRows[index].price * qty;
    setRows(updatedRows);
  };

  const addRow = () => {
    const lastRow = rows[rows.length - 1];
    if (!lastRow.medicine || lastRow.quantity <= 0) return;
    setRows([...rows, { medicine: null, quantity: 1, price: 0, total: 0 }]);
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows.length ? updatedRows : [{ medicine: null, quantity: 1, price: 0, total: 0 }]);
  };

  const subtotal = rows.reduce((sum, row) => sum + row.total, 0);
  const taxAmount = (subtotal * taxPercent) / 100;
  const finalTotal = subtotal + taxAmount - discount + roundOff;

  const optionsDoctor = [
    { value: "Dr. Rajesh Kumar", label: "Dr. Rajesh Kumar" },
    { value: "Dr. Priya Nair", label: "Dr. Priya Nair" },
    { value: "Dr. Arjun Mehta", label: "Dr. Arjun Mehta" },
  ];

  const optionsDept = [
    { value: "Cardiology", label: "Cardiology" },
    { value: "Neurology", label: "Neurology" },
    { value: "Orthopedics", label: "Orthopedics" },
    { value: "Pediatrics", label: "Pediatrics" },
    { value: "Dermatology", label: "Dermatology" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      borderColor: "#898989",
      borderRadius: "4px",
      padding: "2px",
      minHeight: "35px",
      fontSize: "14px",
      backgroundColor: "#FBFBFD",
      boxShadow: "none",
      "&:hover": { borderColor: "#1F9CC6" },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#1F9CC6" : "#fff",
      color: state.isFocused ? "#fff" : "#505050",
      fontSize: "14px",
      fontFamily: "Roboto, sans-serif",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#505050",
    }),
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Bill-${formData.billNo || "print"}`,
  });

  return (
    <div className="container">
      <form>
        <div className="row bill-container" ref={componentRef}>
          <div className="col-sm-12">
            <p className='add-new-head'>New Pharmacy Bill</p>
          </div>
          {/* Patient ID & Age */}
          <div className="col-sm-4">
            <div className="form-group">
              <label>Patient ID:</label>
              <input type="text" className="form-controls" value={patientId} onChange={(e) => setPatientId(e.target.value)} style={{ color: 'red', fontWeight: '700' }} />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input type="number" className="form-controls" value={patientDetails.age} readOnly />
            </div>
          </div>
          {/* Patient Name & Doctor */}
          <div className="col-sm-4">
            <div className="form-group">
              <label>Patient Name:</label>
              {patientList.length > 1 ? (
                <select
                  className="form-controls"
                  onChange={(e) => {
                    const selected = patientList.find((p) => p._id === e.target.value);
                    setSelectedPatient(selected);
                    setPatientDetails({
                      id: selected._id,
                      name: selected.patientName?.name || "",
                      phone: selected.mobileNumber?.number || "",
                      age: selected.age || "",
                      gender: selected.gender || "",
                      address: selected.address || "",
                      bloodGroup: selected.bloodGroup || ""
                    });
                  }}
                  value={selectedPatient?._id || ""}
                >
                  <option value="">Select Patient</option>
                  {patientList.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.patientName?.name || "Unknown"} ({p.patientId || p._id})
                    </option>
                  ))}
                </select>
              ) : (
                <input type="text" className="form-controls" value={patientDetails.name} readOnly />
              )}
            </div>
            <div className="form-group">
              <label>Consulted Doctor Name:</label>
              <Select options={optionsDoctor} styles={customStyles} placeholder="Select" />
            </div>
          </div>
          {/* Phone & Dept */}
          <div className="col-sm-4">
            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="text"
                className="form-controls"
                maxLength={10}
                value={patientDetails.phone}
                onChange={(e) => {
                  const phone = e.target.value.replace(/[^0-9]/g, "");
                  setPatientDetails({ ...patientDetails, phone });
                  setSelectedPatient(null);
                  setPhone(phone);
                  if (phone.length >= 6) fetchPatientsByPhone(phone);
                  else if (phone.length === 0) setPatientList([]);
                }}
              />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <Select options={optionsDept} styles={customStyles} placeholder="Select" />
            </div>
          </div>
        </div>

        {/* Extra details */}
        <div className="row">
          <div className="col-sm-4"><label>Gender:</label><input type="text" className="form-controls" value={patientDetails.gender} readOnly /></div>
          <div className="col-sm-4"><label>Blood Group:</label><input type="text" className="form-controls" value={patientDetails.bloodGroup} readOnly /></div>
          <div className="col-sm-4"><label>Address:</label><input type="text" className="form-controls" value={patientDetails.address} readOnly /></div>
        </div>

        {/* Bill Table */}
        <div className="row bill-container mt-4">
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>SL No</TableCell>
                  <TableCell>Medicine</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell align="right">Price/Unit (₹)</TableCell>
                  <TableCell align="right">Total (₹)</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>
                      <Autocomplete
                        options={medicineList}
                        getOptionLabel={(option) => option.name}
                        value={row.medicine}
                        onChange={(_, value) => handleMedicineChange(idx, value)}
                        renderInput={(params) => <TextField {...params} size="small" placeholder="Medicine" />}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField type="number" size="small" value={row.quantity} onChange={(e) => handleQuantityChange(idx, e.target.value)} inputProps={{ min: 1 }} />
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                    <TableCell align="right">
                      {idx === rows.length - 1 ? (
                        <IconButton onClick={addRow} size="small" color="primary"><AddIcon fontSize="small" /></IconButton>
                      ) : (
                        <IconButton onClick={() => deleteRow(idx)} size="small" color="error"><DeleteIcon fontSize="small" /></IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {/* Totals */}
                <TableRow><TableCell rowSpan={4} /><TableCell colSpan={3}>Subtotal</TableCell><TableCell align="right">{subtotal.toFixed(2)}</TableCell></TableRow>
                <TableRow><TableCell colSpan={2}>Discount</TableCell><TableCell><TextField type="number" size="small" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)} /></TableCell><TableCell align="right">-₹ {discount.toFixed(2)}</TableCell></TableRow>
                <TableRow><TableCell colSpan={2}>Tax (%)</TableCell><TableCell><TextField type="number" size="small" value={taxPercent} onChange={(e) => setTaxPercent(parseFloat(e.target.value) || 0)} /></TableCell><TableCell align="right">+₹ {taxAmount.toFixed(2)}</TableCell></TableRow>
                <TableRow><TableCell colSpan={2}>Round Off</TableCell><TableCell><TextField type="number" size="small" value={roundOff} onChange={(e) => setRoundOff(parseFloat(e.target.value) || 0)} /></TableCell><TableCell align="right">₹ {roundOff.toFixed(2)}</TableCell></TableRow>
                <TableRow><TableCell colSpan={4} align="right"><strong>Final Total</strong></TableCell><TableCell align="right"><strong>₹ {finalTotal.toFixed(2)}</strong></TableCell></TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Buttons */}
        <div className="col-sm-12 save-btn">
          <button type="button" className="save-med-btn" onClick={handlePrint}>Print</button>
          <button type="button" className="save-med-btn">Save</button>
        </div>
      </form>
    </div>
  );
};
