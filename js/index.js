function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("longitude").value = position.coords.longitude;
  document.getElementById("latitude").value = position.coords.latitude;
}

getLocation();
