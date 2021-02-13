var srcs,video
$(document).ready(function(){
srcs = ["https://i.imgur.com/UtV0pz1.mp4", "https://i.imgur.com/MT1IN0t.mp4","https://i.imgur.com/Z9Hm2CZ.mp4"]
video = document.querySelector("video");
video.src=srcs[0];
});
const prevImage = () => {
  var index = srcs.indexOf(video.src);
  
  if(index>0){
    video.src=srcs[index-1]
  }
  else{
    video.src=srcs[srcs.length-1];
  }
}

const nextImage = () => {
  var index = srcs.indexOf(video.src);
  if(index!==srcs.length-1){
    video.src=srcs[index+1]
  }
  else{
    video.src=srcs[0];
  }
}

var imageFrame = document.querySelector(".imageFrame");
imageFrame.style.transform="scale(1)";

