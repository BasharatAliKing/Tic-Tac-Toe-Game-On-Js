function myfunc() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'X' || b3 == 'x')) {
        document.getElementById('print').innerHTML = "Player 1 Won Congrats !";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 1 Win Congrats !")
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'X' || b7 == 'x')) {
        document.getElementById('print').innerHTML = "Player 1 Won Congrats !";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 1 Win Congrats !")
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'X' || b8 == 'x')) {
        document.getElementById('print').innerHTML = "Player 1 Won Congrats !";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 1 Win Congrats !")
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'X' || b9 == 'x')) {
        document.getElementById('print').innerHTML = "Player 1 Won Congrats !";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 1 Win Congrats !")
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'X' || b9 == 'x')) {
        document.getElementById('print').innerHTML = "Player 1 Won Congrats !";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert("Player 1 Win Congrats !")
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'X' || b7 == 'x')) {
        document.getElementById('print').innerHTML = "Player 1 Won Congrats !";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 1 Win Congrats !")
    }

    // Player 2 winner coding start here

    else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        document.getElementById("print").innerHTML = "Player 2 Win Congrats !!";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 2 (0) Win Congrats!!");
    }
    else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        document.getElementById("print").innerHTML = "Player 2 Win Congrats !!";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 2 (0) Win Congrats!!");
    }
    else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
        document.getElementById("print").innerHTML = "Player 2 Win Congrats !!";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        window.alert("Player 2 (0) Win Congrats!!");
    }
    else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
        document.getElementById("print").innerHTML = "Player 2 Win Congrats !!";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 2 (0) Win Congrats!!");
    }
    else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
        document.getElementById("print").innerHTML = "Player 2 Win Congrats !!";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 2 (0) Win Congrats!!");
    }
    else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
        document.getElementById("print").innerHTML = "Player 2 Win Congrats !!";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert("Player 2 (0) Win Congrats!!");
    }
    else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
        document.getElementById("print").innerHTML = "Player 2 Win Congrats !!";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert("Player 2 (0) Win Congrats!!");
    }
    else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
        document.getElementById("print").innerHTML = "Player 2 Win Congrats !!";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("Player 2 (0) Win Congrats!!");
    }
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0') && (b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') && (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById("print").innerHTML = "Match Tie";
        window.alert("Match tie");
    }
    else {
   
        // Here, Printing Result
        if (king == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

king = 1;
function myfunc_1() {
    if (king == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        king = 1;
    }
}

function resetfunc() {
    location.reload();
    document.getElementById("b1").value = " ";
    document.getElementById("b2").value = " ";
    document.getElementById("b3").value = " ";
    document.getElementById("b4").value = " ";
    document.getElementById("b5").value = " ";
    document.getElementById("b6").value = " ";
    document.getElementById("b7").value = " ";
    document.getElementById("b8").value = " ";
    document.getElementById("b9").value = " ";
    document.getElementById("print").innerHTML=" ";
}
function myfunc_2() {
    if (king == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        king = 1;
    }
}
function myfunc_3() {
    if (king == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        king = 1;
    }
}
function myfunc_4() {
    if (king == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        king = 1;
    }
}
function myfunc_5() {
    if (king == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        king = 1;
    }
}
function myfunc_6() {
    if (king == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        king = 1;
    }
}
function myfunc_7() {
    if (king == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        king = 1;
    }
}
function myfunc_8() {
    if (king == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        king = 1;
    }
}
function myfunc_9() {
    if (king == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        king = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        king = 1;
    }
}