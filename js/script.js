// Info on Survivor Filming Locations

const survivorData = [
    {
        "season": 1,
        "name": "Borneo",
        "airdate": 2000,
        "location": "Sabah, Malaysia",
        "longitude": 115.65052794636486,
        "latitude": 5.7273153854304235
    },
    {
        "season": 2,
        "name": "The Australian Outback",
        "airdate": 2001,
        "location": "Queensland, Australia",
        "longitude": 145.36498335315687,
        "latitude": -18.233278090841523
    },
    {
        "season": 3,
        "name": "Africa",
        "airdate": 2001,
        "location": "Shaba National Reserve, Kenya",
        "longitude": 37.83004632,
        "latitude": 0.641029035
    },
    {
        "season": 4,
        "name": "Marquesas",
        "airdate": 2002,
        "location": "Marquesas Islands, French Polynesia",
        "longitude": -140.1661321459181,
        "latitude": -8.948080063918024
    },
    {
        "season": 5,
        "name": "Thailand",
        "airdate": 2002,
        "location": "Satun Province, Thailand",
        "longitude": 99.6684514533577,
        "latitude": 6.7012891202407925
    },
    {
        "season": 6,
        "name": "The Amazon",
        "airdate": 2003,
        "location": "Amazonas, Brazil",
        "longitude": -60.50317452288626,
        "latitude": -3.091027433492709
    },
    {
        "season": 7,
        "name": "Pearl Islands",
        "airdate": 2003,
        "location": "Pearl Islands, Panama",
        "longitude": -79.02277891382197,
        "latitude": 8.571453546419367
    },
    {
        "season": 8,
        "name": "All-Stars",
        "airdate": 2004,
        "location": "Pearl Islands, Panama",
        "longitude": -79.02277891382197,
        "latitude": 8.571453546419367
    },
    {
        "season": 9,
        "name": "Vanuatu",
        "airdate": 2004,
        "location": "Shefa, Vanuatu",
        "longitude": 168.18304911103252,
        "latitude": -17.65439723577704
    },
    {
        "season": 10,
        "name": "Palau",
        "airdate": 2005,
        "location": "Koror, Palau",
        "longitude": 134.34127,
        "latitude": 7.25032
    },
    {
        "season": 11,
        "name": "Guatemala",
        "airdate": 2005,
        "location": "Petén, Guatemala",
        "longitude": -89.4050289,
        "latitude": 17.17650334
    },
    {
        "season": 12,
        "name": "Panama",
        "airdate": 2006,
        "location": "Pearl Islands, Panama",
        "longitude": -79.02277891382197,
        "latitude": 8.571453546419367
    },
    {
        "season": 13,
        "name": "Cook Islands",
        "airdate": 2006,
        "location": "Aitutaki, Cook Islands",
        "longitude": -158.92751,
        "latitude": -19.25325
    },
    {
        "season": 14,
        "name": "Fiji",
        "airdate": 2007,
        "location": "Vanua Levu, Fiji",
        "longitude": 179.1274714,
        "latitude": -16.41029861
    },
    {
        "season": 15,
        "name": "China",
        "airdate": 2007,
        "location": "Jiangxi, China",
        "longitude": 115.4148873,
        "latitude": 29.25085361
    },
    {
        "season": 16,
        "name": "Micronesia",
        "airdate": 2008,
        "location": "Koror, Palau",
        "longitude": 134.34127,
        "latitude": 7.25032
    },
    {
        "season": 17,
        "name": "Gabon",
        "airdate": 2008,
        "location": "Estuaire, Gabon",
        "longitude": 9.435339677,
        "latitude": 0.1935291
    },
    {
        "season": 18,
        "name": "Tocantins",
        "airdate": 2009,
        "location": "Tocantins, Brazil",
        "longitude": -46.73195925,
        "latitude": -10.29432647
    },
    {
        "season": 19,
        "name": "Samoa",
        "airdate": 2009,
        "location": "Upolu, Samoa",
        "longitude": -171.93168128122647,
        "latitude": -13.989566325848523
    },
    {
        "season": 20,
        "name": "Heroes vs Villains",
        "airdate": 2010,
        "location": "Upolu, Samoa",
        "longitude": -171.93168128122647,
        "latitude": -13.989566325848523
    },
    {
        "season": 21,
        "name": "Nicaragua",
        "airdate": 2010,
        "location": "San Juan Del Sur, Nicaragua",
        "longitude": -85.90118789329536,
        "latitude": 11.277621342387505
    },
    {
        "season": 22,
        "name": "Redemption Island",
        "airdate": 2011,
        "location": "San Juan Del Sur, Nicaragua",
        "longitude": -85.90118789329536,
        "latitude": 11.277621342387505
    },
    {
        "season": 23,
        "name": "South Pacific",
        "airdate": 2011,
        "location": "Upolu, Samoa",
        "longitude": -171.93168128122647,
        "latitude": -13.989566325848523
    },
    {
        "season": 24,
        "name": "One World",
        "airdate": 2012,
        "location": "Upolu, Samoa",
        "longitude": -171.93168128122647,
        "latitude": -13.989566325848523
    },
    {
        "season": 25,
        "name": "Philippines",
        "airdate": 2012,
        "location": "Camarines Sur, Philippines",
        "longitude": 123.8373,
        "latitude": 13.87184
    },
    {
        "season": 26,
        "name": "Caramoan",
        "airdate": 2013,
        "location": "Camarines Sur, Philippines",
        "longitude": 123.8373,
        "latitude": 13.87184
    },
    {
        "season": 27,
        "name": "Blood vs Water",
        "airdate": 2013,
        "location": "Camarines Sur, Philippines",
        "longitude": 123.8373,
        "latitude": 13.87184
    },
    {
        "season": 28,
        "name": "Cagayan",
        "airdate": 2014,
        "location": "Camarines Sur, Philippines",
        "longitude": 123.8373,
        "latitude": 13.87184
    },
    {
        "season": 29,
        "name": "San Juan Del Sur",
        "airdate": 2014,
        "location": "San Juan Del Sur, Nicaragua",
        "longitude": -85.90118789329536,
        "latitude": 11.277621342387505
    },
    {
        "season": 30,
        "name": "Worlds Apart",
        "airdate": 2015,
        "location": "San Juan Del Sur, Nicaragua",
        "longitude": -85.90118789329536,
        "latitude": 11.277621342387505
    },
    {
        "season": 31,
        "name": "Cambodia",
        "airdate": 2015,
        "location": "Koh Rong, Cambodia",
        "longitude": 103.3233148,
        "latitude": 10.64956425
    },
    {
        "season": 32,
        "name": "Kaôh Rōng",
        "airdate": 2016,
        "location": "Koh Rong, Cambodia",
        "longitude": 103.3233148,
        "latitude": 10.64956425
    },
    {
        "season": 33,
        "name": "Millennials vs. Gen X",
        "airdate": 2016,
        "location": "Mamanuca Islands, Fiji Islands, Fiji",
        "longitude": 177.1325205,
        "latitude": -17.62737732
    }
]

