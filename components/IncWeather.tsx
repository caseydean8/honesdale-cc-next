import Balancer from 'react-wrap-balancer';
const IncWeather = () => {
  return (
    <div className='inc-weather pt-1 mb-2'>
      <h4>
        <Balancer>
          Services are cancelled this Sunday due to inclement weather. Please be safe and we look
          forward to seeing you next week.
        </Balancer>
      </h4>
    </div>
  );
};

export default IncWeather;
