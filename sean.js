function s1(){
    var s1 = "Random Number Generator"
    document.getElementById("s2").innerHTML= s1;
    var minnumber = document.getElementById("s4").value;
    var maxnumber = document.getElementById("s5").value;
    var randomnumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("s2").innerHTML += "<br>";
    document.getElementById("s2").innerHTML += randomnumber;
}
function s2(){
    document.getElementById("s2").innerHTML= "";
}