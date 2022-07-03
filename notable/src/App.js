import './App.css';
import Doctors from './Doctors';
import Appointments from './Appointments';
import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function App() {
  const [doctorData, setDoctorData] = useState([]);
  const [apptData, setApptData] = useState([]);
  const [selectedDr, setSelectedDr] = useState(0);
  
  useEffect(() => {
    axios.get('http://localhost:4200/api/doctors')
    .then(res => {
     setDoctorData(res.data);
    });
    axios.get('http://localhost:4200/api/appts')
      .then(res => {
       setApptData(res.data);
      });
  }, [])

  console.log('App', doctorData)
  return (
    <div className="App">
      <Doctors doctorData={doctorData} setDoctorData={setDoctorData}/>
      <Appointments selectedDr={selectedDr} doctorData={doctorData} apptData={apptData} setApptData={setApptData}/>
    </div>
  );
}


