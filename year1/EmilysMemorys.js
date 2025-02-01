var i = 0
var e = 0;
var j = 0;
var slides = [];
for (let l = 1; l <= 33; l++){
    slides[l - 1] = "../Images/"+ l + ".jpg";
}
for (k of slides){
    let slide = document.createElement("img");
    slide.className = "frame";
    slide.src = k;

    let div = document.getElementById("images");
    div.appendChild(slide);
}

var text = "Hey! Emily, can you believe it? One whole year together!! Full of the most amazing memories, I can't even imagine the many more to come. I Love Youu!!";
function type() {

    if (i < text.length){
        document.getElementById("welcome").innerHTML += text.charAt(i);
        i++;
        e++;
        if (e > 28 & text.charAt(i) == " "){
            document.getElementById("welcome").innerHTML += "<br>";
            e = 0;
        }
        setTimeout(type, 60);
    }
    else
        setTimeout(showButton(), 500);
}

function showButton(){
    document.getElementById("noon").id = "moon";
    document.getElementById("herent").id = "here";
    let pic = document.getElementsByClassName("frame")[0];

    document.getElementById("moon").onclick = function() {
        document.getElementById("moon").id = "noon";
        document.getElementById("here").id = "herent";
        //document.getElementById("none").id = "frame";
        pic.style.display = "block";
        //var audio = new Audio("EsPorTi.mp3");
        //audio.play();
        setTimeout(slideshow(), 1000);
    };
}

function slideshow(){
    let i = 0;
    let slides = document.getElementsByClassName("frame");
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    j++;
    if (j > slides.length)
        j = 1;
    slides[j - 1].style.display = "block";
    setTimeout(slideshow, 2000);
}

//document.getElementById("click").addEventListener("click", slideshow);

document.onload = setTimeout(type, 2000);

// 42bd91
// 0cf3e6


Menu.style.display = "none";
function ShowHide(x) {
  x.classList.toggle("change");
  var Menu = document.getElementById("Menu");
  if (Menu.style.display === "none") {
    Menu.style.display = "block";
  } else {
    Menu.style.display = "none";
  }
}