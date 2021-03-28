import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeGetCitiesRequest } from '../../Redux/Cities/actions';
import styles from "./Cities.module.css";
import {useHistory} from "react-router-dom"

export const Cities = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [type, setType] = useState("Select..")
    const [search, setSearch] = useState("")
    const cityData = useSelector((state) => state.cities.cities)
    var cities = cityData;
    var town = cities.filter((district) => district.type === "Town")
    var metro = cities.filter((district) => district.type === "Metro")
    var village = cities.filter((district) => district.type === "Village")

    useEffect(() => {
        dispatch(makeGetCitiesRequest())
    }, [])

    const handlePush = (city) => {
        history.push(`/city/${city}`)
    }

    const handleSearch = () => {

        cities = cities.filter((item) => item.city.toLowerCase().includes(search.toLowerCase()))
        console.log(cities)
    }

    return (
        <div className = {styles.full}>
            <div className = {styles.top}>
                <div className = {styles.search}>
                    <div>Search</div>
                    <input value = {search} placeholder = "Search.." onChange = {(e) => setSearch(e.target.value)}/>
                    <button onClick = {handleSearch}>Search</button>
                </div>
                <div>
                <div>Sort By:</div>
                <select value = {type} onChange = {(e) => setType(e.target.value)}>
                <option>Select..</option>
                <option value = "Town">Town</option>
                <option value = "Metro">Metro</option>
                <option value = "Village">Village</option>
            </select>
            </div>
            </div>
            <div className = {styles.heading}>
                Election Poll Station Manager
            </div>
            <div className = {styles.table}>
            <div className = {styles.box1}>
                        <div> City </div>
                        <div> District </div>
                        <div> Polling Stations </div>
                    </div>
                {
                    type === "Metro" ? (metro.map((city) => (
                        <div className = {styles.box}>
                            <div onClick = {(name) => handlePush(city.city) } > {city.city} </div>
                            <div> {city.name} </div>
                            <div> {city.pollingStations.length} </div>
                        </div>
                    ))) : type === "Town" ? (town.map((city) => (
                        <div className = {styles.box}>
                            <div onClick = {(name) => handlePush(city.city) } > {city.city} </div>
                            <div> {city.name} </div>
                            <div> {city.pollingStations.length} </div>
                        </div>
                    ))) : type === "Village" ? (village.map((city) => (
                        <div className = {styles.box}>
                            <div onClick = {(name) => handlePush(city.city) } > {city.city} </div>
                            <div> {city.name} </div>
                            <div> {city.pollingStations.length} </div>
                        </div>
                    ))) : (cities && cities.map((city) => (
                        
                        <div className = {styles.box}>
                            <div onClick = {(name) => handlePush(city.city) } > {city.city} </div>
                            <div> {city.name} </div>
                            <div> {city.pollingStations.length} </div>
                        </div>
                        
                    )))
                }
            </div>
        </div>
    )
}
