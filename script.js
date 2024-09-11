let overlay = document.getElementById("overlay");
let imgmain1 = document.getElementById("imgmain1");
let assistant = document.getElementById("assistant");
let imgmain4 = document.getElementById("imgmain4");
let imgmain5 = document.getElementById("imgmain5");
let assistant2 = document.getElementById("assistant2");
let lightImg = document.getElementById("lightImg");
let textnext = document.getElementById("textnext");

//Start of Code from https://www.educative.io/answers/how-to-convert-text-to-speech-in-javascript//

function getVoices() {
 let voices = speechSynthesis.getVoices();
 if(!voices.length){
 let utterance = new SpeechSynthesisUtterance("");
 speechSynthesis.speak(utterance);
 voices = speechSynthesis.getVoices();
 }
 return voices;
 }


 function speak(text, voice, rate, pitch, volume) {
 let speakData = new SpeechSynthesisUtterance();
 speakData.volume = volume; 
 speakData.rate = rate; 
 speakData.pitch = pitch; 
 speakData.text = text;
 speakData.lang = 'en';
 speakData.voice = voice;

 speechSynthesis.speak(speakData);

 }

function overlayFunction1() {
  overlay.style.gridColumn="1";
  overlay.style.gridRow="1";
  imgmain1.style.backgroundImage="url('img2/1-1.JPG')";
  assistant.innerHTML='“A black and white checkered floor with a blue sky.”';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A black and white checkered floor with a blue sky.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}

function overlayFunction2() {
  overlay.style.gridColumn="2";
  overlay.style.gridRow="1";
  imgmain1.style.backgroundImage="url('img2/1-2.JPG')";
  assistant.innerHTML='“Bill with detailed breakdown of menu items and prices.”';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "Bill with detailed breakdown of menu items and prices.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}

function overlayFunction3() {
  overlay.style.gridColumn="3";
  overlay.style.gridRow="1";
  imgmain1.style.backgroundImage="url('img2/1-3.JPG')";
  assistant.innerHTML='“A laptop displaying the word "memento" on its screen.”';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A laptop displaying the word memento on its screen.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}

function overlayFunction4() {
  overlay.style.gridColumn="4";
  overlay.style.gridRow="1";
  imgmain1.style.backgroundImage="url('img2/1-4.JPG')";
  assistant.innerHTML='"Review of The Greatest Showman movie."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "Review of The Greatest Showman movie.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction5() {
  overlay.style.gridColumn="1";
  overlay.style.gridRow="2";
  imgmain1.style.backgroundImage="url('img2/2-1.JPG')";
  assistant.innerHTML='"A tree with vibrant yellow leaves, standing tall against a clear blue sky, showcasing the beauty of autumn."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A tree with vibrant yellow leaves, standing tall against a clear blue sky, showcasing the beauty of autumn.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction6() {
  overlay.style.gridColumn="2";
  overlay.style.gridRow="2";
  imgmain1.style.backgroundImage="url('img2/2-2.JPG')";
  assistant.innerHTML='"An urban street scene featuring parked cars on both sides, adding to the lively atmosphere of the city."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "An urban street scene featuring parked cars on both sides, adding to the lively atmosphere of the city.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction7() {
  overlay.style.gridColumn="3";
  overlay.style.gridRow="2";
  imgmain1.style.backgroundImage="url('img2/2-3.JPG')";
  assistant.innerHTML='"A crowd of pedestrians crossing a street in front of a majestic clock tower."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A crowd of pedestrians crossing a street in front of a majestic clock tower.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction8() {
  overlay.style.gridColumn="4";
  overlay.style.gridRow="2";
  imgmain1.style.backgroundImage="url('img2/2-4.JPG')";
  assistant.innerHTML='"A candle lit in the dark with a drum, creating a serene ambiance."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A candle lit in the dark with a drum, creating a serene ambiance.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction9() {
  overlay.style.gridColumn="1";
  overlay.style.gridRow="3";
  imgmain1.style.backgroundImage="url('img2/3-1.JPG')";
  assistant.innerHTML='"A laptop computer with a dark screen, looks like a movie scene."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A laptop computer with a dark screen, looks like a movie scene.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction10() {
  overlay.style.gridColumn="2";
  overlay.style.gridRow="3";
  imgmain1.style.backgroundImage="url('img2/3-2.JPG')";
  assistant.innerHTML='"A laptop displaying a video of people dancing."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A laptop displaying a video of people dancing.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction11() {
  overlay.style.gridColumn="3";
  overlay.style.gridRow="3";
  imgmain1.style.backgroundImage="url('img2/3-3.JPG')";
  assistant.innerHTML='"A serene blue sky adorned with fluffy white clouds, creating a picturesque view of natures beauty."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A serene blue sky adorned with fluffy white clouds, creating a picturesque view of natures beauty.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction12() {
  overlay.style.gridColumn="4";
  overlay.style.gridRow="3";
  imgmain1.style.backgroundImage="url('img2/3-4.JPG')";
  assistant.innerHTML='"A night-time stage performance featuring a group of individuals showcasing their talents."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A night-time stage performance featuring a group of individuals showcasing their talents.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction13() {
  overlay.style.gridColumn="1";
  overlay.style.gridRow="4";
  imgmain1.style.backgroundImage="url('img2/4-1.JPG')";
  assistant.innerHTML='"Nighttime tightrope walker performing."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "Nighttime tightrope walker performing.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction14() {
  overlay.style.gridColumn="2";
  overlay.style.gridRow="4";
  imgmain1.style.backgroundImage="url('img2/4-2.JPG')";
  assistant.innerHTML='"Vehicle driving past sign for Canadas Wonderland."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "Vehicle driving past sign for Canadas Wonderland.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction15() {
  overlay.style.gridColumn="3";
  overlay.style.gridRow="4";
  imgmain1.style.backgroundImage="url('img2/4-3.JPG')";
  assistant.innerHTML='“A bag of chips in a blue bag.”';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A bag of chips in a blue bag.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function overlayFunction16() {
  overlay.style.gridColumn="4";
  overlay.style.gridRow="4";
  imgmain1.style.backgroundImage="url('img2/4-4.JPG')";
  assistant.innerHTML='"A laptop computer displaying the word "GATTACA" on its screen."';
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A laptop computer displaying the word GATTACA on its screen.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}

function overlayFunctionmain1() {
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A black and white checkered floor with a blue sky.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}

function overlayFunctionmain2() {
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A bag of chips in a blue bag.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}

function readfunction1() {
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A black and white checkered floor with a blue sky.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}


function readfunction2() {
  if ('speechSynthesis' in window) {

   let voices = getVoices();
   let rate = 1, pitch = 1, volume = 1;
   let text = "A bag of chips in a blue bag.";

   speak(text, voices[5], rate, pitch, volume);
   }else{
   console.log(' Speech Synthesis Not Supported 😞'); 
  }
}

//End of code from https://www.educative.io/answers/how-to-convert-text-to-speech-in-javascript//

//Start of Code from https://blog.logrocket.com/building-modern-sliders-html-css-swiper & https://swiperjs.com/get-started//

  let swiper = new Swiper(".mySwiper", {
   spaceBetween: 50,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
  });

  let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 50,
    freeMode: {
       enabled: true,
     },
  });

