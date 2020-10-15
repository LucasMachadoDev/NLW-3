const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create map
const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 16);

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
L.marker([-27.222633, -49.6455874], {icon}).addTo(map)

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