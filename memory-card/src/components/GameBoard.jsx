import { useEffect, useState } from "react";
import GameCards from "./GameCards";
export default function GameBoard() {
  const [score, setScore] = useState(0);
  const [card, setCard] = useState([]);
  const [highest, setHighest] = useState(0);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    async function loadCards() {
      const cardsData = await GameCards(9);
      setCard(cardsData);
      setLoad(false);
    }
    loadCards();
  }, []);

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  function clickPic(pic, event) {
    event.currentTarget.blur();
    if (pic[1] == 0) {
      setScore(score + 1);
      if (score >= highest) {
        setHighest(score + 1);
      }
      setCard(
        card.map((car) => {
          if (car == pic) {
            //let it be read
            car[1] = 1;
            return car;
          } else return car;
        })
      );
      let newCard = card;
      shuffleArray(newCard);
      setCard(newCard);
    } else {
      setScore(0);
      setCard(
        card.map((car) => {
          return [car[0], 0];
        })
      );
    }
  }
  if (load) return <h1>Loading</h1>;
  else {
    return (
      <>
        <h1>Score {score}</h1>
        <h1>Highest {highest}</h1>
        <ul>
          {card.map((pic) => (
            <li
              key={pic[0]}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") clickPic(pic, e);
              }}
            >
              <img
                src={`${pic[0]}`}
                alt={pic[2]}
                onClick={(e) => clickPic(pic, e)}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
