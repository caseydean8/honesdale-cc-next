interface CardValues {
  title: String;
  text: String;
  children: React.ReactNode;
}

const Card = (card: CardValues) => {
  return (
    <div className='card my-2'>
      <div className='card-body'>
        <div className='card-title'>{card.title}</div>
        <div className='card-text'>{card.text}</div>
        {card.children}
      </div>
    </div>
  );
};

export default Card;
