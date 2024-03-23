let hr;
let min;
let sec;
let txt;
let voiceSelect;
let speech = new SpeechSynthesisUtterance();
let voices = [];

window.onload = function(){
    hr = document.querySelector(".hr");
    min = document.querySelector(".min");
    sec = document.querySelector(".sec");
    txt = document.querySelector("#txt");
    voiceSelect = document.querySelector("#voice");
    window.speechSynthesis.onvoiceschanged = ()=>{
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
        voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,
            i)));
    }
    voiceSelect.addEventListener("change", ()=>{
        speech.voice = voices[voiceSelect.value];
    });
}
setInterval(()=>{
        let timeobject = new Date();
        hr.innerHTML = (timeobject.getHours()<10?"0":"")+timeobject.getHours();
        min.innerHTML = (timeobject.getMinutes()<10?"0":"")+timeobject.getMinutes();
        sec.innerHTML = (timeobject.getSeconds()<10?"0":"")+timeobject.getSeconds();
}, 1000);
function play(){
    let x;
    if(txt.value == "$f"){
        x = "Hello Dear Friend, Type in anything and i will say it aloud";
    }
    else if(txt.value == "$l"){
        x = "Hello darling, how are you today? Type in anything and i will say it aloud";
    }
    else if(txt.value == "$lm"){
        x = "Darling sweetheart, I have three words to say to you, there are... I LOVE YOU!";
    }
    else{
        x = txt.value;
    }
    speech.text = x;
    window.speechSynthesis.speak(speech);
}