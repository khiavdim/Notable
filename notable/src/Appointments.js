import { useEffect, useState } from "react";

function Appointments(doctorData, apptData, selectedDr) {
    const [drApptData, setDrApptDoctorData] = useState(1);

    console.log('APPT #1', doctorData);

    useEffect(() => {
        if (selectedDr != 0) {
            setDrApptDoctorData(Object.values(doctorData).filter(doctor => doctor.id === selectedDr))
        } else {
            console.log('here in appt useEffect');
        }
    }, [])

    console.log('APPT', doctorData);

    return (
        <div>
            Appts
      </div>
    );
  }
  
  export default Appointments;