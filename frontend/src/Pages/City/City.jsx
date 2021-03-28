import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from "./City.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom"
import { makeGetCityRequest } from '../../Redux/City/actions';

export const City = () => {

    const {id} = useParams()

    const dispatch = useDispatch()
    const history = useHistory()

    const cityData = useSelector((state) => state.city.city)

    useEffect(() => {
        dispatch(makeGetCityRequest(id))
    }, [])

    console.log(cityData)

    return (
        <div className = {styles.full}>
            <div className = {styles.heading}>
                Election Poll Station Manager
            </div>
            <div className = {styles.table}>
                {
                    cityData && cityData.map((city) => 
                        city.pollingStations.map((station) => (
                            <div className = {styles.box}>
                                <div> {station.name} </div>
                                <div> {station.address} </div>
                                <div> {station.pincode} </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

