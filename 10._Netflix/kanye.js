
function displayQuote(){
    fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then( result => result.quote)
        .then( quote => {
            h = document.getElementById("quote-id");
            h.innerText = quote;
        });
}

var h;

displayQuote();

function addQuoteToList(list,quote){
    let para = document.createElement("p")
    para.innerText = quote;
    document.getElementById(list).prepend(para);
}



setInterval(displayQuote,10000);

document.getElementById("button-laugh").addEventListener("click",() => addQuoteToList("laugh",h.innerText));
document.getElementById("button-wtf").addEventListener("click",() => addQuoteToList("wtf",h.innerText));
document.getElementById("button-anger").addEventListener("click",() => addQuoteToList("anger",h.innerText));
