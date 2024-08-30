import React from 'react';
import { useSelector } from 'react-redux';

const RecordReconciliation = () => {
    const patients = useSelector(state => state.patients);
    const appointments = useSelector(state => state.appointments);

    const reconciledRecords = React.useMemo(() => {
        return patients.map(patient => {
            const patientAppointments = appointments.filter(app => app.patientId.toString() === patient.id.toString());
            const totalAppointments = patientAppointments.length;
            const lastAppointment = patientAppointments.length > 0 ? patientAppointments[patientAppointments.length - 1].date : 'No appointments';

            return {
                ...patient,
                totalAppointments,
                lastAppointmentDate: lastAppointment,
            };
        });
    }, [patients, appointments]);

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
