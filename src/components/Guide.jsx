
const GettingStartedGuide = ({ guideData }) => {
  return (
    <div>
      <h2>{guideData.title}</h2>
      <ol>
        {guideData.instructions.map(instruction => (
          <li key={instruction.id}>
            <p dangerouslySetInnerHTML={{ __html: instruction.title }} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GettingStartedGuide;
