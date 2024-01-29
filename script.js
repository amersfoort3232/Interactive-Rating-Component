var form = document.getElementById("form");

function submit(event) {
    event.preventDefault();
    var score = document.querySelector("input[name='selector']:checked").value;
    document.querySelector("#score").textContent = score;
    document.querySelector("form").style.display = "none";
    document.querySelector(".thankyou-container").style.display = "flex";
};

document.getElementById("submit").addEventListener("click", submit);


