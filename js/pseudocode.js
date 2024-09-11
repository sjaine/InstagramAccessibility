//Pseudo Code


//https://blog.logrocket.com/building-modern-sliders-html-css-swiper/

  //Fisrt page

    //If user select any photo of their album, the AI assistant will analyze it and support the ALT text: if blind user using it, they will want to know what this photo is about

    //If user click next button, it will go to next page


  //Second page

    //The first page will be the filter tab, but user can go ALT text without any bothering (hard direction) if they click ALT tab

    //If user click AI Assistant, the text that AI suggested will be displayed on the ALT text box
      //If user want to edit it, user can do it

    //If user click ALT text box directly, the keyboard will be appeared

    //If user click next button, it will go to the next page


  //Third Page

    //User can check the final alt text right here.

    //If user click the alt text, they could edit it with pop-up box.

    //If user click share button, it will be shared to the timeline


  //Fourth Page

    //If user click ALT text button, it will show ALT text




//For reduce the time of writing ALT Text, There will be included AI ALT Text generator

//Start of code from openAI//

// function handleImageUpload(event) {
//     const input = event.target;
//     if (input.files && input.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const image = document.getElementById('uploadedImage');
//             image.src = e.target.result;
//             image.style.display = 'block';
//             generateAltText(e.target.result);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }

  // function generateAltText(imageData) {
  //     const subscriptionKey = 'YOUR_AZURE_SUBSCRIPTION_KEY';
  //     const endpoint = 'https://YOUR_AZURE_ENDPOINT/api/v1.0/analyze';

  //     fetch(endpoint, {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'Ocp-Apim-Subscription-Key': subscriptionKey,
  //         },
  //         body: JSON.stringify({
  //             url: imageData,
  //             visualFeatures: 'Description',
  //         }),
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //         const altTextOutput = document.getElementById('altTextOutput');
  //         const description = data.description.captions[0].text;
  //         altTextOutput.innerText = `Alt Text: ${description}`;
  //     })
  //     .catch(error => {
  //         console.error('Error generating alt text:', error);
  //     });
  // }

//End of Code from openai//


//When user click each photo, the TTS will read over the ALT text for users

//Start of Code from https://www.educative.io/answers/how-to-convert-text-to-speech-in-javascript//

// document.getElementById('speakButton').addEventListener('click', () => {
//    function getVoices() {
//  let voices = speechSynthesis.getVoices();
//  if(!voices.length){
//  // some time the voice will not be initialized so we can call speak with empty string
//  // this will initialize the voices 
//  let utterance = new SpeechSynthesisUtterance("");
//  speechSynthesis.speak(utterance);
//  voices = speechSynthesis.getVoices();
//  }
//  return voices;
//  }


//  function speak(text, voice, rate, pitch, volume) {
//  // create a SpeechSynthesisUtterance to configure the how text to be spoken 
//  let speakData = new SpeechSynthesisUtterance();
//  speakData.volume = volume; // From 0 to 1
//  speakData.rate = rate; // From 0.1 to 10
//  speakData.pitch = pitch; // From 0 to 2
//  speakData.text = text;
//  speakData.lang = 'en';
//  speakData.voice = voice;

//  // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
//  speechSynthesis.speak(speakData);

//  }

//  if ('speechSynthesis' in window) {

//  let voices = getVoices();
//  let rate = 1, pitch = 2, volume = 1;
//  let text = "Spaecking with volume = 1 rate =1 pitch =2 ";

//  speak(text, voices[5], rate, pitch, volume);

//  setTimeout(()=>{ // speak after 2 seconds 
//  rate = 0.5; pitch = 1.5, volume = 0.5;
//  text = "Spaecking with volume = 0.5 rate = 0.5 pitch = 1.5 ";
//  speak(text, voices[10], rate, pitch, volume );
//  }, 2000);
//  }else{
//  console.log(' Speech Synthesis Not Supported 😞'); 
//  }
//  });

//End of code from https://www.educative.io/answers/how-to-convert-text-to-speech-in-javascript//


