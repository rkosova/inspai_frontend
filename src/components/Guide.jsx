
const GettingStartedGuide = ({ guideData }) => {
  return (
    <div>
      <h2>{guideData.title}</h2>
      <ul>
        {guideData.instructions.map(instruction => (
          <li key={instruction.id}>
            <p dangerouslySetInnerHTML={{ __html: instruction.title }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GettingStartedGuide;
