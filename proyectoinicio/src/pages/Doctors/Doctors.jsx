import React, { useEffect, useState } from 'react'
import DoctorCard from './../../components/Cards/DoctorCard';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc,} from "firebase/firestore";
import { get } from 'lodash';


function Doctors() {

    const [doctors, setDoctors] = useState([])


    useEffect(() => {

        const q = query(collection(db, "users"), where("rol", "==", "doctor"));
        
        getDocs(q).then(res => setDoctors(res.docs.map(person => ({id: person.id, ...person.data() }))));

    }, []);


  return (
    <>
        <div>
            {
                doctors.map((doctor) => (
                <DoctorCard doctor={doctor} />
                ))
             }    
        </div>
    </>
  )
}

export default Doctors
