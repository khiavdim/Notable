function Doctors(doctorData) {
  return (
    <div className="">
      <div>notable</div>
      <div>physicians</div>
      <div>
        {Object.values(doctorData).map(doctor => {
            return (
                <div>
                    {doctor.map(dr => {
                        return (
                            <div>
                        <p key={dr.id}>{dr.id} </p><br />
                        <p>{dr.doctor_fname}</p><br />
                        <p>{dr.doctor_lname}</p><br />
                        <p>{dr.email}</p><br />
                        </div>
        )})}
                </div>
        )})}
      </div>
      <div>logout button</div>
    </div>
  );
}

export default Doctors;