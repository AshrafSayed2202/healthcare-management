import React from 'react';
import { useSelector } from 'react-redux';
import './PatientPortalComponent.css';

const PatientPortal = () => {
    const patients = useSelector(state => state.patients);
    const appointments = useSelector(state => state.appointments);

    return (
        <div className='container patient-portal'>
            <h2>Patient Portal</h2>
            <div className='medical-history'>
                {patients.map(patient => (
                    <div key={patient.id} className='patient-card'>
                        <h4>{patient.name}</h4>
                        <h6>ID: {patient.id}</h6>
                        <ul>
                            {appointments
                                .filter(app => app.patientId === patient.id)
                                .map(app => (
                                    <li key={app.id} className='appointment-item'>
                                        {app.date} - {app.time} : {app.reason}
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientPortal;
