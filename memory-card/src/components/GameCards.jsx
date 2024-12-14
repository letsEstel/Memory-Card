import GetImages from "./GetImages";
export default async function GameCards(length) {
  const cards = await GetImages(0, length);
  const CardsArray = [];
  cards.forEach((card) => {
    let flag = [card, 0];
    CardsArray.push(flag);
  });
  console.log(CardsArray);
  return CardsArray;
}
