import React, { useEffect, useState } from 'react'
import styles from "./Polling.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { makeGetDistrictRequest, makeStationRequest } from '../../Redux/Station/actions';

export const Polling = () => {

    const district = useSelector((state) => state.station.data.district)
    const id = useSelector((state) => state.login.user.user._id)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(makeGetDistrictRequest(id))
    }, [id, district])


    const [name, setName] = useState("")
    const [add, setAdd] = useState("")
    const [pin, setPin] = useState("")

    const handleAdd = (e) => {
        e.preventDefault();

        const userDetails = {
            "name": name,
            "address": add,
            "pincode": pin,
            "id": id
        }

        dispatch(makeStationRequest(userDetails))
    }
    return (
        <div className = {styles.full}>
            {
                district && <div className = {styles.heading}>
                <div> Population: {district.population} </div>
                <div> District: {district.name} </div>
                <div> Type: {district.type} </div>
            </div>
            }
            <div className = {styles.form}>
                <div> Add a new Polling Station </div>
                <input value = {name} placeholder = "Name" onChange = {(e) => setName(e.target.value)}/>
                <input value = {add} placeholder = "Address" onChange = {(e) => setAdd(e.target.value)}/>
                <input value = {pin} placeholder = "Pincode" onChange = {(e) => setPin(e.target.value)}/>
                <button onClick = {handleAdd} > Add Polling Station </button>
            </div>
            <div className = {styles.table}>
                {district && <div className = {styles.extra} > Polling Stations in your District - {district.name} </div>}
                <div className = {styles.box1}>
                        <div> Name </div>
                        <div> Address </div>
                        <div> Pincode </div>
                </div>
                {
                    district && district.pollingStations.map((station) => 
                        <div className = {styles.box}>
                            <div> {station.name} </div>
                            <div> {station.address} </div>
                            <div> {station.pincode} </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

