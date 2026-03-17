let text = document.getElementById("input");
let btn = document.getElementById("btn");

btn.onclick = function () {

    if (text.value.trim() === "") {
        alert("Enter Text First");
        return;
    }

    let message = text.value;

    // Google TTS (works on mobile)
    let url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=" 
              + encodeURIComponent(message);

    let audio = new Audio(url);
    audio.play();
};

// Clear text
function clearTexy() {
    document.getElementById("input").value = "";
}