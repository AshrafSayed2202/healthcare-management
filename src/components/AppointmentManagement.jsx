import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment, updateAppointment, deleteAppointment } from '../state/appointmentsSlice';
import { v4 as uuidv4 } from 'uuid';

const AppointmentManagement = () => {
    const appointments = useSelector(state => state.appointments);
    const [appointmentDetails, setAppointmentDetails] = useState({ id: '', patientId: '', date: '', time: '', reason: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        // This could be used for data fetching if needed
    }, []);

    const handleSchedule = () => {
        dispatch(addAppointment({ ...appointmentDetails, id: uuidv4() }));
        setAppointmentDetails({ id: '', patientId: '', date: '', time: '', reason: '' });
    };

    const handleReschedule = (id) => {
        dispatch(updateAppointment({ ...appointmentDetails, id }));
        setAppointmentDetails({ id: '', patientId: '', date: '', time: '', reason: '' });
    };

    const handleDelete = (id) => {
        dispatch(deleteAppointment(id));
    };

    return (
        <div>
            <h2>Appointment Management</h2>
            <div>
                <h3>Schedule Appointment</h3>
                <input
                    type="text"
                    placeholder="Patient ID"
                    value={appointmentDetails.patientId}
                    onChange={(e) => setAppointmentDetails({ ...appointmentDetails, patientId: e.target.value })}
                />
                <input
                    type="date"
                    value={appointmentDetails.date}
                    onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
                />
                <input
                    type="time"
                    value={appointmentDetails.time}
                    onChange={(e) => setAppointmentDetails({ ...appointmentDetails, time: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Reason"
                    value={appointmentDetails.reason}
                    onChange={(e) => setAppointmentDetails({ ...appointmentDetails, reason: e.target.value })}
                />
                <button onClick={handleSchedule}>Schedule</button>
            </div>

            <div>
                <h3>Appointment History</h3>
                <ul>
                    {appointments.map((appointment) => (
                        <li key={appointment.id}>
                            {appointment.date} - {appointment.time} with Patient ID {appointment.patientId} for {appointment.reason}
                            <button onClick={() => handleReschedule(appointment.id)}>Reschedule</button>
                            <button onClick={() => handleDelete(appointment.id)}>Cancel</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AppointmentManagement;
