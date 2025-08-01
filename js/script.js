//Dichiarazione variabili generali, della rotazione della ruota, dell'alwaysWin e del resto
root = document.documentElement;
const alwaysWin = false;
var i, ul, li = [];

//Funzione per far girare la ruota
function roll(){
    //Controllo per verificare se abbia già girato o no
    if(document.getElementById("List").classList.contains("spin")){
        removeSpin();
        addSpin();
    }
    else{
        addSpin();
    }

    //Fix dallo standby
    document.getElementById("result").style.display = "none"; 
    document.getElementById("MyButton").disabled = true;
    document.getElementById("MyButton").classList.add("disabled");
    
    //Dichiarazioni variabili per la ruota
    ul = document.getElementById("List");
    li = ul.getElementsByTagName('li');

    //Controllo dell'alwaysWin
    if(alwaysWin == true) {
        i = 4;
        wheelSpin();
        document.getElementById("result").innerHTML = "🎉 2000€ 🎉";
    }
    else {
        //Ottenimento del valore casuale
        var ul, txtValue;
        i = Math.floor(Math.random() * li.length);
        wheelSpin();

        txtValue = (li[i].getElementsByTagName("p")[0]).innerText;

        //Output estetico personalizzato
        switch(txtValue){
            case "2000€":
                document.getElementById("result").innerHTML = "🎉💰 2000€ 💰🎉";
                break;
            case "Bancarotta":
                document.getElementById("result").innerHTML = "🥀 Bancarotta 🥀";
                break;
            case "Passa":
                document.getElementById("result").innerHTML = "🫴🫲 Passa 🫴🫲";
                break;
            default:
                document.getElementById("result").innerHTML = "💵 " + txtValue + " 💵";
        }
    }
}

//Funzione per la rotazione della ruota
function wheelSpin(){
    var indexCalc;
    indexCalc = (362 * 7) + 362 - (362 / ( li.length / ( i + 1) ));
    root.style.setProperty("--degr", indexCalc + "deg"); 
    wheelWait();
}

//Attesa per la funzione inferiore a questa
function wheelWait(){
    const waitAndReset = setTimeout(wheelReset, 10000);
}

//Funzione per lo sblocco del bottone e dell'ottenimento del risultato sotto
function wheelReset(){
    document.getElementById("MyButton").classList.remove("disabled");
    document.getElementById("MyButton").disabled = false;
    document.getElementById("result").style.display = "block"; 
}

//Funzione per far partire l'animazione della ruota
function addSpin(){
    document.getElementById("List").classList.add("spin");
}

//Funzione per far resettare la ruota per farla ripartire nell'ipotesi che sia stata fatta già girare
function removeSpin(){
    document.getElementById("List").classList.remove("spin");
    void document.getElementById("List").offsetWidth;
}