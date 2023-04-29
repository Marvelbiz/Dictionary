let input = document.querySelector('.input');
let search = document.querySelector('.fa-magnifying-glass');
let word = document.querySelector('.word');
let phonetic = document.querySelector('.phonetic');
let prt = document.querySelector('.prt');
let prt2 = document.querySelector('.prt2');
let prt3 = document.querySelector('.prt3');
let prt4 = document.querySelector('.prt4');
let meaning1 = document.querySelector('.meaning1');
let meaning2 = document.querySelector('.meaning2');
let meaning3 = document.querySelector('.meaning3');
let meaning4 = document.querySelector('.meaning4');
let exp1 = document.querySelector('.exp1');
let ant1 = document.querySelector('.ant1');
let syn1 = document.querySelector('.syn1');
let exp2 = document.querySelector('.exp2');
let ant2 = document.querySelector('.ant2');
let syn2 = document.querySelector('.syn2');
let exp3 = document.querySelector('.exp3');
let ant3 = document.querySelector('.ant3');
let syn3 = document.querySelector('.syn3');
let exp4 = document.querySelector('.exp4');
let ant4 = document.querySelector('.ant4');
let syn4 = document.querySelector('.syn4');
let lab1 = document.querySelector('.lab1');
let lab2 = document.querySelector('.lab2');
let lab3 = document.querySelector('.lab3');
let lab4 = document.querySelector('.lab4');
let lab5 = document.querySelector('.lab5');
let lab6 = document.querySelector('.lab6');
let lab7 = document.querySelector('.lab7');
let lab8 = document.querySelector('.lab8');
let body = document.querySelector('.body');
let audio = document.querySelector('.audio');


