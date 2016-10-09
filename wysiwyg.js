// object of famous people to be output to DOM
var famousPeople = [{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}, {
  title: "Dorothy",
  name: "Judy Garland",
  bio: "Her house is uprooted in a tornado in Kansas and she is tranported to a fantasy world.",
  image: "http://www.jgdb.com/oz20.jpg",
  lifespan: {
    birth: 1922,
    death: 1969
  }
}, {
  title: "Dorothy",
  name: "Judy Garland",
  bio: "Her house is uprooted in a tornado in Kansas and she is tranported to a fantasy world.",
  image: "http://www.jgdb.com/oz20.jpg",
  lifespan: {
    birth: 1922,
    death: 1969
  }
},  {
  title: "Dorothy",
  name: "Judy Garland",
  bio: "Her house is uprooted in a tornado in Kansas and she is tranported to a fantasy world.",
  image: "http://www.jgdb.com/oz20.jpg",
  lifespan: {
    birth: 1922,
    death: 1969
  }
}, {
title: "Dorothy",
  name: "Judy Garland",
  bio: "Her house is uprooted in a tornado in Kansas and she is tranported to a fantasy world.",
  image: "http://www.jgdb.com/oz20.jpg",
  lifespan: {
    birth: 1922,
    death: 1969
  }
}];


//for loop that outputs the above object to the DOM
var counter = 0;
var personName = document.getElementById("name_container");
var personBio = document.getElementById("bio_container");
var personLifespan = document.getElementById("lifespan_container");

for (var i = 0; i < famousPeople.length; i++) {
  var famousOutput = " ";
  var famousPeeps = famousPeople[i]
    famousOutput += "<div class= 'wholething'>"
    famousOutput += "<div class='famous_name' id='title-${counter}'>" + famousPeople[i].title + "</div>"
    famousOutput += "<div class='famous_name' id='name-${counter}'>" + famousPeople[i].name + "</div>"
    famousOutput += "<div class='famous_bio' id='bio-${counter}'>" + famousPeople[i].bio + "</div>"
    famousOutput += "<div class='famous_bio' id='image-${counter}'>" + famousPeople[i].image + "</div>"
    famousOutput += "<div class='famous_lifespan' id='birth-${counter}'>" + famousPeople[i].lifespan.birth + "</div>"
    famousOutput += "<div class='famous_lifespan' id='death-${counter}'>" + famousPeople[i].lifespan.death + "</div>"
    famousOutput += "</div>"
      personName.innerHTML += famousOutput;
      personBio.innerHTML += famousOutput;
      personLifespan.innerHTML += famousOutput;
}

//creating selectors and event listeners
var containerEl = document.getElementsByClassName("wholething");
var userInput = document.getElementById("input");
var currentBio = "";

for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    for (var j = 0; j < containerEl.length; j++) {
        containerEl[j].classList.remove("dotted-border");
    }
   event.currentTarget.classList.add("dotted-border");
   userInput.focus();
   currentBio = event.currentTarget;
    })
  };

//event listener and function to tie the bio entry to the userInput
userInput.addEventListener("keyup", writeBio);

function writeBio() {
  var bioSelect = currentBio.querySelector(".famous_bio")
  bioSelect.innerHTML = userInput.value;
}

//event listener and function to clear the userInput on enter click
userInput.addEventListener("keyup", clearInput);

function clearInput (e){
  e.preventDefault();
  if(e.keyCode == 13)
  userInput.value = "";
}

