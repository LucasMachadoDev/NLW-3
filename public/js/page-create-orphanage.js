// Create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 16);

// create and titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: './public/img/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove icon
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

// Add field photos
function addPhotoField() {
    // Get container photos #images
    const container = document.querySelector('#images');

    // Get container for duplicate .new-image
    const newImage = document.querySelectorAll('.new-upload');

    // Realize clone of the last image add
    const newFieldImage = newImage[newImage.length - 1].cloneNode(true);

    // Verify if field is empty, if yes, don't add to container of images 
    const input = newFieldImage.children[0]

    if(input.value == '') {
        return
    }

    // Clear field before add to container images
    input.value = ''

    // Add clone in container of #images
    container.appendChild(newFieldImage);
}

function deleteField(event) {
    const span = event.currentTarget;

    const newImage = document.querySelectorAll('.new-upload');

    if(newImage.length < 2) {
        // Clear the value of field
        span.parentNode.children[0].value = ''
        return
    }

    // Delete field
    span.parentNode.remove();
}

// Select Yes or No
function toggleSelect(event) {
    // Remove class active from the buttons
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    // Add class active on cliked button
    const button = event.currentTarget;
    button.classList.add('active');

    // Verify if yes or no


    // Update input hidden with value selected
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value;
}