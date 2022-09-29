
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.queryselector("#txt-input");
var outputDiv = document.querySelector("#output");

//outputDiv
//var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json "

var serverURL ="  https://api.funtranslations.com/translate/minion.json"
	

function getTranslationURL(input){
    return serverURL + "?" +  'text=' + input
}

function errorHandler(error){
  console.log("error occured", error);
   alert("something wrong with server try again after some time")
}

function clickHandler(){
var inputText= txtInput.vlaue;
-
//calling serve for porcessing
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler)





