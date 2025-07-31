import React, { useState } from 'react';
import './AddPatient.css';
import { useNavigate } from 'react-router-dom';
import { useGetData } from '../../hooks/useGetData';
import { useForm } from '../../context/FormContext';

export const AddPatient = (data, isEdit, name,) => {
    const navigate = useNavigate();
    const [tags, setTags] = useState(["Cold", "Cough", "Fever"]);
    const [input, setInput] = useState("");
    const today = new Date().toISOString().split('T')[0]; // Format: 'YYYY-MM-DD'
    const [selectedDate, setSelectedDate] = useState(today);
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
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




    const handleDiscard = () => {
        navigate(-1); // Go back one page
    };
    return (
        <>
            <div className="container">
                <form>
                    <div className="row add-patient-container">
                        <div className="col-sm-12">
                            <h3>Add New Patient</h3>
                            <h4>Basic Information</h4>
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
                                    style={{ color: 'red', fontWeight:'700' }}
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
                                <select
                                    className="form-controls form-controls-select"
                                >
                                    <option value="">Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>

                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label-controls">Patient Name:</label>
                                <input
                                    type="text"
                                    className="form-controls"
                                    required
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
                                <select
                                    className="form-controls form-controls-select"
                                >
                                    <option value="">Select</option>
                                    <option value="Married">Married</option>
                                    <option value="Unmarried">Unmarried</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label-controls">Gaurdian / Person Name:</label>
                                <input
                                    type="text"
                                    className="form-controls"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Gender:</label>
                                <select
                                    className="form-controls form-controls-select"
                                >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Mobile Number:</label>
                                <input
                                    type="number"
                                    className="form-controls"
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
                                    <div className="form-control d-flex flex-wrap gap-2 p-2">
                                        {tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-light text-dark d-flex align-items-center"
                                                style={{ paddingRight: "8px" }}
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
                                            style={{ outline: "none", minWidth: "150px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row add-patient-container">
                        <div className="col-sm-12">
                            <h4>Assign Doctor</h4>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="form-label-controls">Doctor Name:</label>
                                <select
                                    className="form-controls form-controls-select"
                                >
                                    <option value="">Select</option>
                                    <option value="Dr. Rajesh Kumar">Dr. Rajesh Kumar</option>
                                    <option value="Dr. Priya Nair">Dr. Priya Nair</option>
                                    <option value="Dr. Arjun Mehta">Dr. Arjun Mehta</option>
                                </select>
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
                                <select
                                    className="form-controls form-controls-select"
                                >
                                    <option value="">Select</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                    <option value="Dermatology">Dermatology</option>
                                </select>
                            </div>
                            {isFutureDate && (
                                <div className="form-group">
                                    <label className="form-label-controls">Appoitment Time:</label>
                                    <input
                                        type="time"
                                        className="form-controls"
                                        required
                                    />
                                </div>
                            )}
                        </div>
                        <div className="col-sm-12 discard-add-btn">
                            <button className='discard-patient-btn' onClick={handleDiscard}>Discard</button>
                            <button className='add-patient-btn'>Save & Add Appointment</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
