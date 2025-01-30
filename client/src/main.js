const gamesForm = document.getElementById("games-form");

function handleSubmitGamesForm(event) {
  event.preventDefault();

  const formData = new FormData(gamesForm);
  const games = formData.get("games");

  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(games),
  });
}

gamesForm.addEventListener("submit", handleSubmitGamesForm);
