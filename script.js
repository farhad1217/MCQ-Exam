const ans = ["A", "B", "C", "D", "D", "C", "B", "A", "B", "D"];
let total = ans.length;

function yesNO(qName){
    for(var i = 0; i < 4; i++){
        var x = qName + i;
        if(document.getElementById(x).checked)
            return document.getElementById(x).value;
    }
    return "E";
}

function score(){
    let scoree = 0;
    for(var i = 0; i<total; i++){
        let qName = "q" + (i + 1);
        if(yesNO(qName) === ans[i])
            scoree ++;
    }
    return scoree;
}

function checkResult(){
    document.getElementById("hh").innerHTML = "Your Score is " + score() + " out of " + total;
}