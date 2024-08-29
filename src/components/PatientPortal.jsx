import React from 'react';
import { useSelector } from 'react-redux';

const PatientPortal = () => {
    const patients = useSelector(state => state.patients);
    const appointments = useSelector(state => state.appointments);

    // Example data for billing
    const billingInfo = [
        { patientId: '1', total: '$200', paid: '$150', due: '$50' },
        { patientId: '2', total: '$500', paid: '$500', due: '$0' },
    ];

    return (
        <div>
            <h2>Patient Portal</h2>

            <div>
                <h3>Medical History</h3>
                {patients.map(patient => (
                    <div key={patient.id}>
                        <h4>{patient.name}</h4>
                        <ul>
                            {appointments
                                .filter(app => app.patientId === patient.id)
                                .map(app => (
                                    <li key={app.id}>
                                        {app.date} - {app.time} : {app.reason}
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div>
                <h3>Billing Information</h3>
                {billingInfo.map(bill => (
                    <div key={bill.patientId}>
                        <h4>Patient ID: {bill.patientId}</h4>
                        <p>Total: {bill.total}</p>
                        <p>Paid: {bill.paid}</p>
                        <p>Due: {bill.due}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientPortal;
