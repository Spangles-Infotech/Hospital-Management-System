import React, { useEffect, useState, useRef } from 'react';
import './MedicalBill.css';
import Select from "react-select";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TextField, IconButton, CircularProgress
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import AddIcon from '@mui/icons-material/Add'; 
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { fetch } from '../../../api/fetch'; // working fetch instance
import { useReactToPrint } from 'react-to-print'; 
 
export const MedicalBill = () => { 
  const componentRef = useRef();

  const [rows, setRows] = useState([{ medicine: null, quantity: 1, unitPrice: 0, total: 0 }]);
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
    department: '',
    billNo: Math.floor(100000 + Math.random() * 900000)
  });
  const [patientId, setPatientId] = useState("");
  const [patientDetails, setPatientDetails] = useState({
    patientId: "",
    patientName: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    bloodGroup: ""
  });
  const [phone, setPhone] = useState("");
  const [patientList, setPatientList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [medicineList, setMedicineList] = useState([]);
  const [loadingMedicines, setLoadingMedicines] = useState(false);
  const [doctorList, setDoctorList] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);

  // ✅ Working patient search by ID
  const handleSearchByPatientId = async (id) => {
    try {
      const response = await fetch.get(`get-patient/${id}`);
      if (response.data && response.data.data) {
        const patient = response.data.data;
        console.log(response,"patient")
        setSelectedPatient(patient);
        setPatientDetails({
          patientId: patient.patientId,
          patientName: patient.patientName?.name || "",
          phone: patient.mobileNumber?.number || "",
          age: patient.age || "",
          gender: patient.gender || "",
          address: patient.address || "",
          bloodGroup: patient.bloodGroup || ""
        });
      } else {
        setPatientDetails({
          patientId: "",
          patientName: "",
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
            id: patient.patientId,
            name: patient.patientName?.name || "",
            phone: patient.mobileNumber?.number || "",
            age: patient.age || "",
            gender: patient.gender || "",
            address: patient.address || "",
            bloodGroup: patient.bloodGroup || ""
          });
          setPatientId(patient.patientId);
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
  
  useEffect(() => {
    fetchMedicineList();
    fetchDoctorList();
  }, []);
  
  // Fetch medicine product names from API
  const fetchMedicineList = async () => {
    try {
      setLoadingMedicines(true);
      const response = await fetch.get('/get-all-medicine-name');
      if (response.data && response.data.data) {
        // Transform the data to match the format expected by the Autocomplete component
        const formattedMedicines = response.data.data.map(medicineName => ({
          name: medicineName,
          // Default unitPrice - will be updated when selected
          unitPrice: 0
        }));
        setMedicineList(formattedMedicines);
      }
    } catch (error) {
      console.error('Error fetching medicine list:', error);
    } finally {
      setLoadingMedicines(false);
    }
  };
  
  // Fetch doctor list from API
  const fetchDoctorList = async () => {
    try {
      setLoadingDoctors(true);
      // Replace with actual API endpoint for doctors
      const response = await fetch.get('/doctors');
      if (response.data && response.data.data) {
        const formattedDoctors = response.data.data.map(doctor => ({
          value: doctor.name,
          label: doctor.name
        }));
        setDoctorList(formattedDoctors);
      }
    } catch (error) {
      console.error('Error fetching doctor list:', error);
      // Fallback to default doctor list if API fails
      setDoctorList(optionsDoctor);
    } finally {
      setLoadingDoctors(false);
    }
  };

  const handleMedicineChange = async (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].medicine = value;
    
    if (value) {
      try {
        // Fetch medicine details from API
        const response = await fetch.get(`/get-medicine-detail?medicineName=${encodeURIComponent(value.name)}`);
        console.log(response,"medicine response")
        if (response.data && response.data.data) {
          const medicineDetails = response.data.data;
          // Update unitPrice from API response
          updatedRows[index].unitPrice = medicineDetails.salesPrice || 0;
        } else {
          // Fallback to default unitPrice if API doesn't return data
          updatedRows[index].unitPrice = value.unitPrice || 0;
        }
      } catch (error) {
        console.error('Error fetching medicine details:', error);
        // Fallback to default unitPrice if API fails
        updatedRows[index].unitPrice = value.unitPrice || 0;
      }
    } else {
      updatedRows[index].unitPrice = 0;
    }
    
    updatedRows[index].total = updatedRows[index].unitPrice * updatedRows[index].quantity;
    setRows(updatedRows);
  };

  const handleQuantityChange = (index, value) => {
    const updatedRows = [...rows];
    const qty = parseInt(value, 10) || 0;
    updatedRows[index].quantity = qty;
    updatedRows[index].total = updatedRows[index].unitPrice * qty;
    setRows(updatedRows);
  };

  const addRow = () => {
    const lastRow = rows[rows.length - 1];
    if (!lastRow.medicine || lastRow.quantity <= 0) return;
    setRows([...rows, { medicine: null, quantity: 1, unitPrice: 0, total: 0 }]);
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows.length ? updatedRows : [{ medicine: null, quantity: 1, price: 0, total: 0 }]);
  };

  const subtotal = rows.reduce((sum, row) => sum + row.total, 0);
  const taxAmount = (subtotal * taxPercent) / 100;
  const grandTotal = subtotal + taxAmount - discount + roundOff;



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
  
  const saveMedicalBill = async () => {
    try {
      // Validate required fields
      if (!patientDetails.patientName || rows.length === 0 || !rows[0].medicine) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Prepare data for submission
      const billData = {
        patientDetails: {
          patientId: patientId,
          patientName: patientDetails.patientName,
          age: patientDetails.age,
          gender: patientDetails.gender,
          phone: patientDetails.phone,
          address: patientDetails.address,
          bloodGroup: patientDetails.bloodGroup
        },
        medicines: rows.map(row => ({
          medicineName: row.medicine?.name || '',
          quantity: row.quantity,
          unitPrice: row.unitPrice,
          total: row.total
        })),
        billing: {
          subtotal,
          discount,
          tax: taxAmount,
          taxPercent,
          roundOff,
          grandTotal
        },
        doctorName: formData.doctorName,
        department: formData.department,
        billNo: formData.billNo,
        billDate: new Date().toISOString()
      };
      
      // Send data to backend
      const response = await fetch.post('/medical-bill', billData);
      
      if (response.data && response.data.success) {
        alert('Medical bill saved successfully!');
        // Optionally print the bill after saving
        handlePrint();
        // Reset form or redirect
      } else {
        alert('Failed to save medical bill. Please try again.');
      }
    } catch (error) {
      console.error('Error saving medical bill:', error);
      alert('An error occurred while saving the medical bill.');
    }
  };

  return (
    <div className="container">
      <form>
        <div className="row bill-container" ref={componentRef}>
          <div className="col-sm-12">
            <p className='add-new-head'>New Pharmacy Bills</p>
          </div>
          {/* Patient ID & Age */}
          <div className="col-sm-4">
            <div className="form-group">
              <label>Patient ID:</label>
              <input type="text" className="form-controls" value={patientId} onChange={(e) => setPatientId(e.target.value)} onBlur={() => handleSearchByPatientId(patientId)} style={{ color: 'red', fontWeight: '700' }} />
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
                      patientId: selected.patientId,
                      patientName: selected.patientName?.name || "",
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
                <input type="text" className="form-controls" value={patientDetails.patientName} readOnly />
              )}
            </div>
            <div className="form-group">
              <label>Consulted Doctor Name:</label>
              <TextField
                type="text"
                size="small"
                placeholder="Doctor Name"
                value={formData.doctorName}
                onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                fullWidth
              />
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
              <TextField
                type="text"
                size="small"
                placeholder="Department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Extra details */}
        <div className="row   " style={{paddingX:"10px"}}>
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
                  <TableCell align="right">Unit Price (₹)</TableCell>
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
                        loading={loadingMedicines}
                        renderInput={(params) => (
                          <TextField 
                            {...params} 
                            size="small" 
                            placeholder="Medicine" 
                            InputProps={{
                              ...params.InputProps,
                              endAdornment: (
                                <React.Fragment>
                                  {loadingMedicines ? <CircularProgress color="inherit" size={20} /> : null}
                                  {params.InputProps.endAdornment}
                                </React.Fragment>
                              ),
                            }}
                          />
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField type="number" size="small" value={row.quantity} onChange={(e) => handleQuantityChange(idx, e.target.value)} inputProps={{ min: 1 }} />
                    </TableCell>
                    <TableCell align="right">{row.unitPrice}</TableCell>
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
                {/* <TableRow><TableCell colSpan={2}>Tax (%)</TableCell><TableCell><TextField type="number" size="small" value={taxPercent} onChange={(e) => setTaxPercent(parseFloat(e.target.value) || 0)} /></TableCell><TableCell align="right">+₹ {taxAmount.toFixed(2)}</TableCell></TableRow> */}
                <TableRow><TableCell colSpan={2}>Round Off</TableCell><TableCell><TextField type="number" size="small" value={roundOff} onChange={(e) => setRoundOff(parseFloat(e.target.value) || 0)} /></TableCell><TableCell align="right">₹ {roundOff.toFixed(2)}</TableCell></TableRow>
                <TableRow><TableCell colSpan={4} align="right"><strong>Final Total</strong></TableCell><TableCell align="right"><strong>₹ {grandTotal.toFixed(2)}</strong></TableCell></TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Buttons */}
        <div className="col-sm-12 save-btn">
          <button type="button" className="save-med-btn" onClick={handlePrint}>Print</button>
          <button type="button" className="save-med-btn" onClick={saveMedicalBill}>Save</button>
        </div>
      </form>
    </div>
  );
};
