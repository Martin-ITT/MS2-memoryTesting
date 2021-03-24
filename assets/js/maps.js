
var options = { //center position to initialize maps
    zoom: 12,
    center: { lat: 53.34003492552744, lng: -6.259437301645186 }
}
var prev_infowindow =false; // var to identify opened infowindow 

const locations = [ //markers data
    {loc: {lat: 53.34003492552744, lng: -6.259437301645186 }, cont:'<h6>Location of our office</h6><br><p>call in anytime</p>'}, //office
    {loc: {lat: 53.33934048335442, lng: -6.262514241748317 }, cont:`<h6>Q-park Stephen's Green</h6><br><p>Here is our convenient car park</p>`}, //car park
    {loc: {lat: 53.340056909822714, lng: -6.258445392166223 }, cont:'<h6>The Greenhouse</h6><br><p>Our venue place</p>'}, //restaurant
    {loc: {lat: 53.338843836008515, lng: -6.252721223079907 }, cont: '<h6>The Merrion Hotel</h6><br><p>Accomodation for our members</p>'} //hotel
  ];

//https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// Initialize and add the map
function initMap() {
    // new map
    const map = new google.maps.Map(document.getElementById("contact-map"), options);
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    var markers = [];
    for (let i = 0; i < locations.length; ++i) {
        var marker = new google.maps.Marker({
            position: locations[i].loc,
            label: labels[i % labels.length],
            });
            markers.push(marker);  
            attachMessage(marker, locations[i].cont);
        }
        // Attaches an info window to a marker with the provided message. When the
        // marker is clicked, the info window will open with the secret message.
        // https://developers.google.com/maps/documentation/javascript/examples/event-closure
        function attachMessage(marker, message) {
            const infowindow = new google.maps.InfoWindow({
                content: message,
            });
            marker.addListener("click", () => {
                infowindow.open(marker.get("map"), marker);
            });
            //https://stackoverflow.com/questions/2223574/google-maps-auto-close-open-infowindows
            google.maps.event.addListener(marker, 'click', function(){
            if( prev_infowindow ) {
            prev_infowindow.close();
            }
            prev_infowindow = infowindow;
            infowindow.open(base.map, marker);
        });
        // Add a marker clusterer to manage the markers.
        new MarkerClusterer(map, markers, {
            imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });
    }
}
function showOffice() {
    options = {
        zoom: 18,
        center: { lat: 53.34003492552744, lng: -6.259437301645186 }
    }
    initMap();
}