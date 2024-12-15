import GetImages from "./GetImages";
export default async function GameCards(length) {
  const cards = await GetImages(0, length);
  const CardsArray = [];
  cards.forEach((card) => {
    //Cards are like this:
    //card0 for image, card1 for read.unread, card2 for name
    let flag = [card[0], 0, card[1]];
    CardsArray.push(flag);
  });
  return CardsArray;
}
