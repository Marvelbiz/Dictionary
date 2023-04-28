let input = document.querySelector('.input');
let search = document.querySelector('.fa-magnifying-glass');
let word = document.querySelector('.word');
let phonetic = document.querySelector('.phonetic');
let prt = document.querySelector('.prt');
let prt2 = document.querySelector('.prt2');
let meaning1 = document.querySelector('.meaning1');
let meaning2 = document.querySelector('.meaning2');
let exp1 = document.querySelector('.exp1');
let ant1 = document.querySelector('.ant1');
let syn1 = document.querySelector('.syn1');
let exp2 = document.querySelector('.exp2');
let ant2 = document.querySelector('.ant2');
let syn2 = document.querySelector('.syn2');
let lab1 = document.querySelector('.lab1');
let lab2 = document.querySelector('.lab2');
let lab3 = document.querySelector('.lab3');
let lab4 = document.querySelector('.lab4');

search.addEventListener('click',function(){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
        .then(data => {
        return data.json()
        }).then(myData => {
        word.textContent = myData[0]["word"];
        phonetic.textContent = myData[0]["phonetics"][1]["text"];
        prt.textContent=myData[0]["meanings"][0]["partOfSpeech"];
        prt2.textContent=myData[0]["meanings"][1]["partOfSpeech"];
        meaning1.textContent=myData[0]["meanings"][0]["definitions"][0]["definition"];
        meaning2.textContent=myData[0]["meanings"][1]["definitions"][0]["definition"];
        exp1.textContent=myData[0]["meanings"][0]["definitions"][0]["example"];
        exp2.textContent=myData[0]["meanings"][1]["definitions"][0]["example"];
        ant1.value=myData[0]["meanings"][0]["antonyms"];
        ant2.value=myData[0]["meanings"][1]["antonyms"];
        syn1.value=myData[0]["meanings"][0]["synonyms"];
        syn2.value=myData[0]["meanings"][1]["synonyms"];
        lab1.textContent=`Antonyms:`
        lab2.textContent=`Synonyms:`
        lab3.textContent=`Antonyms:`
        lab4.textContent=`Synonyms:`

        console.log(myData)
        }).catch(err => console.log(err));

})
