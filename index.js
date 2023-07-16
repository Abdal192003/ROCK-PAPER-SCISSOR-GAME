var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1 * 3) + 1;
var randomImg1="image/img"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg1);


var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2 * 3) + 1;
var randomImg2="image/img"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

// Decision Making

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent="Player 2 Wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}