mapboxgl.accessToken = 'pk.eyJ1IjoidXB0b24zMyIsImEiOiJjbGdjZGYxZjUwMW52M2xwY2tqbnQxb3VtIn0.kwrf2PNrfHFdvpflNBj7ow';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [115.65052794636486, 8.7273153854304235],
    zoom: 3,
    projection: 'globe',
    pitch: 10
});


map.on('style.load', () => {
    // Custom atmosphere styling
    map.setFog({
        color: 'rgb(186, 210, 235)', // Lower atmosphere
        'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
        'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
        'space-color': 'rgb(11, 11, 25)', // Background color
        'star-intensity': 0.2 // Background star brightness (default 0.35 at low zoooms )

    });

    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.terrain-rgb'
    });

    map.setTerrain({
        'source': 'mapbox-dem',
        'exaggeration': 1
    });
});



survivorData.forEach(function (survivorSeasons) {
    //create pop-up
    const popup = new mapboxgl.Popup({
        offset: 25
    })
        .setText(
            `Survivor Season ${survivorSeasons.season}: ${survivorSeasons.name} aired in ${survivorSeasons.airdate} and was filmed in ${survivorSeasons.location}.`
        )

    //create marker
    new mapboxgl.Marker({
        color: '#ff4d00'
    })
        .setLngLat([survivorSeasons.longitude, survivorSeasons.latitude])
        .setPopup(popup)
        .addTo(map);
})

//buttons

$('#button-1').on('click', function () {
    map.flyTo({
        center: [115.65052794636486, 5.7273153854304235],
        zoom: 13,
        pitch: 60
    })
})

$('#button-2').on('click', function () {
    map.flyTo({
        center: [145.36498335315687, -18.233278090841523],
        zoom: 13,
        pitch: 60
    })
})

$('#button-3').on('click', function () {
    map.flyTo({
        center: [37.83004632, 0.641029035],
        zoom: 13,
        pitch: 60
    })
})

$('#button-4').on('click', function () {
    map.flyTo({
        center: [-140.1661321459181, -8.948080063918024],
        zoom: 13,
        pitch: 60
    })
})

$('#button-5').on('click', function () {
    map.flyTo({
        center: [99.6684514533577, 6.7012891202407925],
        zoom: 13,
        pitch: 60
    })
})

$('#button-6').on('click', function () {
    map.flyTo({
        center: [-60.50317452288626, -3.091027433492709],
        zoom: 13,
        pitch: 60
    });

    map.rotateTo(45.0, { duration: 3000 });

})

$('#button-7').on('click', function () {
    map.flyTo({
        center: [-79.02277891382197, 8.571453546419367],
        zoom: 13,
        pitch: 60
    })
})

$('#button-8').on('click', function () {
    map.flyTo({
        center: [-79.02277891382197, 8.571453546419367],
        zoom: 13,
        pitch: 60
    })
})

$('#button-9').on('click', function () {
    map.flyTo({
        center: [168.18304911103252, -17.65439723577704],
        zoom: 13,
        pitch: 60
    })
})

$('#button-10').on('click', function () {
    map.flyTo({
        center: [134.34127, 7.25032],
        zoom: 13,
        pitch: 60
    })
})