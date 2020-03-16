const correctAntwoorden = ["Parijs", 
8, 
"Ijselmeer", 
["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"], 
["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"] 
];

const vraagAntwoorden = ["wat is de hoofdstad van Frankrijk?", 
"hoeveel poten hebben spinnen?",
"wat is het grootste meer in Nederland", 
"Noem minstens 2 duits automerken" , 
"Noem meer dan 2 waddeneilanden" 
];

var antwoorden = [];
var pushing;
var correct = 0 ;

function makeQuestion(){
    for (i=0; i<vraagAntwoorden.length ;i++ ){
        var para = document.createElement("p");
        para.innerText = vraagAntwoorden[i];
        document.body.appendChild(para);
        var input = document.createElement("input");
        document.body.appendChild(input); 
        document.getElementsByTagName("INPUT")[i].setAttribute("id", "vraag"+i);
        if (Number.isInteger(correctAntwoorden[i])){
            document.getElementsByTagName("INPUT")[i].setAttribute("type", "number");
        }
        //vragen worden gegenereed
    }
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Check Antwoorden";
    document.body.appendChild(btn);
    document.getElementsByTagName("BUTTON")[0].setAttribute("onclick", "checkAntwoord()");
    //Knop wordt gegenereed
}

function checkAntwoord(){
    for (i=0; i<vraagAntwoorden.length; i++){
        document.getElementById("vraag"+i).style.backgroundColor = "white";
        //Kleuren worden gereset
    }
    for (i=0; i<vraagAntwoorden.length; i++){
        pushing = document.getElementById("vraag"+i).value;
        antwoorden.push(pushing);
        //Ik zet hier de gegeven antwoorden in een array met de hulp van een loop, om later te cheken
    }
    for (y=0; y<vraagAntwoorden.length; y++){
        if(Array.isArray(correctAntwoorden[y]) ){
            for(x=0; x<correctAntwoorden[y].length; x++){
                var arrayAntwoord = antwoorden[y].split(", ");
                if(correctAntwoorden[y][x]==arrayAntwoord[x]){
                    document.getElementById("vraag"+y).style.backgroundColor = "green";
                    correct++;
                }
                //er wordt gekeken of het een array is zo ja wordt deze gebruikt en wordt het antwoord nagekeken, en er wordt een variable geplust als ie goed is
            }
        }
        else if(correctAntwoorden[y] == antwoorden[y]){
            document.getElementById("vraag"+y).style.backgroundColor = "green";
            correct++;
        }
        //hier worden de antwoorden gecontroleerd, en er wordt een variable geplust als ie goed is.
    }
    document.getElementById("resultaat").innerHTML = correct + " Punten"
    //hier worden de resultaten geprint.
    antwoorden = [];
    correct = 0;
    //variablen worden gerest.
}