//End of Code from https://blog.logrocket.com/building-modern-sliders-html-css-swiper/ & https://swiperjs.com/get-started//

//Start of code from https://zellwk.com/blog/css-translate-values-in-javascript/ & https://stackoverflow.com/questions/33447118/javascript-if-else-style-changing //

function changeLoc() {
  let style = window.getComputedStyle(wrapper);
  let matrix = style.transform || style.webkitTransform || style.mozTransform;
  let matrixType = matrix.includes('3d') ? '3d' : '2d';
  let matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
  let xaxis = matrixValues[4];

  if (xaxis <= -302) {
    assistant2.innerHTML='“A bag of chips in a blue bag.”';
  } else if (xaxis >= -302) {
    assistant2.innerHTML='“A black and white checkered floor with a blue sky.”';
  };
};

//End of code from https://zellwk.com/blog/css-translate-values-in-javascript/ & https://stackoverflow.com/questions/33447118/javascript-if-else-style-changing //

//Start of code from https://linuxhint.com/change-image-on-hover-in-javascript/ //

function hover() {
  lightImg.src = "img/light2.svg";
};

function hoverOut() {
  lightImg.src = "img/lights.svg";
};

function altText() {
  textnext.innerHTML = assistant2.innerHTML;
  textnext.style.color = "white";
  return;
}

//End of code from https://linuxhint.com/change-image-on-hover-in-javascript/ //

//Start of Code from https://www.developerdrive.com/allowing-users-to-edit-text-content-with-html5///

function saveEdits() {
      //get the editable element
    let editElem = document.getElementById("altex");
    //get the edited element content
    let userVersion = editElem.innerHTML;
    //save the content to local storage
    localStorage.userEdits = userVersion;
}

function checkEdits() {
//find out if the user has previously saved edits
if(localStorage.userEdits!=null)
document.getElementById("altex").innerHTML = localStorage.userEdits;
}

//End of Code from https://www.developerdrive.com/allowing-users-to-edit-text-content-with-html5///