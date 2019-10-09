var lazeez = false;
var osmows = false;
anime()


function anime() {
    if(lazeez){
        document.querySelector("h1").style.color = "orange";
        lazeez= false;
    }
    else{
        document.querySelector("h1").style.color = "black";
        lazeez = true;
    }
}
let gibstick = document.querySelectorAll("#kpop p")
function anime2() {
    if(osmows){
        gibstick.forEach((leakytransistor) => {
            leakytransistor.style.color = "orange";
        })
        osmows= false;
    }
    else{
        gibstick.forEach((leakytransistor) => {
            leakytransistor.style.color = "black";
        })
        osmows = true;
    }
}
anime2()

setInterval(anime, 100);
setInterval(anime2, 50)