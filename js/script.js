// Info on Survivor Filming Locations

const survivorData = [
    {
        "season": 1,
        "name": "Borneo",
        "airdate": 2000,
        "location": "Sabah, Malaysia",
        "longitude": 115.65052794636486,
        "latitude": 5.7273153854304235
    },
    {
        "season": 2,
        "name": "The Australian Outback",
        "airdate": 2001,
        "location": "Queensland, Australia",
        "longitude": 150.15693,
        "latitude": -17.78921
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
        "longitude": -139.67399,
        "latitude": -9.25304
    },
    {
        "season": 5,
        "name": "Thailand",
        "airdate": 2002,
        "location": "Satun Province, Thailand",
        "longitude": 99.87508,
        "latitude": 6.4676
    },
    {
        "season": 6,
        "name": "The Amazon",
        "airdate": 2003,
        "location": "Amazonas, Brazil",
        "longitude": -64.93544,
        "latitude": -3.81483
    },
    {
        "season": 7,
        "name": "Pearl Islands",
        "airdate": 2003,
        "location": "Pearl Islands, Panama",
        "longitude": -79.01307786,
        "latitude": 8.483399518
    },
    {
        "season": 8,
        "name": "All-Stars",
        "airdate": 2004,
        "location": "Pearl Islands, Panama",
        "longitude": -79.01307786,
        "latitude": 8.483399518
    },
    {
        "season": 9,
        "name": "Vanuatu",
        "airdate": 2004,
        "location": "Shefa, Vanuatu",
        "longitude": 168.38783,
        "latitude": -17.21685
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
        "longitude": -79.01307786,
        "latitude": 8.483399518
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
        "longitude": -172.1804863,
        "latitude": -13.80980668
    },
    {
        "season": 20,
        "name": "Heroes vs Villains",
        "airdate": 2010,
        "location": "Upolu, Samoa",
        "longitude": -172.1804863,
        "latitude": -13.80980668
    },
    {
        "season": 21,
        "name": "Nicaragua",
        "airdate": 2010,
        "location": "San Juan Del Sur, Nicaragua",
        "longitude": 11.18141313,
        "latitude": -85.82478985
    },
    {
        "season": 22,
        "name": "Redemption Island",
        "airdate": 2011,
        "location": "San Juan Del Sur, Nicaragua",
        "longitude": 11.68141313,
        "latitude": -85.32478985
    },
    {
        "season": 23,
        "name": "South Pacific",
        "airdate": 2011,
        "location": "Upolu, Samoa",
        "longitude": -172.1804863,
        "latitude": -13.80980668
    },
    {
        "season": 24,
        "name": "One World",
        "airdate": 2012,
        "location": "Upolu, Samoa",
        "longitude": -172.1804863,
        "latitude": -13.80980668
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
        "longitude": 11.18141313,
        "latitude": -85.82478985
    },
    {
        "season": 30,
        "name": "Worlds Apart",
        "airdate": 2015,
        "location": "San Juan Del Sur, Nicaragua",
        "longitude": 11.68141313,
        "latitude": -85.32478985
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
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [177.1325205, -17.62737732],
    zoom: 3,
    projection: 'globe',
});

survivorData.forEach(function (survivorSeasons) {
    //create pop-up
    const popup = new mapboxgl.Popup({
        offset: 25
    })
    .setText(
        `Survivor Season ${survivorSeasons.season}: ${survivorSeasons.name} aired in ${survivorSeasons.airdate} and was filmed in ${survivorSeasons.location}.`
    )

//marker color based on season
// let color = '#fff'
// if (survivorSeasons.season < 11) {
//     color = '#ff7e47'
// }

// if (survivorSeasons.season > 10 && survivorSeasons.season < 21) {
//     color = '#fc7135'
// }

// if (survivorSeasons.season > 20) {
//     color = '#ff4d00'
// }

//create marker
new mapboxgl.Marker({
    color: '#ff4d00'
})
    .setLngLat([survivorSeasons.longitude, survivorSeasons.latitude])
    .setPopup(popup)
    .addTo(map);
}
)