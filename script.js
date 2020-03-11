const correctAntwoorden = ["Parijs", 
"8", 
"Ijselmeer", 
["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"], 
["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"] 
];

const vraagAntwoorden = ["wat is de hoofdstad van Frankrijk?", 
"hoe  veel poten hebben spinnen?",
"wat is het grootste meer in Nederland", 
"Noem een duits automerk" , 
"Noem een waddeneiland" 
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
    }
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Check Antwoorden";
    document.body.appendChild(btn);
    document.getElementsByTagName("BUTTON")[0].setAttribute("onclick", "checkAntwoord()");

}

function checkAntwoord(){
    for (i=0; i<vraagAntwoorden.length; i++){
        pushing = document.getElementById("vraag"+i).value;
        antwoorden.push(pushing);
        //Ik zet hier de gegeven antwoorden in een array met de hulp van een loop
    }
    for (y=0; y<vraagAntwoorden.length; y++){
        if(Array.isArray(correctAntwoorden[y]) ){
            for(x=0; x<correctAntwoorden[y].length; x++){
                if(correctAntwoorden[y][x].includes(antwoorden[y])){
                    document.getElementById("vraag"+y).style.backgroundColor = "green";
                    correct++;
                }
                //er wordt gekeken of het een array is zo ja wordt deze gebruikt.
            }
        }
        else if(correctAntwoorden[y] == antwoorden[y]){
            document.getElementById("vraag"+y).style.backgroundColor = "green";
            correct++;
        }
        //hier worden de antwoorden gecontroleerd, en er wordt een variable geplust als ie goed is
    }
    if (correct == vraagAntwoorden.length){
        document.getElementById("resultaat").innerHTML = "Alle antwoorden zijn goed"
    }
    else {
        document.getElementById("resultaat").innerHTML = "Niet alle antwoorden zijn goed"
    }
    //hier worden de resultaten geprint.
    antwoorden = [];
    correct = 0;
}
