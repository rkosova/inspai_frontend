import Heading from "../components/Header"
import GettingStartedGuide from '../components/Guide';
import Information from '../components/Info';
import TrainSection from '../components/Train';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import { useState } from 'react'

const Home =()=> {
    const [uploadedImage, setUploadedImage] = useState(null);
  
    //Reset button for the image?
    const handleImageUpload = async (event) => {
      const file = event.target.files[0];
  
      // Simulate uploading to a server (you can replace this with an actual API call in the future)
      // For now, just set the uploaded image for testing purposes
      setUploadedImage(URL.createObjectURL(file));
  
      // Simulate AI processing (replace this with actual AI integration)
  
      //Simulate searching with AI
      await handleGenerateClick(file)
      
    };
    
    const handleGenerateClick = async (imageFile) => {
      if (uploadedImage){
      // Simulate asynchronous AI processing 
      console.log(imageFile)
      console.log('Simulating AI processing...');
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second delay
  
      // Log the result (replace with actual handling when AI integration is ready)
      console.log('AI processing complete. Result:', imageFile.name);
      } else  {"Please upload"}
    };
  
  const handleTrainClick = () => {
    //Future AI training logic will be implemented here
    console.log("Training..")
  }
  
  
  //VARIABLES FOR PLAIN TEXT
    //This is for the first parts of the website Header.jsx
    const sectionOne = {
      heading: "Find Inspiration with the Power of AI!",
      text: "Upload  or content",
      note: "Login or create account for limitless usage."
    }
  
    //This is for the user guide Guide.jsx
    const guideData = {
      title: "Getting Started Guide",
      instructions: [
        {
          id: 1,
          title: "Drag and drop an image or click <strong>+</strong> sign to upload.",
          
        },
        {
          id: 2,
          title: "Click the 'Generate' button.",
          
        },
        {
          id: 3,
          title: "Explore vityle.",
          
        },
      ]
    };
  
  
  // This is for the information about our model Info.jsx
    const contentData = {
      howItWorks: {
        heading: 'How Does It Work?',
        text: 'Our intuitive image search fge to provide viilar results.'
      },
      similarStyles: {
        heading: 'Explore Similar Styles',
        text: 'Results are based on visual yle. Enjoy discov images that resonate with your unique taste.'
      },
      optimizeStyle: {
        heading: "Optimize Your Uploads",
        text: "For optimal results, use Accepted formats: JPEG, PNG. Max file size: 5MB."
      }
      
    };
  // These are for the training part Train.jsx
  const trainStepsData = {
    heading: 'Train Our AI Model Here',
    text: "By contribyles help train the model to recognize a diverse range of visual elements",
    steps: [
      { id: 1, step: 'Drag and drop or Upload an image that showcases a unique style.' },
      { id: 2, step: 'Press “Train” button to train our model' },
    ],
  };

  
  return (
    <div>
    <NavBar/>

      <div className='main'>
      <Heading heading={sectionOne.heading} text={sectionOne.text} note={sectionOne.note}/>

      <div className='guide'>
        <GettingStartedGuide guideData={guideData}/>
      </div>
      
      <div className={`handle-upload ${uploadedImage ? 'uploaded' : ''}`}>
      <label className='card'>
        <input type="file" onChange={handleImageUpload} />
        <i className="fa-solid fa-plus"></i>
      </label>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
    </div>

      <div className='search-button'>
      <button className="search" onClick={handleGenerateClick}>Search</button>
      </div> 

      <div className='info-section'>
      {Object.keys(contentData).map((key) => (
        <Information key={key} {...contentData[key]} />
      ))}
      </div>

      <div className='train-section'>

      <TrainSection 
      heading={trainStepsData.heading}
       text={trainStepsData.text}
      trainStepsData={trainStepsData}
      />
      <div className='train-upload'>
      <div className={`handle-upload2 ${uploadedImage ? 'uploaded' : ''}`}>
      <label className='card2'>
        <input type="file" onChange={handleImageUpload} />
        <i className="fa-solid fa-plus"></i>
      </label>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
    </div>
    
       
    <div className={`handle-upload3 ${uploadedImage ? 'uploaded' : ''}`}>
      <label className='card3'>
        <input type="file" onChange={handleImageUpload} />
        <i className="fa-solid fa-plus"></i>
      </label>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
    </div>
    </div>

      <div className='train-button'>
      <button className="train" onClick={handleTrainClick}>Train</button>
      </div>
      </div>

      </div>
      <Footer />

    </div>
  )
}



export default Home;


