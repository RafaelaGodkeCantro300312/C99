var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event) {
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    content1=Content.charAt(0);
    content2=content1.toUpperCase();
    content3=Content.replace(content1,content2);
    document.getElementById("textbox").innerHTML=content3;
    if(content3=="Tire minha selfie") {
        speak();
    }
}
function speak() {
    var synth=window.speechSynthesis;
    speakData="Tirando sua selfie em 5 segundos";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save();
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
function takeSelfie() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    })
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}