import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({pin}) =>{

    const classes = useStyles();

    return(
      <div>
    <Card elevation={6}>
      {/* <CardMedia
        style={{ height: 300 }}
        image={pin.photo ? pin.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-pinholder-001.jpg'}
        title={pin.name}
      /> */}
        <div className="videores">
          <iframe
            width="100%"
            height="250px"
            src={`https://www.youtube.com/embed/Y45C0PozD3c`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <CardContent>
            <Typography gutterBottom variant="h5" >
                {pin.title}
            </Typography>
            <Typography className={classes.bold} gutterBottom variant="p" >
                {pin.name}
            </Typography>
            {/* <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Fiyat</Typography>
                <Typography gutterBottom variant="subtitle1">{pin.price_level}</Typography>
            </Box> */}
            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Puan</Typography>
                <Typography gutterBottom variant="subtitle1">{pin.rating}</Typography>
            </Box>
            <Typography variant="p" >
                {pin.desc}
            </Typography>
            {pin?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {pin.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{pin.address}
          </Typography>
        )}
        {pin.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {pin.phone}
          </Typography>
        )}
        </CardContent>
        {/* Butonlar */}
        <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(pin.web_url, '_blank')}>
          Hakkında
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(pin.website, '_blank')}>
          Web site
        </Button>
      </CardActions>
    </Card>
    </div>
    )
}

export default PlaceDetails;