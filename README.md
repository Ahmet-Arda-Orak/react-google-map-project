# react-google-map-project

When I first heard about “google-map “react integration I thought it will go like this;😃
<iframe src="https://www.google.com/maps" title="Google Maps"></iframe>

It won’t work this easy but don’t worry also it’s not that complex. So let's get started!
First, create a react project with “npx create-react-app …”. Actually, I won't explain these parts so just clean your src file (except your App.js and index.js)
Then install google-map-react with npm or yarn;

npm i google-map-react
//or
yarn add google-map-react

then go to your App.js file — make the imports and create a “GoogleMapReact” component

import GoogleMapReact from 'google-map-react';
//inside return
<GoogleMapReact
bootstrapURLKeys={{ key:''}}
defaultCenter={coordinates}
center={coordinates}
defaultZoom={8}
margin={[10, 10, 10, 10]}
options={""}
// onChildClick={""}
>

This code will create a map but it will be empty — for enabling the map you must get an API key.

bootstrapURLKeys={{ key:''}}

and put inside here. So where you will get the API key.
First, just go to Google Clouds Platform — https://console.cloud.google.com
Then create an account. If you have one make sure your billing is open. For starting your billing go to billings and start your 300$ free trial.
After the accounting process go to API’s part:

Search for Maps Javascript API

then activate — after activation, it redirects you to the API page — choose credentials and click new key.
Copy the key and paste it into your project
Styling Map
options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
Change the options part like this and go to https://snazzymaps.com/. Choose one of them and paste the styling inside your styles.js file

My favorite Assasin’s Creed 4 👉https://snazzymaps.com/#google_vignette







