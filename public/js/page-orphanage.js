const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// Create map
const map = L.map('mapid', options).setView([lat, lng], 16);

// create and titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: '/img/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create and add marker
L.marker([lat, lng], {icon}).addTo(map)

// Image galery
function selectImage(event) {
    const button = event.currentTarget

    // Remove all active class
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => {
        button.classList.remove('active');
    })

    /*function removeActiveClass(button) {
        button.classList.remove('active');
    }*/

    // Select img click
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img')

    // upadte container img
    imageContainer.src = image.src

    // Add class active on button selected
    button.classList.add('active');
}