var counter = 1;
function changeImageNext(){
  var image = document.getElementById("changingImage");
  var caption = document.getElementById("caption");
  if(counter === 0){
    image.src = "photosimage1.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Blue Lagoon in Vang Vieng, Laos";
    counter++;
  }
  else if(counter === 1){
    image.src = "photosimage2.jpg";
    image.style = "width:450px;height:500px";
    caption.innerHTML = "Koh Phi Phi Islands, Thailand";
    counter++;
  }
  else if(counter === 2){
     image.src = "photosimage3.jpg";
     image.style = "width:600px;height:400px";
     caption.innerHTML = "Riding an elephant in Chiang Mai, Thailand";
    counter++;
  }
  else if(counter === 3){
    image.src = "photosimage4.jpg";
    image.style = "width:400px;height:500px"
    caption.innerHTML = "Making Massaman curry during a cooking class in Chiang Mai, Thailand";
    counter++;
  }
  else if(counter === 4){
    image.src = "photosimage5.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Sunset view from our hostel in Vang Vieng, Laos";
    counter++;
  }
  else if(counter === 5){
    image.src = "photosimage6.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Camping in Erawan National Park in Kanchanaburi, Thailand";
    counter++;
  }
  else if(counter === 6){
    image.src = "photosimage7.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "One of seven waterfalls at Erawan National Park in Kanchanaburi, Thailand";
    counter++;
  }
  else if(counter === 7){
    image.src = "photosimage8.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "After planting trees at Phuttamonthon Park in Nakhon Pathom, Thailand";
    counter = 0;
  }
}

function changeImagePrevious(){
  var image = document.getElementById("changingImage");
  var caption = document.getElementById("caption");
  if(counter === 0){
    image.src = "photosimage7.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "One of seven waterfalls at Erawan National Park in Kanchanaburi, Thailand";
    counter = 7;
  }
  else if(counter === 1){
    image.src = "photosimage8.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "After planting trees at Phuttamonthon Park in Nakhon Pathom, Thailand";
    counter--;
  }
  else if(counter === 2){
    image.src = "photosimage1.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Blue Lagoon in Vang Vieng, Laos";
    counter--;
  }
  else if(counter === 3){
    image.src = "photosimage2.jpg";
    image.style = "width:450px;height:500px";
    caption.innerHTML = "Koh Phi Phi Islands, Thailand";
    counter--;
  }
  else if(counter === 4){
    image.src = "photosimage3.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Riding an elephant in Chiang Mai, Thailand";
    counter--;
  }
  else if(counter === 5){
    image.src = "photosimage4.jpg";
    image.style = "width:400px;height:500px"
    caption.innerHTML = "Making Massaman curry during a cooking class in Chiang Mai, Thailand";
    counter--;
  }
  else if(counter === 6){
    image.src = "photosimage5.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Sunset view from our hostel in Vang Vieng, Laos";
    counter--;
  }
  else if(counter === 7){
    image.src = "photosimage6.jpg";
    image.style = "width:600px;height:400px";
    caption.innerHTML = "Camping in Erawan National Park in Kanchanaburi, Thailand";
    counter--;
  }
}
