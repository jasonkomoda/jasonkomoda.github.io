function changeImageNext(){
  var image = document.getElementById("changingImage");
  var caption = document.getElementById("caption");
  if(image.src == "photosimage8.jpg"){
    image.src = "photosimage1.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Blue Lagoon in Vang Vieng, Laos";
  }
  else if(image.src == "photosimage1.jpg"){
    image.src = "photosimage2.jpg";
    image.style = "width:450px;height:500px";
    caption.innerHTML = "Koh Phi Phi Islands, Thailand";
  }
  else if(image.src == "photosimage2.jpg"){
     image.src = "photosimage3.jpg";
     image.style = "width:600px;height:400px";
     caption.innerHTML = "Riding an elephant in Chiang Mai, Thailand";
  }
  else if(image.src == "photosimage3.jpg"){
    image.src = "photosimage4.jpg";
    image.style = "width:400px;height:500px"
    caption.innerHTML = "Making Massaman curry during a cooking class in Chiang Mai, Thailand";
  }
  else if(image.src == "photosimage4.jpg"){
    image.src = "photosimage5.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Sunset view from our hostel in Vang Vieng, Laos";
  }
  else if(image.src == "photosimage5.jpg"){
    image.src = "photosimage6.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Camping in Erawan National Park in Kanchanaburi, Thailand";
  }
  else if(image.src == "photosimage6.jpg"){
    image.src = "photosimage7.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "One of seven waterfalls at Erawan National Park in Kanchanaburi, Thailand";
  }
  else if(image.src == "photosimage7.jpg"){
    image.src = "photosimage8.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "After planting trees at Phuttamonthon Park in Nakhon Pathom, Thailand";
  }
}

function changeImagePrevious(){
  var image = document.getElementById("changingImage");
  var caption = document.getElementById("caption");
  if(image.src == "photosimage8.jpg"){
    image.src = "photosimage7.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "One of seven waterfalls at Erawan National Park in Kanchanaburi, Thailand";
  }
  else if(image.src == "photosimage7.jpg"){
    image.src = "photosimage6.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "After planting trees at Phuttamonthon Park in Nakhon Pathom, Thailand";
  }
  else if(image.src == "photosimage6.jpg"){
    image.src = "photosimage5.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Blue Lagoon in Vang Vieng, Laos";
  }
  else if(image.src == "photosimage5.jpg"){
    image.src = "photosimage4.jpg";
    image.style = "width:450px;height:500px";
    caption.innerHTML = "Koh Phi Phi Islands, Thailand";
  }
  else if(image.src == "photosimage4.jpg"){
    image.src = "photosimage3.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Riding an elephant in Chiang Mai, Thailand";
  }
  else if(image.src == "photosimage3.jpg"){
    image.src = "photosimage2.jpg";
    image.style = "width:400px;height:500px"
    caption.innerHTML = "Making Massaman curry during a cooking class in Chiang Mai, Thailand";
  }
  else if(image.src == "photosimage2.jpg"){
    image.src = "photosimage1.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Sunset view from our hostel in Vang Vieng, Laos";
  }
  else if(image.src == "photosimage1.jpg"){
    image.src = "photosimage8.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Camping in Erawan National Park in Kanchanaburi, Thailand";
  }
}
