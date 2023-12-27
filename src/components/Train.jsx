
const TrainSection = ({ heading, text, trainStepsData }) => {
    return (
      <div>
        <h4>{heading}</h4>
        <p>{text}</p>
        <ul>
          {trainStepsData.steps.map(trainstep => (
            <li key={trainstep.id}>
              <p>{trainstep.step}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TrainSection;
  