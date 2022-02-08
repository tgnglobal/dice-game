var refreshed = document.querySelector("#refresh");
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "images/dice" + randomNum1 + ".png";
var randomImg2 = "images/dice" + randomNum2 + ".png";
var player1 = document.querySelectorAll("img")[0].setAttribute("src", randomImg1);
var player2 = document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if (randomNum1 === randomNum2) {
    document.querySelector("h1").textContent = "Draw!";
}
else if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = '<img src="images/united-states-of-america.png" style="width: 5rem">'+ " " + "Player - 1 - Won";
}
else {
  document.querySelector("h1").innerHTML = "Player - 2 - Won" + " " +  '<img src="images/united-states-of-america.png" style="width: 5rem">';
}

refreshed.addEventListener("click", () => {
  var x = document.querySelectorAll("div")[6].classList[1];
  refreshKey(x)
});

document.addEventListener("keypress", function(e) {
  refreshKey(e.key)
})

function refreshKey(key) {
  switch (key) {
    case "r":
      refreshed.style.transform = "rotate(360deg)";
      refreshed.style.transition = "0.3s";
      location.reload();
      break;
    default: console.log(e);
  }
}
