var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: new google.maps.LatLng(40.4435, -79.9435),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'assets/parking/';
  var icons = {
    parking: {
      icon: iconBase + 'bike.png'
    },
    library: {
      icon: iconBase + 'library_maps.png'
    },
    info: {
      icon: iconBase + 'info-i_maps.png'
    }
  };

  function addMarker(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  }

  var features = [
    {
      position: new google.maps.LatLng(40.442317, -79.943801),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      type: 'library'
    }
  ];

  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }
}