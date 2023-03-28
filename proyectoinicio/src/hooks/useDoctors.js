import { useCallback, useState } from "react";
import { db } from "../firebase/config";
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc,} from "firebase/firestore";

export function useDoctors() {
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState(null);


  const getDoctors = useCallback(async () => {
    try {
      setIsLoading(true);
        
      const q = query(collection(db, "users"), where("rol", "==", "doctor"))

      const { data } = await getDocs(q);
      setDoctors(data.results);
      setIsLoading(false);

      return doctors;
    } catch (error) {
      console.error("FAILED GET DOCTOR", error);
    }
  }, []);

  const getDoctor = useCallback(async (doctorId) => {
    try {
        setIsLoading(true);

        const q = query(collection(db, "users"), where("uid", "==", doctorId))         

        getDocs(q).then(res => setDoctor({id: res, ...res.data() }));

        setIsLoading(false);

        return doctor;
        } catch (error) {
        console.error("FAILED GET DOCTOR", error);
    }
  }, []);

  return {
    isLoading,
    doctors,
    doctor,
    getDoctors,
    getDoctor,
  };
}