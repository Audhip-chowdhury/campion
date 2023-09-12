// const campground = require("../../models/campground");

// const campground = require("../../models/campground");

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'show-map', // container 
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: campground.geometry.coordinates, // starting position [lng, lat]
zoom: 5 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl())


new mapboxgl.Marker()
.setLngLat(campground.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({offset:25})
    .setHTML(
        `<h3>${campground.title}</h3><p>Price : $  ${campground.price}</p>`
    )
)
.addTo(map)