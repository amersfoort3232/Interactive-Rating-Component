var form = document.getElementById("form");
function submit() {
    event.preventDefault();
    var score = document.querySelector("input[name=selector]:checked").value;
    document.querySelector("#score").textContent = score;
    document.querySelector("form").style.display = "none";
    document.querySelector(".thankyou-container").style.display = "flex";
    return false;
};
form.addEventListener('submit', submit);

