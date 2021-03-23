//https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// Initialize and add the map
function initMap() {
// The location of Uluru
const uluru = { lat: 53.339878, lng: -6.261626 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("contact-map"), {
    zoom: 14,
    center: uluru,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
    position: uluru,
    map: map,
});
}