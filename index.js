var fortnite = false;
anime()

function anime() {
    if(fortnite){
        document.querySelector("h1").style.color = "yellow";
        fortnite= false;
    }
    else{
        document.querySelector("h1").style.color = "green";
        fortnite = true;
    }
}

setInterval(anime, 100);
