var backgroundColors = ["#5a9b40","#0dbcb3", "#931b0b", "#9d612c", "#58375A", ];
var textColors = ["black", "black", "#c5e31c", "#f2f2f2","#f2f2f2", ];
var music = ["Relief", "Esa Carita", "Mona Lisa", "The Boy and The Swan", "Impossible", "Darlin"];

//Initialize content
var i = 0;
const stories = document.querySelectorAll(".story");
const progressBar = document.querySelector(".progress-bar");
const container = document.querySelector(".story-container");

var active = document.querySelectorAll(".active");
var background = document.getElementById("background");

background.style.backgroundColor = backgroundColors[i];
stories[i].style.color = backgroundColors[i];
stories[i].style.backgroundColor = textColors[i];


let currentStory = 0;
let interval;
var audio = new Audio("audio/" + music[0] + ".mp3");

// Function to show the next story
const showNextStory = () => {
  if (currentStory < stories.length - 1) {
    stories[currentStory].classList.remove("active");
    currentStory++;
    stories[currentStory].classList.add("active");

    audio.pause();
    audio = new Audio("audio/" + music[currentStory] + ".mp3");
    audio.play();
    background.style.backgroundColor = backgroundColors[currentStory];
    stories[currentStory].style.color = backgroundColors[currentStory];
    stories[currentStory].style.backgroundColor = textColors[currentStory];
    restartProgress();
  } else {
    document.getElementById("home").style.display = "flex";
    clearInterval(interval); // Stop progressing after the last story
    
  }
};

const showPrevStory = () => {
    if (currentStory > 0){
        stories[currentStory].classList.remove("active");
        currentStory--;
        stories[currentStory].classList.add("active");

        audio.pause();
        audio = new Audio("audio/" + music[currentStory] + ".mp3");
        audio.play();
        background.style.backgroundColor = backgroundColors[currentStory];
        active[0].style.color = backgroundColors[currentStory];
        active[0].style.backgroundColor = textColors[currentStory];
        restartProgress();
    }
    else if (currentStory == 0){
        stories[currentStory].classList.remove("active");
        stories[currentStory].classList.add("active");
        restartProgress();
    }
    else{
        clearInterval(interval);
    }
};  

// Function to restart the progress bar
const restartProgress = () => {
  progressBar.style.width = "0%"; // Reset the width
  progressBar.style.transition = "none"; // Disable transition temporarily

  // Start the new progress bar animation
  setTimeout(() => {
    progressBar.style.transition = "width 15s linear"; // Re-enable smooth transition
    progressBar.style.width = "100%";
  }, 50); // Short delay to ensure reset is applied
};

// Start the story progression
const startProgression = () => {
  stories[currentStory].classList.add("active");
    audio.play();
  restartProgress();
  interval = setInterval(showNextStory, 15000);
};

// Handle user click to go to the next story


// Initialize the progression
startProgression();
document.addEventListener('touchstart', function(event){
    const touchx = event.touches[0].clientX;
    const screenWidth = window.innerWidth;

    if (touchx > screenWidth / 2 && currentStory < stories.length - 1) {
        clearInterval(interval); // Clear the auto-progress interval
        showNextStory();
        interval = setInterval(showNextStory, 15000); // Restart auto-progression
    }
    else if (touchx < screenWidth / 2){
        clearInterval(interval); // Clear the auto-progress interval
        showPrevStory();
        interval = setInterval(showNextStory, 15000);
    }
    if (currentStory == stories.length - 1){;
        //background.style.backgroundColor = backgroundColors[currentStory];
        document.getElementById("home").style.display = "flex";
    }
    else{
        document.getElementById("home").style.display = "none";
    }

});
