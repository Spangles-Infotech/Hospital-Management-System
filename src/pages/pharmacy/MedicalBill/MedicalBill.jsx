import React, { useEffect, useState } from 'react';
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


const medicineList = [
    { code: "MD001", name: "Paracetamol 500mg", price: 5 },
    { code: "MD002", name: "Amoxicillin 250mg", price: 12 },
    { code: "MD003", name: "Ibuprofen 400mg", price: 8 },
    { code: "MD004", name: "Cetirizine 10mg", price: 6 },
];

export const MedicalBill = () => {
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
});
const [phone, setPhone] = useState("");
const [patientList, setPatientList] = useState([]);
const [selectedPatient, setSelectedPatient] = useState(null);

const handleSearchByPatientId = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3500/api/patient/get-patient/${id}`);
    const result = response.data;

    if (result && result.patientName?.name) {
      const selected = result;

      setSelectedPatient(selected); // optional if you're handling selected patient

      setPatientDetails({
        id: selected._id,
        name: selected.patientName.name || "",
        phone: selected.MobileNumber?.number || "",  // Adjust if mobileNumber has `.number` too
        age: selected.age || "",
      });
    } else {
      // handle no result
      setPatientDetails({
        id: "",
        name: "",
        phone: "",
        age: "",
      });
    }
  } catch (error) {
    console.error("Error searching by patient ID:", error);
  }
};

const fetchPatientsByPhone = async (phoneNumber) => {
  try {
    const response = await fetch(`http://localhost:3500/api/get-patient-info?phone=${phoneNumber}`);
    if (response.ok) {
      const data = await response.json();
      setPatientList(data);
      if (data.length === 1) {
        // Auto-select if only one patient
        setSelectedPatient(data[0]);
      }
    }
  } catch (err) {
    console.error("Error fetching patient info by phone", err);
  }
};

