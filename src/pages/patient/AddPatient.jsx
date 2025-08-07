import React, { useState, useEffect } from 'react';
import './AddPatient.css';
import { useNavigate } from 'react-router-dom';
import { useGetData } from '../../hooks/useGetData';
import { useForm } from '../../context/FormContext';
import Select from "react-select";
import { fetch } from '../../api/fetch';  
import { toast } from 'react-toastify'; 

export const AddPatient = (data, isEdit, name,) => {
    const navigate = useNavigate(); 
    const [tags, setTags] = useState([]); 
    const [input, setInput] = useState(""); 
    const today = new Date().toISOString().split('T')[0]; // Format: 'YYYY-MM-DD'
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedTime, setSelectedTime] = useState(''); 
    const [dob, setDob] = useState(''); 
    const [age, setAge] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [patientName, setPatientName] = useState(''); 
    const [guardianName, setGuardianName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState(null);
    const [bloodGroup, setBloodGroup] = useState(null);
    const [maritalStatus, setMaritalStatus] = useState(null);
    const [doctorName, setDoctorName] = useState(null);
    const [department, setDepartment] = useState(null);
    const { formData, setFormData } = useForm(); 
    const { data: nextPatientId } = useGetData("/get-next-patient-id", !isEdit);


    React.useEffect(() => { 
        if (!isEdit && nextPatientId?.patientId) { 
            setFormData((prev) => ({ ...prev, patientId: nextPatientId.patientId }));
        }
    }, [isEdit, nextPatientId, setFormData]); 



    const handleKeyDown = (e) => { 
        if ((e.key === "Enter" || e.key === "Tab") && input.trim()) {
            e.preventDefault();     

            const newTag = input.trim();
            if (!tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setInput("");
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const isFutureDate = selectedDate > today;

    const handleDobChange = (e) => {
        let selectedDob = e.target.value;

        const parts = selectedDob.split('-');
        const year = parts[0];

        // If user tries to type more than 4 digits in year, reject update entirely
        if (year.length > 4) return;

        setDob(selectedDob);

        // Only calculate age if full date is available
        if (parts.length === 3 && year.length === 4) {
            const birthDate = new Date(selectedDob);
            const today = new Date();
            let calculatedAge = today.getFullYear() - birthDate.getFullYear();

            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                calculatedAge--;
            }

            setAge(calculatedAge >= 0 ? calculatedAge : '');
        } else {
            setAge('');
        }
    };

    const options = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
    ];

    const optionsBg = [
        { value: "A+", label: "A+" },
        { value: "A-", label: "A-" },
        { value: "B+", label: "B+" },
        { value: "B-", label: "B-" },
        { value: "AB+", label: "AB+" },
        { value: "AB-", label: "AB-" },
        { value: "O+", label: "O+" },
        { value: "O", label: "O" },
    ];


    const optionsMarital = [
        { value: "Married", label: "Married" },
        { value: "Unmarried", label: "Unmarried" },
    ]

    const optionsDoctor = [
        {value: "Dr. Rajesh Kumar", label: "Dr. Rajesh Kumar"},
        {value: "Dr. Priya Nair", label: "Dr. Priya Nair"},
        {value: "Dr. Arjun Mehta", label: "Dr. Arjun Mehta"},
    ]


    const optionsDept = [
        {value: "Cardiology", label:"Cardiology"},
        {value: "Neurology", label:"Neurology"},
        {value: "Orthopedics", label:"Orthopedics"},
        {value: "Pediatrics", label:"Pediatrics"},
        {value: "Dermatology", label:"Dermatology"},
    ]


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
    


    const handleDiscard = () => {
        navigate(-1); // Go back one page
    };

    const handleSaveAndAddAppointment = async () => {
        // Validate form fields
        if (!patientName || !mobileNumber || !address || !gender || !bloodGroup || !doctorName || !selectedDate) {
            toast.error('Please fill all required fields');
            return;
        }

        if (mobileNumber.length !== 10) {
            toast.error('Mobile number must be 10 digits');
            return;
        }

        setLoading(true);

        try {
            // Step 1: Create the patient
            const patientData = {
                patientId: formData.patientId,
                patientName: {
                    name: patientName
                },
                mobileNumber: {
                    number: mobileNumber
                },
                address,
                age,
                gender: gender.value,
                bloodGroup: bloodGroup.value,
                maritalStatus: maritalStatus ? maritalStatus.value : null,
                guardianName
            };

            const patientResponse = await fetch.post('/add-patient', patientData);

            if (patientResponse.status === 201) {
                // Step 2: Create the appointment
                const appointmentData = {
                    patientId: formData.patientId,
                    doctorName: doctorName.value,
                    department: department.value,
                    appointmentDate: selectedDate,
                    appointmentTime: selectedTime,
                    patientType: 'OP',
                    status: 'registered',
                    reason: tags.join(', ')
                };

                const appointmentResponse = await fetch.post('/register-appointment', appointmentData);

                if (appointmentResponse.status === 201) {
                    toast.success('Patient and appointment created successfully');
                    navigate('/patient');
                } else {
                    toast.error('Failed to create appointment');
                }
            } else {
                toast.error('Failed to create patient');
            }
        } catch (error) {
            console.error('Error creating patient and appointment:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row add-patient-container">
                        <div className="col-sm-12">
                            <p className='add-new-head'>Add New Patient</p>
                            <p className='basic-info'>Basic Information</p>
                        </div>

                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label-controls">Patient ID:</label>
                                <input
                                    type="text"
                                    className="form-controls"
                                    readOnly
                                    required
                                    value={formData.patientId || ''}
                                    style={{ color: 'red', fontWeight: '700' }}
                                />
                            </div>


                            <div className="form-group">
                                <label className="form-label-controls">DOB:</label>
                                <input
                                    type="date"
                                    className="form-controls"
                                    required
                                    value={dob}
                                    onChange={handleDobChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Blood Group:</label>
                                <Select
                                    options={optionsBg}
                                    styles={customStyles}
                                    classNamePrefix="form-controls"
                                    placeholder="Select"
                                    value={bloodGroup}
                                    onChange={(selectedOption) => setBloodGroup(selectedOption)}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label-controls">Patient Name:</label>
                                <input
                                    type="text"
                                    className="form-controls"
                                    required
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Age:</label>
                                <input
                                    type="number"
                                    className="form-controls"
                                    value={age}
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Marital Status:</label>
                                <Select
                                    options={optionsMarital}
                                    styles={customStyles}
                                    classNamePrefix="form-controls"
                                    placeholder="Select"
                                    value={maritalStatus}
                                    onChange={(selectedOption) => setMaritalStatus(selectedOption)}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label-controls">Gaurdian / Person Name:</label>
                                <input
                                    type="text"
                                    className="form-controls"
                                    value={guardianName}
                                    onChange={(e) => setGuardianName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Gender:</label>
                                <Select
                                    options={options}
                                    styles={customStyles}
                                    classNamePrefix="form-controls"
                                    placeholder="Select"
                                    value={gender}
                                    onChange={(selectedOption) => setGender(selectedOption)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Mobile Number:</label>
                                <input
                                    type="text"
                                    className="form-controls"
                                    maxLength={10}
                                    inputMode="numeric"
                                    pattern="\d{10}"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value.replace(/[^0-9]/g, ""))}
                                    onInput={(e) => {
                                        // Replace any non-digit character
                                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                    }}
                                    required
                                />
                            </div>

                        </div>
                    </div>


                    <div className="row add-patient-container">
                        <div className="col-sm-12">

                            <div className="form-group">
                                <label className="form-label-controls">Address:</label>
                                <textarea
                                    className="form-controls"
                                    rows="4"
                                    style={{ width: '100%', height: '150px' }}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                        </div>


                    </div>
                    <div className="row add-patient-container">
                        <div className="col-sm-12">

                            <div className="form-group">
                                <label className="form-label-controls">Reason:</label>
                                <div className="input-form-tags modal-tags">
                                    <div
                                        className="form-control d-flex flex-wrap gap-2 p-2"
                                        style={{
                                            backgroundColor: "#E7F1FC",
                                            color: "black",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="badge d-flex align-items-center"
                                                style={{
                                                    backgroundColor: "#d0e6fa",
                                                    color: "black",
                                                    paddingRight: "8px",
                                                }}
                                            >
                                                {tag}
                                                <button
                                                    type="button"
                                                    className="btn-close ms-2"
                                                    style={{ fontSize: "0.6rem" }}
                                                    onClick={() => removeTag(tag)}
                                                ></button>
                                            </span>
                                        ))}

                                        <input
                                            type="text"
                                            className="border-0 flex-grow-1"
                                            placeholder="+ Add new Reason"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            style={{
                                                outline: "none",
                                                minWidth: "150px",
                                                backgroundColor: "#E7F1FC",
                                                color: "black", 
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="row add-patient-container">
                        <div className="col-sm-12">
                            <p className='basic-info'>Assign Doctor</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="form-label-controls">Doctor Name:</label>
                                <Select
                                    options={optionsDoctor}
                                    styles={customStyles}
                                    classNamePrefix='form-controls'
                                    placeholder="Select"
                                    value={doctorName}
                                    onChange={(selectedOption) => setDoctorName(selectedOption)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Appoitnment Date:</label>
                                <input
                                    type="date"
                                    className="form-controls"
                                    required
                                    min={today} // restricts to today or future
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="form-label-controls">Department:</label>
                                <Select
                                    options={optionsDept}
                                    styles={customStyles}
                                    classNamePrefix="form-controls"
                                    placeholder="Select"
                                    value={department}
                                    onChange={(selectedOption) => setDepartment(selectedOption)}
                                />
                            </div>
                            {isFutureDate && (
                                <div className="form-group">
                                    <label className="form-label-controls">Appoitment Time:</label>
                                    <input
                                        type="time"
                                        className="form-controls"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        required
                                    />
                                </div>
                            )}
                        </div>
                        <div className="col-sm-12 discard-add-btn">
                            <button className='discard-patient-btn' onClick={handleDiscard}>Discard</button>
                            <button 
                                type="button" 
                                className='add-patient-btn' 
                                onClick={handleSaveAndAddAppointment} 
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : 'Save & Add Appointment'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
