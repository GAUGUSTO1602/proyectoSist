import React, { useEffect, useState } from 'react';
import DoctorCard from './../../components/Cards/DoctorCard';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";
import Styles from "./Doctors.css"

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [nameQuery, setNameQuery] = useState('');
    const [specialtyQuery, setSpecialtyQuery] = useState('');

    useEffect(() => {
      const q = query(collection(db, "users"), where("rol", "==", "doctor"));
        
      getDocs(q).then(res => setDoctors(res.docs.map(person => ({id: person.id, ...person.data() }))));
    } , []);

    const handleSearch = (event) => {
      const { name, value } = event.target;
      if (name === 'nameQuery') {
        setNameQuery(value);
      } else if (name === 'specialtyQuery') {
        setSpecialtyQuery(value);
      }
    }

    const filteredDoctors = doctors.filter((doctor) => {
      const nameMatch = doctor.name.toLowerCase().includes(nameQuery.toLowerCase());
      const specialtyMatch = doctor.specialty.toLowerCase().includes(specialtyQuery.toLowerCase());
      return nameMatch && specialtyMatch;
    });

    return (
          <div>
              <div>
                    <div className={Styles.buscadorDoc}>
                      <input  type="text" placeholder="Buscar médico" name={"nameQuery"} onChange={handleSearch} />
                      <input  type="text" placeholder="Buscar por especialidad" name="specialtyQuery" onChange={handleSearch} />
                    </div>

                    <div>    
                      {
                        filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor) => (
                                <DoctorCard key={doctor.id} doctor={doctor} />
                            ))
                        ) : (
                            <p className={Styles.r}>No se encontraron resultados</p>
                        )
                      } 
                    </div>      
                </div>
          </div>
    )
}

export default Doctors;
