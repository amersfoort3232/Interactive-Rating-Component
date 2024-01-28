function submitScore() {
/*     const score = document.querySelector(".rank-container ul li.active").textContent;
    document.querySelector(".thankyou-container .score span").textContent = score; */
    document.getElementsByClassName("rank-container")[0].style.display = "none";
    document.getElementsByClassName("thankyou-container")[0].style.display = "flex";
}


function one(){
    document.getElementById("score").innerHTML = "1"
}

function two(){
    document.getElementById("score").innerHTML = "2"
}
function three(){
    document.getElementById("score").innerHTML = "3"
}
function four(){
    document.getElementById("score").innerHTML = "4"
}
function five(){
    document.getElementById("score").innerHTML = "5"
}