useEffect(() => {
  if (patientId.trim().length >= 3) { // add basic length check
    handleSearchByPatientId(patientId);
  }
}, [patientId]);
useEffect(() => {
  if (phone.length >= 6) {
    fetchPatientsByPhone(phone);
  } else {
    setPatientList([]);
    setSelectedPatient(null);
  }
}, [phone]);



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

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDoctorChange = (value) => {
        setFormData(prev => ({ ...prev, doctorName: value?.label || '' }));
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
            "&:hover": {
                borderColor: "#1F9CC6",
            },
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

    return (
        <div className="container">
            <form>
                <div className="row bill-container">
                    <div className="col-sm-12">
                        <p className='add-new-head'>New Pharmacy Bill</p>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="form-label-controls">Patient ID:</label>
                            <input 
                            type="text" 
                            className="form-controls" 
                            value={patientId}
                            onChange={(e) => setPatientId(e.target.value)}
                            required 
                            style={{ color: 'red', fontWeight: '700' }} />
                        </div>
                        <div className="form-group">
                            <label className="form-label-controls">Age:</label>
                            <input
                                type="number"
                                className="form-controls"
                                value={patientDetails.age}
                                // value={age}
                                readOnly
                            />
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
  <label className="form-label-controls">Patient Name:</label>

  {/* Dropdown shown only if multiple patients found by phone */}
  {patientList.length > 1 ? (
    <select
      className="form-controls"
      onChange={(e) => {
        const selected = patientList.find((p) => p._id === e.target.value);
        setSelectedPatient(selected);
        setPatientDetails({
          ...patientDetails,
          id: selected._id,
          name: selected.patient_name,
          phone: selected.phone,
          age: selected.age,
        });
      }}
      value={selectedPatient?._id || ""}
    >
      <option value="">Select Patient</option>
      {patientList.map((patient) => (
        <option key={patient._id} value={patient._id}>
          {patient.patient_name} ({patient._id})
        </option>
      ))}
    </select>
  ) : (
    <input
      type="text"
      className="form-controls"
      value={patientDetails.name}
      readOnly
    />
  )}
</div>

                        <div className="form-group">
                            <label className="form-label-controls">Consulted Doctor Name:</label>
                            <Select options={optionsDoctor} styles={customStyles} classNamePrefix='form-controls' placeholder="Select" />
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
  <label className="form-label-controls">Mobile Number:</label>
  <input
    type="text"
    className="form-controls"
    maxLength={10}
    value={patientDetails.phone}
    inputMode="numeric"
    pattern="\d{10}"
    placeholder="Enter phone number"
    onChange={(e) => {
      const phone = e.target.value.replace(/[^0-9]/g, "");
      setPatientDetails({ ...patientDetails, phone });
      setSelectedPatient(null); // Reset selected dropdown if typing new number
    }}
    onBlur={() => {
      if (patientDetails.phone.length === 10) {
        fetchPatientsByPhone(patientDetails.phone); // Fetch from backend
      }
    }}
  />
</div>

                        <div className="form-group">
                            <label className="form-label-controls">Department:</label>
                            <Select options={optionsDept} styles={customStyles} classNamePrefix="form-controls" placeholder="Select" />
                        </div>
                    </div>
                </div>

                {/* Bill Table Section */}
                <div className="row bill-container mt-4">

                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>SL No</TableCell>
                                    <TableCell>Medicine</TableCell>
                                    <TableCell>Qty</TableCell>
                                    <TableCell align='right'>Price/Unit (₹)</TableCell>
                                    <TableCell align='right'>Total (₹)</TableCell>
                                    <TableCell align='right'>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{idx + 1}</TableCell>
                                        <TableCell style={{ minWidth: 200 }}>
                                            <Autocomplete
                                                options={medicineList}
                                                getOptionLabel={(option) => option.name}
                                                value={row.medicine}
                                                onChange={(_, value) => handleMedicineChange(idx, value)}
                                                renderInput={(params) => (
                                                    <TextField {...params} size="small" placeholder="Medicine" />
                                                )}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                type="number"
                                                size="small"
                                                value={row.quantity}
                                                onChange={(e) => handleQuantityChange(idx, e.target.value)}
                                                inputProps={{ min: 1 }}
                                            />
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.total}</TableCell>
                                        <TableCell align="right">
                                            {idx === rows.length - 1 ? (
                                                <IconButton onClick={addRow} size="small" color="primary">
                                                    <AddIcon fontSize="small" />
                                                </IconButton>
                                            ) : (
                                                <IconButton onClick={() => deleteRow(idx)} size="small" color="error">
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}


                                {/* Totals */}
                                <TableRow>
                                    <TableCell rowSpan={4} />
                                    <TableCell colSpan={3}>Subtotal</TableCell>
                                    <TableCell align="right">{subtotal.toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Discount</TableCell>
                                    <TableCell>
                                        <TextField
                                            type="number"
                                            size="small"
                                            value={discount}
                                            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                                        />
                                    </TableCell>
                                    <TableCell align="right">-₹ {discount.toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Tax (%)</TableCell>
                                    <TableCell>
                                        <TextField
                                            type="number"
                                            size="small"
                                            value={taxPercent}
                                            onChange={(e) => setTaxPercent(parseFloat(e.target.value) || 0)}
                                        />
                                    </TableCell>
                                    <TableCell align="right">+₹ {taxAmount.toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Round Off</TableCell>
                                    <TableCell>
                                        <TextField
                                            type="number"
                                            size="small"
                                            value={roundOff}
                                            onChange={(e) => setRoundOff(parseFloat(e.target.value) || 0)}
                                        />
                                    </TableCell>
                                    <TableCell align="right">₹ {roundOff.toFixed(2)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={4} align="right"><strong>Final Total</strong></TableCell>
                                    <TableCell align="right"><strong>₹ {finalTotal.toFixed(2)}</strong></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </form>

        </div>
    );
};
