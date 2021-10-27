let map;

function initMap() {
	const locationOne = { lat: -25.344, lng: 131.036 };
	const locationTwo = { lat: -34.397, lng: 150.644 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: locationOne, //locacion inicial
    zoom: 4,
	});

	//markadores de locaciones
	new google.maps.Marker({
    position: locationOne,
		map: map,
		icon: '../assets/images/handMarker.svg'
	});

	new google.maps.Marker({
		position: locationTwo,
    map: map,
		icon: '../assets/images/handMarker.svg'
  });
}

initMap();