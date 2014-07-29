# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

var map = L.map('map').setView([37.0301892,-76.3791378], 10);


		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-i86knfo3'
		}).addTo(map);

L.marker([37.115111,-76.545144]).addTo(map)
			.bindPopup("<b>Home</b><br/>Xbox is here!");

L.marker([37.0740948,-76.3786759,]).addTo(map)
			.bindPopup("<b>Langley</b><br/>Planes go here.");

L.marker([37.1688278,-76.5738469,]).addTo(map)
			.bindPopup("<b>Ft. Eustis</b><br/>Tanks go here.");

L.marker([36.9190133,-76.3111484,]).addTo(map)
			.bindPopup("<b>Norfolk Naval Base</b><br/>Carriers go here.");
