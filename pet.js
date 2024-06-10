let health = 100;
let happiness = 100;
let points = 0;



function updateStatus() {
    document.getElementById("health").textContent = health;
    document.getElementById("happiness").textContent = happiness;
    document.getElementById("points").textContent = points;
}

function feed() {
    health += 10;
    happiness += 5;
    points += 1;
    updateStatus();
}

function play() {
    health -= 5;
    happiness += 10;
    points += 2;
    updateStatus();
}

function groom() {
    health += 5;
    happiness += 5;
    points += 1;
    updateStatus();
}

updateStatus();

