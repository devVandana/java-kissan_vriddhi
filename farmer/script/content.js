
/* it will change the description text to these text in farmerlist page */
function changeText(id) {
  id.innerHTML = "Lives in Karnal, Haryana. <br>Works in some aspect of agriculture, growing vegetables, grains and raising animals for milk.";}

function changeText1(id){
    id.innerHTML = "Lives in Delhi, India. <br>Works in some aspect of agriculture, growing vegetables, grains and raising animals for milk.";}

function changeText2(id){
    id.innerHTML ="Lives in Jalandhar, Punjab. <br>Works in some aspect of agriculture, growing vegetables, grains and raising animals for milk.";}

function changeText3(id){
    id.innerHTML ="Lives in Pune, Maharashtra. <br>Works in some aspect of agriculture, growing vegetables, grains and raising animals for milk.";}


/* These functions are for the button to play pause and resize the video in crop details pages */
function makeBig() { 
     var myVideo = document.getElementById("video"); 

    myVideo.width = 650 ; 
} 
      function playPause() { 
           var myVideo = document.getElementById("video"); 

  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
function makeSmall() { 
     var myVideo = document.getElementById("video"); 

    myVideo.width = 450; 
} 

function makeNormal() { 
     var myVideo = document.getElementById("video"); 

    myVideo.width = 600; 
} 


/* this function will enlarge the photos of farmers in farmerlist page while hovering of mouse on image*/
function bigImg(x) {
  x.style.height = "80%";
  x.style.width = "43%";
}


/* this function will make normal size of the photos of farmers in farmerlist page while hovering of mouse on image*/
function normalImg(x) {
  x.style.height = "50%";
  x.style.width = "30%";
}

/* this function is to alert when open the farmer list page */
function myFunction() {
  alert("Page is loaded");
}

/* this function is to go back to the pervious page for the crop details page */
function goBack() {
  window.history.back()
}




