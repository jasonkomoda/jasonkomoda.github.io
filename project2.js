
var index = 0;
let size1 = "width:600px;height:400px";
let size2 = "width:450px;height:500px";
let size3 = "width:400px;height:500px";
let imageObjects= [
  image1 = {
    image: "photosimage1.jpg",
    caption: "Blue Lagoon in Vang Vieng, Laos",
    dimensions: size1
  },
  image2 = {
    image: "photosimage2.jpg",
    caption: "Koh Phi Phi Islands, Thailand",
    dimensions: size2
  },
  image3 = {
    image: "photosimage3.jpg",
    caption: "Riding an elephant in Chiang Mai, Thailand",
    dimensions: size1
  },
  image4 = {
    image: "photosimage4.jpg",
    caption: "Making Massaman curry during a cooking class in Chiang Mai, Thailand",
    dimensions: size3
  },
  image5 = {
    image: "photosimage5.jpg",
    caption: "Sunset view from our hostel in Vang Vieng, Laos",
    dimensions: size1
  },
  image6 = {
    image: "photosimage6.jpg",
    caption: "Camping in Erawan National Park in Kanchanaburi, Thailand",
    dimensions: size1
  },
  image7 = {
    image: "photosimage7.jpg",
    caption: "One of seven waterfalls at Erawan National Park in Kanchanaburi, Thailand",
    dimensions: size1
  },
  image8 = {
    image: "photosimage8.jpg",
    caption: "After planting trees at Phuttamonthon Park in Nakhon Pathom, Thailand",
    dimensions: size1
  }
]

async function changeImageNext(){
  var image = document.getElementById("changingImage");
  var caption = document.getElementById("caption");
  if(index+1 == 8) {
    index = -1;
  } 
  console.log(index);
    image.src = imageObjects[index+1].image
    image.style = imageObjects[index+1].dimensions;
    caption.innerHTML = imageObjects[index+1] .caption;
    index++;
}

async function changeImagePrevious(){
  var image = document.getElementById("changingImage");
  var caption = document.getElementById("caption");
  if(index-1 == -1) {
    index = 8;
  } 
  console.log(index);
    image.src = imageObjects[index-1].image
    image.style = imageObjects[index-1].dimensions;
    caption.innerHTML = imageObjects[index-1] .caption;
    index--;
}