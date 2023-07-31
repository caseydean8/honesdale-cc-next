interface Card {
  title: String;
  text: String;
}

const Card = (card: Card) => {
  return (
    <div className='card my-2'>
      <div className='card-body'>
        <div className='card-title'>{card.title}</div>
        <div className='card-text'>{card.text}</div>
      </div>
    </div>
  );
};

export default Card;
