import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import $ from 'jquery'; 
import L from 'leaflet';
const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;

const markers = [
  {
    "name":"Mililani Mauka Elementary School",
    "address":"95-1111 Makaikai St, Mililani, HI 96789",
    "lat":21.471129,
    "lng":-158.000850,
    "trainings": ["7/14/18 9:00-10:30 a.m.", "7/14/18 11:00-1:00 p.m.", "10/3/2018 6:30-830 p.m."]
  },
  {
    "name":"Mililani Middle School Cafeteria",
    "address":"95-1140 Lehiwa Drive Miliani, HI 96789",
    "lat":21.475665,
    "lng":-157.989612
  },
  {
    "name":"Mililani Uka Elementary School",
    "address":"94-380 Kuahelani Ave, Mililani, HI 96789",
    "lat":21.437221,
    "lng":-158.014535
  }, 
  {
    "name":"Kipapa Elementary School",
    "address":"95-076 Kipapa Dr, Mililani, HI 96789",
    "lat":21.461902,
    "lng":-158.013009
  },  
  {
    "name":"Kaiser High School",
    "address":"511 Lunalilo Home Rd, Honolulu, HI 96825",
    "lat":21.285904,
    "lng":-157.694490
  }, 
  {
    "name":"Koko Head Elementary School",
    "address":"189 Lunalilo Home Rd, Honolulu, HI 96825",
    "lat":21.274238,
    "lng":-157.704898
  }, 
  {
    "name":"Aina Haina Elementary School",
    "address":"801 W Hind Dr, Honolulu, HI 96821",
    "lat":21.279501,
    "lng":-157.756516
  },   
  {
    "name":"Niu Valley Middle School",
    "address":"310 Halemaumau St, Honolulu, HI 96821",
    "lat":21.285370,
    "lng":-157.739948
  },  
  {
    "name":"Kalani High School",
    "address":"4680 Kalanianaole Hwy, Honolulu, HI 96821",
    "lat":21.278632,
    "lng":-157.773869
  },  
  {
    "name":"Ewa Elementary School",
    "address":"91-1280 Renton Rd, Ewa Beach, HI 96706",
    "lat":21.344594,
    "lng":-158.034659
  },  
  {
    "name":"Campbell High School",
    "address":"91-980 North Rd, Ewa Beach, HI 96706",
    "lat":21.315785,
    "lng":-158.007437
  }, 
  {
    "name":"Ewa Beach Elementary School",
    "address":"91-740 Papipi Rd, Ewa Beach, HI 96706",
    "lat":21.314889,
    "lng":-158.015140
  }, 
  {
    "name":"Kapolei Elementary School",
    "address":"91-1119 Kamaaha Loop, Kapolei, HI 96707",
    "lat":21.334125,
    "lng":-158.064334
  },
  {
    "name":"Kailua Elementary School",
    "address":"315 Kuulei Rd, Kailua, HI 96734",
    "lat":21.395061,
    "lng":-157.741264
  },
  {
    "name":"Enchanted Lake Elementary School",
    "address":"770 Keolu Dr, Kailua, HI 96734",
    "lat":21.383008,
    "lng":-157.732009
  },
  {
    "name":"Lanikai Elementary School",
    "address":"140 Alala Rd, Kailua, HI 96734",
    "lat":21.393803,
    "lng":-157.725869
  },
  {
    "name":"Kalaheo High School",
    "address":"730 Iliaina St, Kailua, HI 96734",
    "lat":21.409131,
    "lng":-157.756951
  },
  {
    "name":"Keolu Elementary School",
    "address":"1416 Keolu Dr, Kailua, HI 96734",
    "lat":21.371824,
    "lng":-157.736039
  },
  {
    "name":"Ahuimanu Elementary School",
    "address":"47-470 Hui Aeko Pl, Kaneohe, HI 96744",
    "lat":21.435171,
    "lng":-157.830565
  },
  {
    "name":"Benjamin Parker Elementary School",
    "address":"45-259 Waikalua Rd, Kaneohe, HI 96744",
    "lat":21.413928,
    "lng":-157.798498
  },
  {
    "name":"State Capitol Auditorium",
    "address":"415 South Beretania Street Honolulu, HI 96813",
    "lat":21.307195,
    "lng":-157.857398
  },
  {
    "name":"Koko Head Elementary School Cafeteria",
    "address":"189 Lunalilo Home Road Honolulu, HI 96825",
    "lat":21.274238,
    "lng":-157.704898
  },
  {
    "name":"Kaneohe Elementary School Cafeteria",
    "address":"45-495 Kamehameha Highway Kaneohe, HI 96744",
    "lat":21.395919,
    "lng":-157.795851
  },
  {
    "name":"Waikiki Elementary School Cafeteria",
    "address":"3710 Leahi Avenue Honolulu, HI 96815",
    "lat":21.268166,
    "lng":-157.814493
  },
  {
    "name":"Pearl City Highlands Elementary School Cafeteria",
    "address":"1419 Waimano Home Road Pearl City, HI 96782",
    "lat":21.403286,
    "lng":-157.965311
  },
  {
    "name":"Lanakila Elementary School Cafeteria",
    "address":"717 North Kuakini Street Honolulu, HI 96817",
    "lat":21.326487,
    "lng":-157.860453
  },
  {
    "name":"Kapolei High School Cafeteria",
    "address":"91-5007 Kapolei Parkway Kapolei, HI 96707",
    "lat":21.327907,
    "lng":-158.068294
  },
  {
    "name":"Manana Elementary School Cafeteria",
    "address":"1147 Kumano Street Pearl City, HI 96782",
    "lat":21.408343,
    "lng":-157.971362
  },
  {
    "name":"Kaneohe Elementary School",
    "address":"45-495 Kamehameha Hwy, Kaneohe, HI 96744",
    "lat":21.395919,
    "lng":-157.795851
  },
  {
    "name":"Castle High School",
    "address":"45-386 Kaneohe Bay Dr, Kaneohe, HI 96744",
    "lat":21.403569,
    "lng":-157.794145
  },
  {
    "name":"Maunawili Elementary School",
    "address":"1465 Ulupii St, Kailua, HI 96734",
    "lat":21.376900,
    "lng":-157.752160
  },
  {
    "name":"Nanaikapono Elementary School",
    "address":"89-153 Mano Ave, Waianae, HI 96792",
    "lat":21.383506,
    "lng":-158.143568
  },
  {
    "name":"Wahiawa Middle School",
    "address":"275 Rose St, Wahiawa, HI 96786",
    "lat":21.493666,
    "lng":-158.018990
  },
  {
    "name":"Leilehua High School",
    "address":"1515 California Ave, Wahiawa, HI 96786",
    "lat":21.500464,
    "lng":-158.012126
  },
  {
    "name":"Haleiwa Elementary School",
    "address":"66-505 Haleiwa Rd, Haleiwa, HI 96712",
    "lat":21.585013,
    "lng":-158.114041
  },
  {
    "name":"Sunset Beach Elementary School",
    "address":"59 Kamehameha Hwy, Haleiwa, HI 96712",
    "lat":21.675599,
    "lng":-158.038423
  },
  {
    "name":"Kahuku High/Intermediate School",
    "address":"56-490 Kamehameha Hwy, Kahuku, HI 96731",
    "lat":21.675916,
    "lng":-157.947312
  }
];

