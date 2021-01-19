function clearMessages(){
    var eltMessages = document.getElementById("messages");
    eltMessages.value=""
}

function addMessage(texte){
    var eltMessages = document.getElementById("messages");
    var existingText = eltMessages.value;
    if(existingText.length > 0){
        existingText += "\n"
    }
    eltMessages.value=existingText +texte;
}

