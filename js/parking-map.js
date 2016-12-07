var map;
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: new google.maps.LatLng(40.4435, -79.9435),
    mapTypeId: 'roadmap'
  });

  var contentString = `
<div id="content" class="infowindow">
  <div class="row" style="margin-bottom: 0px">
    <h5 id="firstHeading" class="col s12">{0}</h5>
  </div>
  <div class="row" style="margin-bottom: 0px">
    <p class="col s12">{1}/{2} racks are free</p>
  </div>
</div>
  `;

  

  var iconBase = 'assets/parking/';
  var icons = {
    parking: {
      icon: iconBase + 'bike.png'
    }
  };

  function addMarker(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
    formatted = contentString.format(feature.name, feature.num_free,feature.total)
    var infowindow = new google.maps.InfoWindow({
      content: formatted
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
  
  var features = [
    {
      position: new google.maps.LatLng(40.442181, -79.943771),
      name: "Doherty Hall",
      num_free: 3,
      total: 5,
      type: 'parking'
    },
    {
      position: new google.maps.LatLng(40.442303, -79.945986),
      name: "Wean Hall",
      num_free: 0,
      total: 7,
      type: 'parking'
    },
    {
      position: new google.maps.LatLng(40.441936, -79.942172),
      name: "Tennis Courts",
      num_free: 2,
      total: 6,
      type: 'parking'
    },
    {
      position: new google.maps.LatLng(40.442838, -79.942389),
      name: "W",
      num_free: 0,
      total: 8,
      type: 'parking'
    }
  ];

  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }
}