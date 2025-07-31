import React, { useState } from 'react'
import './NewAppointment.css'
import { useNavigate } from 'react-router-dom';

export const NewAppointment = () => {
    const navigate = useNavigate();

    const [tags, setTags] = useState(["Cold", "Cough", "Fever"]);
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
