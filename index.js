let homeScore = 0;
let guestScore = 0;
let homeEl = document.getElementById("homeScore");
let guestEL = document.getElementById("guestScore");
homeEl.textContent = homeScore;
guestEL.textContent = guestScore;

//Home Points
function incrementHome(points) {
  homeScore += points;
  homeEl.textContent = homeScore;
  highlightLeader();
}

//Guest Points
function incrementGuest(points) {
  guestScore += points;
  guestEL.textContent = guestScore;
  highlightLeader();
}

//New Game
function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeEl.textContent = homeScore;
  guestEL.textContent = guestScore;
  homeEl.classList.remove("highlight");
  guestEL.classList.remove("highlight");
}

//Leader Highlight
function highlightLeader() {
  if (homeScore > guestScore) {
    homeEl.classList.add("highlight");
    guestEL.classList.remove("highlight");
  } else if (guestScore > homeScore) {
    guestEL.classList.add("highlight");
    homeEl.classList.remove("highlight");
  } else if ((guestScore = homeScore)) {
    homeEl.classList.remove("highlight");
    guestEL.classList.remove("highlight");
  }
}
