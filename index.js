var lazeez = false;
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

setInterval(anime, 100);
