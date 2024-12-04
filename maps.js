let map; // Global variable to store the map instance

document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');

    // Remove any existing map instance
    if (map) {
        map.remove();
    }

    // Initialize the map
    map = L.map('map').setView([39.9612, -82.9988], 13);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);

    // Array of school data
    const schools = [
        {
            name: "Example School 1",
            address: "123 Main Street, Columbus, OH",
            photo: "https://via.placeholder.com/100",
        },
        {
            name: "Example School 2",
            address: "234 Main Road, Columbus, OH",
            photo: "https://via.placeholder.com/100",
        },
        // TODO: Add more schools here
    ];

    // Add geocoder control to the map
    const geocoder = L.Control.geocoder();
    schools.forEach((school) => {
        geocoder.options.geocoder.geocode(school.address, (results) => {
            if (results.length > 0) {
                const latlng = results[0].center;

                // Add a custom circular marker
                const icon = L.divIcon({
                    html: `
                    <div style="
                        width: 40px;
                        height: 40px;
                        border: 2px solid #007BFF;
                        border-radius: 50%;
                        background-image: url('${school.photo}');
                        background-size: cover;
                        background-position: center;">
                    </div>`,
                    className: "custom-marker", // Fixed typo in class name
                });

                // Add marker to the map
                L.marker(latlng, { icon: icon })
                    .addTo(map)
                    .bindPopup(
                        `<strong>${school.name}</strong><br><img src="${school.photo}" alt="${school.name}" style="width: 100px; height: auto;">`
                    ); // Fixed bindPopup and src
            }
        });
    });
});
