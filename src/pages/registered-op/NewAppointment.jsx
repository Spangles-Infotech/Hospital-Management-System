import React, { useState } from 'react'
import './NewAppointment.css'
import { useNavigate } from 'react-router-dom';
import Select from "react-select";

export const NewAppointment = () => {
    const navigate = useNavigate();

    const [tags, setTags] = useState([]);
    const [input, setInput] = useState("");
    const [showNotes, setShowNotes] = useState(false);
    
    const today = new Date().toISOString().split('T')[0]; // Format: 'YYYY-MM-DD' 
    const [selectedDate, setSelectedDate] = useState(today);

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
    return (
        <>
            <div className="container">
                <form>
                    <div className="row new-appointment-container">
                        <div className="col-sm-12">
                            <h3>Add New Appointment</h3>
                        </div>


                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label-controls">Patient ID:</label>
                                <input
                                    type="text"
                                    className="form-controls"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Doctor Name:</label>
                                <Select
                                    options={optionsDoctor}
                                    styles={customStyles}
                                    classNamePrefix='form-controls'
                                    placeholder="Select"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-controls">Date:</label>
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
                                <label className="form-label-controls">Department:</label>
                                <Select
                                    options={optionsDept}
                                    styles={customStyles}
                                    classNamePrefix="form-controls"
                                    placeholder="Select"
                                />
                            </div>
                            {isFutureDate && (
                                <div className="form-group">
                                    <label className="form-label-controls">Time:</label>
                                    <input
                                        type="time"
                                        className="form-controls"
                                        required
                                    />
                                </div>
                            )}
                        </div>


                        <div className="col-sm-4">
                            <div className="form-group">
                                <label className="form-label-controls">Age:</label>
                                <input
                                    type="number"
                                    className="form-controls"
                                    readOnly
                                />
                            </div>
                        </div>

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

                        <div className="col-sm-12">
                            <div className="form-group">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label className="form-label-controls">Quick Notes:</label>
                                    <div>
                                        <label className='form-label-controls'>
                                            <input
                                                type="checkbox"
                                                checked={showNotes}
                                                onChange={() => setShowNotes(!showNotes)}
                                                style={{ marginRight: '10px' }}
                                            />
                                            Add Notes
                                        </label>
                                    </div>
                                </div>

                                {showNotes && (
                                    <textarea
                                        className="form-controls mt-2"
                                        rows="4"
                                        style={{ width: '100%', height: '100px' }}
                                        required
                                    />
                                )}
                            </div>
                        </div>

                        <div className="col-sm-12 discard-add-btn">
                            <button className='discard-patient-btn' onClick={handleDiscard}>Discard</button>
                            <button className='add-patient-btn'>Add Appointment</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
