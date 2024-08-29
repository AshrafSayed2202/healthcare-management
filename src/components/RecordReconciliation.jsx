import React from 'react';
import { useSelector } from 'react-redux';

const RecordReconciliation = () => {
    const patients = useSelector(state => state.patients);
    const appointments = useSelector(state => state.appointments);

    // Logic for reconciliation (this could be expanded based on actual requirements)
    const reconciledRecords = patients.map(patient => {
        const patientAppointments = appointments.filter(app => app.patientId === patient.id);
        const totalAppointments = patientAppointments.length;
        const lastAppointment = patientAppointments[patientAppointments.length - 1] || {};

        return {
            ...patient,
            totalAppointments,
            lastAppointmentDate: lastAppointment.date,
        };
    });

    return (
        <div className='container'>
            <h2>Record Reconciliation</h2>
            <ul>
                {reconciledRecords.map(record => (
                    <li key={record.id}>
                        {record.name}: {record.totalAppointments} appointments (Last: {record.lastAppointmentDate})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecordReconciliation;
