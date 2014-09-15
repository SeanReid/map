$(window).ready(function(){

var map = L.map('map').setView([37.0301892,-76.3791378], 10);

var polygon = L.polygon([
    [37.0740948,-76.3786759],
    [37.1067023,-76.3931412],
    [37.1082561,-76.3671338],
		[37.0838609,-76.3413156]
]).addTo(map);

var polygon = L.polygon([
		[36.9621524,-76.2709508],
		[36.9199168,-76.271726],
		[36.9155036,-76.3315454],
		[36.9638507,-76.3293864]
]).addTo(map);

var polygon = L.polygon([
		[37.167543,-76.5743219],
		[37.1605838,-76.5639678],
		[37.1400498,-76.5685514],
		[37.1400098,-76.5851291],
		[37.0817725,-76.5507976],
		[37.0764021,-76.5564652],
		[37.1276209,-76.6300298],
		[37.1758087,-76.5989847]
]).addTo(map);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i86knfo3'
      }).addTo(map);

L.marker([37.1255699,-76.5480068]).addTo(map)
.bindPopup("<b>Denbigh HS</b><br/>My old High School");

L.marker([37.0740948,-76.3786759,]).addTo(map)
.bindPopup("<b>Langley</b><br/>Planes go here.");

L.marker([37.1688278,-76.5738469,]).addTo(map)
.bindPopup("<b>Ft. Eustis</b><br/>Tanks go here.");

L.marker([36.9190133,-76.3111484,]).addTo(map)
.bindPopup("<b>Norfolk Naval Base</b><br/>Carriers go here.");

});
