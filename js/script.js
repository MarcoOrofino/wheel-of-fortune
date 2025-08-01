root = document.documentElement;
const alwaysWin = true;
var i, ul, li = [];

function roll(){
    if(document.getElementById("List").classList.contains("spin")){
        removeSpin();
        addSpin();
    }
    else{
        addSpin();
    }
    document.getElementById("result").style.display = "none"; 
    document.getElementById("MyButton").disabled = true;
    document.getElementById("MyButton").classList.add("disabled");
    
    ul = document.getElementById("List");
    li = ul.getElementsByTagName('li');

    if(alwaysWin == true) {
        i = 4;
        wheelSpin();
        document.getElementById("result").innerHTML = "🎉 2000€ 🎉";
    }
    else {
        var ul, txtValue;
        i = Math.floor(Math.random() * li.length);
        wheelSpin();

        txtValue = (li[i].getElementsByTagName("p")[0]).innerText;

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

function wheelSpin(){
    var indexCalc;
    indexCalc = (362 * 7) + 362 - (362 / ( li.length / ( i + 1) ));
    root.style.setProperty("--degr", indexCalc + "deg"); 
    wheelWait();
}

function wheelWait(){
    const waitAndReset = setTimeout(wheelReset, 10000);
}

function wheelReset(){
    document.getElementById("MyButton").classList.remove("disabled");
    document.getElementById("MyButton").disabled = false;
    document.getElementById("result").style.display = "block"; 
}

function addSpin(){
    document.getElementById("List").classList.add("spin");
}

function removeSpin(){
    document.getElementById("List").classList.remove("spin");
    void document.getElementById("List").offsetWidth;
}