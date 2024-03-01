// https://api.wheretheiss.at/v1/satellites/25544 //iss info
// http://api.open-notify.org/astros.json //people in space    

function peopleInSpace() {
  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(data => {
     for (let i = 0; i < data.number; i++) {
            document.getElementById('spacePeople').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br>';
      } 
  })
}

peopleInSpace();



function ISS() {
  fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then(response => response.json())
  .then(data => {
      document.getElementById('iss').innerHTML = data.name + '<br>' 
      + "ID: " + data.id + '<br>' 
      + "Latitude: " + data.latitude + '<br>' 
      + "Longitude: " + data.longitude + '<br>' 
      + "Altitude: " + data.altitude + '<br>' 
      + "Velocity: " + data.velocity + '<br>' 
      + "Visibility: " + data.visibility + '<br>' 
      + "Footprint: " + data.footprint + '<br>' 
      + "Timestamp: " + data.timestamp + '<br>' 
      + "Day Number: " + data.daynum + '<br>' 
      + "Solar Latitude: " + data.solar_lat + '<br>'
      + "Solar Longitude: " + data.solar_lon + '<br>' 
      + "Units: "+ data.units + '<br>';   
  })
}

ISS();

function SolarSystem() {
  fetch('https://api.le-systeme-solaire.net/rest/bodies/')
  .then(response => response.json())
  .then(data => {
    let i = 0;
    while(data.bodies[i] != null) {
      document.getElementById('solar').innerHTML += "Name: " + data.bodies[i].name + "-----Type: " + data.bodies[i].bodyType + "-----" + "Density: " + data.bodies[i].density + "-----Gravity: " + data.bodies[i].gravity + "-----Average Temperature: " + data.bodies[i].avgTemp
      +'<br>';  
      i++;
    }
  })
}

SolarSystem();

function knownCount() {
  fetch('https://api.le-systeme-solaire.net/rest/knowncount/')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 7; i++) {
      document.getElementById('knowncount').innerHTML += "Category: "+ data.knowncount[i].id + "-----Count: " + data.knowncount[i].knownCount + "-----Last Update: " + data.knowncount[i].updateDate
      + '<br>';
    }
  })
}

knownCount();

