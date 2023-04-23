
const inputText =  document.getElementById("inputText-1");

function makeBigger(){
    inputText.style.fontSize = "24pt"
}

function makeFancy(){
    inputText.style.fontWeight = "bold"
    inputText.style.color      = "blue"
    inputText.style.textDecorationLine = "underline"
}

function resetText(){
    inputText.style.fontWeight = "normal"
    inputText.style.color      = "black"
    inputText.style.textDecorationLine = "underline"
    inputText.style.textDecorationLine = "none"
}

function makeMoo() {
    inputText.style.textTransform = "uppercase"
    const text = document.getElementById("inputText-1").value;
    const sentences = text.split(".");

    for( var i = 0; i < sentences.length-1; i++){
        let sentence = sentences[i].trim();
        sentence += "-Moo";
        sentences[i] = sentence;

    }

    inputText.value = sentences.join(".");

}