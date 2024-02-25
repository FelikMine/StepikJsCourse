import L from 'leaflet';

export function addTileLayer (map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '<span class="rightCornerText"> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.<br>Coded by <a href="https://vk.com/felikmine">Maria Felicia</a>.</span>'
    }).addTo(map);
}