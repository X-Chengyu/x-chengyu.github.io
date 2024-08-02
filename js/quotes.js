var i = 0,
    resultTxt = "",
    resultArr = [];

x = fetch("../txt/quotes.txt")
    .then(function (response) {
        return response.text();
    })

    .then(function (text) {
        resultArr = text.toString().split(/[\n]/);
        i = Math.floor(Math.random() * resultArr.length);
        resultTxt = resultArr[i];
        document.getElementById("quote").innerHTML = resultTxt;
    });