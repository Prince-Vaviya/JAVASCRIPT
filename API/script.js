function search(){
    const userInput = document.getElementById("userInput").value;
    const result = document.getElementById('data');


    const API_URL = `https://restcountries.com/v3.1/name/${userInput}?fullText=true`

    fetch(API_URL)

    .then(response=>response.json())
    .then((data)=>{
        console.log(data[0])
        result.innerHTML = `<img src="${data[0].flags.png}" alt="flag">
            <h1>Name : - ${data[0].altSpellings[0]}</h1>
            <h1>Capital : - ${data[0].capital[0]}</h1>`

    })
}