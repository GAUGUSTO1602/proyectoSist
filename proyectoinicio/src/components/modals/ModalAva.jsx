import React from 'react'
import "./ModalAva.css"
import { useState } from 'react'
import ReactDatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { useUser } from '../../context/UserContext'
import { db } from '../../firebase/config'
import { updateDoc, doc } from '@firebase/firestore'


export const ModalAva = ({openModal, setOpenModal}) => {

    const {user} = useUser()

    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [startDate3, setStartDate3] = useState(new Date());
    const [startDate4, setStartDate4] = useState(new Date());
    const [startDate5, setStartDate5] = useState(new Date());

    const saveDates = async () => {
        const dates = {startDate, startDate2, startDate3, startDate4, startDate5}

        await updateDoc(doc(db, "users", user.uid), {
            availability: dates
        })

        setOpenModal(false)

        alert("fechas guardadas con exito")
    }


    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handleDate = (e) =>{

        const options = {month: "numeric", day: "numeric", year: "numeric" }
        setStartDate(e)
        
    
     }

     const handleDate2 = (e) =>{

        const options = {month: "numeric", day: "numeric", year: "numeric" }
        setStartDate2(e)
        
    
     }
     const handleDate3 = (e) =>{

        const options = {month: "numeric", day: "numeric", year: "numeric" }
        setStartDate3(e)
        
    
     }
     const handleDate4 = (e) =>{

        const options = {month: "numeric", day: "numeric", year: "numeric" }
        setStartDate4(e)
        
    
     }
     const handleDate5 = (e) =>{

        const options = {month: "numeric", day: "numeric", year: "numeric" }
        setStartDate5(e)
        
    
     }

  return (
    <div className='container'>

        <div className='modal-container'>
            <h2 className='til'>INGRESA TUS FECHAS DE DISPONIBILIDAD</h2>

            <div className='inputTime'>

                <div>
                    <h3 className='date1'>Fecha 1:</h3>
                    <ReactDatePicker
                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                            }) => (
                                <div
                                >
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) => changeYear(value)}
                                >
                                    {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                </div>
                            )}
                            selected={startDate}
                            onChange={handleDate}
                        />
                </div>

                <div className="">
                    <h3 className='date2'>Fecha 2:</h3>
                    <ReactDatePicker
                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                            }) => (
                                <div
                                >
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) => changeYear(value)}
                                >
                                    {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                </div>
                            )}
                            selected={startDate2}
                            onChange={handleDate2}
                        />
                </div>

                <div className="">
                    <h3 className='date1'>Fecha 3:</h3>
                    <ReactDatePicker
                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                            }) => (
                                <div
                                >
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) => changeYear(value)}
                                >
                                    {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                </div>
                            )}
                            selected={startDate3}
                            onChange={handleDate3}
                        />
                </div>

                <div className="">
                    <h3 className='date1'>Fecha 4:</h3>
                    <ReactDatePicker
                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                            }) => (
                                <div
                                >
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) => changeYear(value)}
                                >
                                    {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                </div>
                            )}
                            selected={startDate4}
                            onChange={handleDate4}
                        />
                </div>

                <div className="">
                    <h3 className='date1'>Fecha 5:</h3>
                    <ReactDatePicker
                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                            }) => (
                                <div
                                >
                                <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) => changeYear(value)}
                                >
                                    {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>

                                </div>
                            )}
                            selected={startDate5}
                            onChange={handleDate5}
                        />
                </div>

                <div className='btns'>
                    <button className="btn1" onClick={saveDates}>Subir</button>
                    <button className="btn2" onClick={() => {setOpenModal(false)}}>Cancelar</button>
                </div>

                
        </div>
        </div>

        

    </div>
  )
}
