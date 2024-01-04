
const TrainSection = ({ heading, text, trainStepsData }) => {
    return (
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
        <ol>
          {trainStepsData.steps.map(trainstep => (
            <li key={trainstep.id}>
              <p>{trainstep.step}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  };
  
  export default TrainSection;
  