let contents;
let map = L.map( 'map', {
  center: [21.307195, -157.857398],
  minZoom: 5,
  zoom: 10
});

$(document).ready(function(){
    let from,to,subject,text;
    $("#send_email").click(function(){      
        to=$("#to").val();
        subject="Thank you for volunteering with Office of Elections";
        text="You have volunteered at..." + contents;
        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
        }

});
    });
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );

let myURL = $( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

let myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

let markerClusters = L.markerClusterGroup();
let modal = document.getElementById('myModal');
// console.log(modal);
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let div = L.DomUtil.create('div', 'mainDiv');
for (let i = 0; i < markers.length; ++i )
{
  let h3 = L.DomUtil.create('h3', 'name');
  h3.innerHTML = markers[i].name;
  let span = L.DomUtil.create('span', 'address');
  span.innerHTML = markers[i].address;

  if (markers[i].trainings){
    div.appendChild(h3);
    div.appendChild(span);
    for (let j = 0; j < markers[i].trainings.length; j++){
      console.log(markers[i].trainings[j]);
      let emptySpan = L.DomUtil.create('h5', 'emptySpan');
      let mainButton = L.DomUtil.create('button', 'email');
      mainButton.innerHTML = markers[i].trainings[j];
      mainButton.onclick = function(){
          modal.style.display = "block";
          contents = this.innerHTML;
      }
      div.appendChild(mainButton);
      div.appendChild(emptySpan);
    }
  }
  let m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
                  .bindPopup( div );
  
  markerClusters.addLayer( m );
}

map.addLayer( markerClusters );


class MapLeaf extends Component {


    render() {
        return (
            <div>
                <Map
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                </Map>
            </div>
        );
    }
}

export default MapLeaf;