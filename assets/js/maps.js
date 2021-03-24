
var options = {
    zoom: 12,
    center: { lat: 53.34003492552744, lng: -6.259437301645186 }
}

const locations = [
    {loc: {lat: 53.34003492552744, lng: -6.259437301645186 }, cont:'<h3>Location of our office</h3>'}, //office
    {loc: {lat: 53.33934048335442, lng: -6.262514241748317 }, cont:'<p>Here is our convenient car park</p>'}, //car park
    {loc: {lat: 53.340056909822714, lng: -6.258445392166223 }, cont:'<p>Our venue place</p>'}, //restaurant
    {loc: {lat: 53.338843836008515, lng: -6.252721223079907 }, cont: '<p>Accomodation for our members</p>'} //hotel
  ];

//https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// Initialize and add the map
function initMap() {
    
    // new map
    const map = new google.maps.Map(document.getElementById("contact-map"), options);
    // Create an array of alphabetical characters used to label the markers.
    
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    
    var markers = locations.map((location, i) => {
    
        return new google.maps.Marker({
            position: location.loc,
            label: labels[i % labels.length],
        });
    });
/*
    var infoWindow = new google.maps.InfoWindow({
        content: 'hello'
    });
    
    markers.addListener('click', function(){
        infoWindow.open(map, marker);
    });
*/
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
    console.log(typeof(markers));
}

function showOffice() {
    options = {
        zoom: 18,
        center: { lat: 53.34003492552744, lng: -6.259437301645186 }
    }
    initMap();
}