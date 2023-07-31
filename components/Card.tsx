const Card = props => {
  return (
    <div className='card my-2'>
      <div className='card-body'>
        <div className='card-title'>{props.title}</div>
        <div className='card-text'>{props.text}</div>
      </div>
    </div>
  );
};

export default Card;
