import React, {useState,useEffect} from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import { getPlacesData } from "./api";
import axios from "axios";

import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import PlaceDetails from "./components/PlaceDetails/PlaceDetails"

const App = () =>{
    const [places,setPlaces] = useState([]);   
    
    const [coordinates,setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [pins,setPins] = useState([]);


    useEffect(() => {
         navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
           setCoordinates({ lat: latitude, lng: longitude });
       });
        }, []);

     useEffect(()=>{
         console.log(coordinates, bounds);
         getPlacesData()//delete and re paste this part for restart
         .then((data)=>{
             console.log(data);
             setPlaces(data);
         })
     },[coordinates, bounds]);

    useEffect(() => {
		axios.get("http://localhost:8800/api/pins")
            .then(res => {
                console.log(res)
                setPins(res.data)
            })
            .catch(err => {
                console.log(err)
            })
	},[])
    

    return(
        <div>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: "100%"}}>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        pins={pins}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <List pins={pins} />
                </Grid>
            </Grid>
        </div>
    )
}

export default App;