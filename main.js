'use strict'

{
    var map = L.map('map').setView([38.4316, 141.3094], 12);

    var geojsonFeature = [];
    var test_popupContents = ['イトナブ<br>職場', 'もりや<br>そば屋', '野田屋<br>弁当屋', 'ローソン<br>コンビニ'];
    var lat = [38.4316, 38.4306, 38.4299, 38.4327];
    var lon = [141.3094, 141.3076, 141.3070, 141.3087];

    var customClassName = ['.btn_Itnav', '.btn_Moriya', '.btn_Nodaya', '.btn_Lowson'];

    var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 21
        });
tileLayer.addTo(map);

for (var i = 0; i < test_popupContents.length; i++) {
    geojsonFeature.push({
        "type": "Feature",
        "properties": {
        "popupContent": test_popupContents[i],
        "className": customClassName[i],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [lon[i], lat[i]] 
    },
    });

    // var addCustomClassName = {
    //     'className': 'test'
    // }
   

}

function customName(layer) {
    for (var i = 0; i < test_popupContents.length; i++) {
        console.log(customClassName);
        return layer.className.customClassName;
        

    }

}
    
    L.geoJson(geojsonFeature,
        {
            onEachFeature: function(feature, layer){
                if(feature.properties && feature.properties.popupContent){
                    layer.bindPopup(feature.properties.popupContent, {className: feature.properties.className});
                }
            }
        }).addTo(map).openPopup();
        // popUp.openPopup()
        console.log('test');
}