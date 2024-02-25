// import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {addOffset,addTileLayer,getAddress,validateIp} from './helpers/index.js';
import icon from '../images/img.png';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [60,60],
    // iconAnchor: [25, 95],
});
const fragment = document.createDocumentFragment();

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
});
addTileLayer(map);
// var greenIcon = L.icon({             //For my example*
//     iconUrl: 'leaf-green.png',
//     shadowUrl: 'leaf-shadow.png',

//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

L.marker([51.5, -0.09], {icon: markerIcon}).addTo(map);

function getData(){
    if(validateIp(ipInput.value)) {
        getAddress(ipInput.value)
            .then(setInfo);
    }
}
function handleKey(event){
    if(event.key === "Enter"){
        getData();
    }
}
function setInfo(mapDataInfo) {
    
    const {lat, lng, country, region, timezone} = mapDataInfo.location;

    console.log(mapDataInfo);
    const text = document.createElement("p");
    text.innerText = mapDataInfo.ip;
    ipInfo.appendChild(text)

    locationInfo.innerText = country + ' ' + region;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapDataInfo.isp;

    console.log(lat,lng);
    let num1 = (Math.random () * (180 - 0 + 1))
    let num2 = (Math.random () * (180 - 0 + 1))
    map.setView([num1,num2], 15);
    L.marker([num1, num2], {icon: markerIcon}).addTo(map);

    if(matchMedia("(max-width: 1023px)").matches){
        addOffset(map);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getAddress('10.1.12.22').then(setInfo);
})

// console.log('hello world'); npm i -D parcel-bundler