search.addEventListener('click',function(){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
        .then(data => {
        return data.json()
        }).then(myData => {
                audio.addEventListener("click",function(){

                        if(myData[0]["phonetics"].length === 1){
                                let audioUrl = new Audio(myData[0]["phonetics"][0]["audio"]);
                                audioUrl.play();
                        } 
                        else if(myData[0]["phonetics"].length === 2){
                               if(myData[0]["phonetics"][0]["audio"] === ""){
                                let audioUrl2 = new Audio(myData[0]["phonetics"][1]["audio"]);
                                audioUrl2.play();
                               }else{
                                let audioUrl2 = new Audio(myData[0]["phonetics"][0]["audio"]);
                                audioUrl2.play();
                               }
                        }
                         else if(myData[0]["phonetics"].length >= 3){
                                let audioUrl = new Audio(myData[0]["phonetics"][2]["audio"]);
                                audioUrl.play();
                        }
                });
                if(myData[0]["meanings"].length=== 2){

                word.textContent = myData[0]["word"];
                phonetic.textContent = myData[0]["phonetic"];
                prt.textContent=myData[0]["meanings"][0]["partOfSpeech"];
                prt2.textContent=myData[0]["meanings"][1]["partOfSpeech"];
                prt3.textContent=""
                prt4.textContent=""
                meaning1.textContent=myData[0]["meanings"][0]["definitions"][0]["definition"];
                meaning2.textContent=myData[0]["meanings"][1]["definitions"][0]["definition"];
                meaning3.textContent=""
                meaning4.textContent=""
                exp1.textContent=myData[0]["meanings"][0]["definitions"][0]["example"];
                exp2.textContent=myData[0]["meanings"][1]["definitions"][0]["example"];
                exp3.textContent=""
                exp4.textContent=""
                ant1.value=myData[0]["meanings"][0]["antonyms"];
                ant2.value=myData[0]["meanings"][1]["antonyms"];
                syn1.value=myData[0]["meanings"][0]["synonyms"];
                syn2.value=myData[0]["meanings"][1]["synonyms"];
                lab1.textContent=`Antonym(s):`
                lab2.textContent=`Synonym(s):`
                lab3.textContent=`Antonym(s):`
                lab4.textContent=`Synonym(s):`
                lab5.textContent=``
                lab6.textContent=``
                lab7.textContent=``
                lab8.textContent=``
                }
                
                else if(myData[0]["meanings"].length === 3){
                        
                word.textContent = myData[0]["word"];
                phonetic.textContent = myData[0]["phonetic"];
                prt.textContent=myData[0]["meanings"][0]["partOfSpeech"];
                prt2.textContent=myData[0]["meanings"][1]["partOfSpeech"];
                prt3.textContent=myData[0]["meanings"][2]["partOfSpeech"];
                meaning1.textContent=myData[0]["meanings"][0]["definitions"][0]["definition"];
                meaning2.textContent=myData[0]["meanings"][1]["definitions"][0]["definition"];
                meaning3.textContent=myData[0]["meanings"][2]["definitions"][0]["definition"];
                exp1.textContent=myData[0]["meanings"][0]["definitions"][0]["example"];
                exp2.textContent=myData[0]["meanings"][1]["definitions"][0]["example"];
                exp3.textContent=myData[0]["meanings"][2]["definitions"][0]["example"];
                ant1.value=myData[0]["meanings"][0]["antonyms"];
                ant2.value=myData[0]["meanings"][1]["antonyms"];
                ant3.value=myData[0]["meanings"][2]["antonyms"];
                syn1.value=myData[0]["meanings"][0]["synonyms"];
                syn2.value=myData[0]["meanings"][1]["synonyms"];
                syn3.value=myData[0]["meanings"][2]["synonyms"];
                lab1.textContent=`Antonym(s):`
                lab2.textContent=`Synonym(s):`
                lab3.textContent=`Antonym(s):`
                lab4.textContent=`Synonym(s):`
                lab5.textContent=`Antonym(s):`
                lab6.textContent=`Synonym(s):`

                }else if(myData[0]["meanings"].length > 3){
                        word.textContent = myData[0]["word"];
                        phonetic.textContent = myData[0]["phonetic"];
                        prt.textContent=myData[0]["meanings"][0]["partOfSpeech"];
                        prt2.textContent=myData[0]["meanings"][1]["partOfSpeech"];
                        prt3.textContent=myData[0]["meanings"][2]["partOfSpeech"];
                        prt4.textContent=myData[0]["meanings"][3]["partOfSpeech"];
                        meaning1.textContent=myData[0]["meanings"][0]["definitions"][0]["definition"];
                        meaning2.textContent=myData[0]["meanings"][1]["definitions"][0]["definition"];
                        meaning3.textContent=myData[0]["meanings"][2]["definitions"][0]["definition"];
                        meaning4.textContent=myData[0]["meanings"][3]["definitions"][0]["definition"];
                        exp1.textContent=myData[0]["meanings"][0]["definitions"][0]["example"];
                        exp2.textContent=myData[0]["meanings"][1]["definitions"][0]["example"];
                        exp3.textContent=myData[0]["meanings"][2]["definitions"][0]["example"];
                        exp4.textContent=myData[0]["meanings"][3]["definitions"][0]["example"];
                        ant1.value=myData[0]["meanings"][0]["antonyms"];
                        ant2.value=myData[0]["meanings"][1]["antonyms"];
                        ant3.value=myData[0]["meanings"][2]["antonyms"];
                        ant4.value=myData[0]["meanings"][3]["antonyms"];
                        syn1.value=myData[0]["meanings"][0]["synonyms"];
                        syn2.value=myData[0]["meanings"][1]["synonyms"];
                        syn3.value=myData[0]["meanings"][2]["synonyms"];
                        syn4.value=myData[0]["meanings"][3]["synonyms"];
                        lab1.textContent=`Antonym(s):`
                        lab2.textContent=`Synonym(s):`
                        lab3.textContent=`Antonym(s):`
                        lab4.textContent=`Synonym(s):`
                        lab5.textContent=`Antonym(s):`
                        lab6.textContent=`Synonym(s):`
                        lab7.textContent=`Antonym(s):`
                        lab8.textContent=`Synonym(s):`
                }else{
                        word.textContent = myData[0]["word"];
                        phonetic.textContent = myData[0]["phonetic"];
                        prt.textContent=myData[0]["meanings"][0]["partOfSpeech"];
                        prt2.textContent=""
                        prt3.textContent=""
                        prt4.textContent=""
                        meaning1.textContent=myData[0]["meanings"][0]["definitions"][0]["definition"];
                        meaning2.textContent=""
                        meaning3.textContent=""
                        meaning4.textContent=""
                        exp1.textContent=myData[0]["meanings"][0]["definitions"][0]["example"];
                        exp2.textContent=""
                        exp3.textContent=""
                        exp4.textContent=""
                        ant1.value=myData[0]["meanings"][0]["antonyms"];
                        ant2.value=""
                        ant3.value=""
                        ant4.value=""
                        syn1.value=myData[0]["meanings"][0]["synonyms"];
                        syn2.value=""
                        syn3.value=""
                        syn4.value=""
                        lab1.textContent=`Antonym(s):`
                        lab2.textContent=`Synonym(s):`
                        lab3.textContent=""
                        lab4.textContent=""
                        lab5.textContent=``
                        lab6.textContent=``
                        lab7.textContent=``
                        lab8.textContent=``
                }
                console.log(myData)
        }).catch(err => {
                if(TypeError={}){
                        word.style.textTransform = "Capitalize";
                        word.style.fontWeight = "100";
                        word.textContent = `So Sorry!!! 
                        We are unable to find the word "${input.value}" 😣
                        please check yor connection or search for word we 
                        can find and tap on the close button to continue`;
                        phonetic.textContent = "";
                        body.style.display = "none";
                }

                console.log(err)
        });
})