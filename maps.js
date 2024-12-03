let map;

document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');
    
    if (mapContainer) {
        // Clear existing map if necessary
        mapContainer.innerHTML = '';
    }

    if (map) {
        map.remove(); // Destroy any existing map instance
    }

    // Initialize the map
    map = L.map('map').setView([39.9612, -82.9988], 13);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);
});
