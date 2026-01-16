const axios = require('axios');
async function getAddressFromGoogle(lat,lng){
    const apiKey = "AIzaSyBGSMJxdepK8OoIkXa0z9m2ckQccDZ_r4c"; // replace with env var
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

    try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.status === "OK" && data.results.length > 0) {
        return {
        address: data.results[0].formatted_address,
        status: true,
        };
    } else {
        return {
        address: "Address not found",
        status: false,
        };
    }
    } catch (error) {
    console.error("Error fetching address:", error.message);
    return {
        address: "Error fetching address",
        status: false,
    };
    }
}
async function getAddressOpenStreetMap(lat, lon) {
    try {
        const url = 'https://nominatim.openstreetmap.org/reverse';
        const params = {
            lat: lat,
            lon: lon,
            format: 'json',
            addressdetails: 0
        };
        const headers = {
            'User-Agent': 'MyGeocoder/1.0'
        };

        const response = await axios.get(url, { params, headers });

        if (response.data && response.data.display_name) {
            return { address: response.data.display_name, status: true };
        } else {
            return { address: 'Address not found', status: false };
        }
    } catch (error) {
        return { address: 'Address not found', status: false };
    }
}
module.exports = {
    getAddressFromGoogle
};

// (async () => {
//     const latitude = 17.393027147598918;
//     const longitude = 78.50922086976222;

//     const result = await getAddressOpenStreetMap(latitude, longitude);
//     console.log(result);
// })();

// const latitude = 17.393027147598918;
// const longitude = 78.50922086976222;

// console.log("Fetching address...");

// // Execution will pause here until the response is received
// const result = await getAddressOpenStreetMap(latitude, longitude);
// console.log("Address received:", result);
