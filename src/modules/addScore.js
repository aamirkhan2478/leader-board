import { message, nameField, scoreField } from "./getElements.js";

class AddScore {
  addScore = async (e) => {
    e.preventDefault();
    const nameText = nameField.value;
    const scoreText = scoreField.value;
    try {
      const sendData = await fetch(
        "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RVLHmrTjFYooSfq9ZHuB/scores/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: nameText,
            score: parseInt(scoreText, 10),
          }),
        },
      );
      const { result } = await sendData.json();
      message.innerText = result;
      nameField.value = "";
      scoreField.value = "";
    } catch (error) {
      console.error(error.message);
    }

    setInterval(() => {
      message.style.display = "none";
    }, 2500);
  };
}

export default AddScore;
