import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from "../PlaceDetails/PlaceDetails"
import useStyles from './styles.js';

const List = ({pins}) =>{
    
    const classes = useStyles();
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");


    return(
        <div className={classes.container}>
            <Typography variant="h5">
                Son Gönderiler
            </Typography>
            <FormControl className={classes.formControl} >
                <InputLabel>Gezmelik</InputLabel>
                <Select value={type} onChange={(e)=> setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurantlar</MenuItem>
                    <MenuItem value="hotels">Oteller</MenuItem>
                    <MenuItem value="attractions">Tarihi Mekanlar</MenuItem>
                </Select>
            </FormControl>
            {/* Rating */}
            <FormControl className={classes.formControl} >
                <InputLabel>Puan</InputLabel>
                <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>3 ve Üzeri</MenuItem>
                    <MenuItem value={4}>4 ve Üzeri</MenuItem>
                    <MenuItem value={4.5}>4.5 ve Üzeri</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {pins?.map((pin, i) => (
                <Grid key={i} item xs={12}>
                    <PlaceDetails pin={pin}/>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List;