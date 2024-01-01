import { useState } from 'react'
import NavBar from './components/Navbar';
import Heading from "./components/Header"
import GettingStartedGuide from './components/Guide';
import Information from './components/Info';
import TrainSection from './components/Train';
import Footer from './components/Footer';


const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  

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
    // Simulate asynchronous AI processing (e.g., waiting for a response)
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
    text: "Upload images to find and create boards that match the same mood, style, or content as your original image."
  }

  //This is for the user guide Guide.jsx
  const guideData = {
    title: "Getting Started Guide",
    instructions: [
      {
        id: 1,
        title: "Step 1: Drag and drop an image or click <strong>+</strong> sign to upload.",
        
      },
      {
        id: 2,
        title: "Step 2: Click the 'Generate' button.",
        
      },
      {
        id: 3,
        title: "Step 3: Explore visually similar images based on style.",
        
      },
      {
        id: 4,
        title: "<strong>Note</strong> Login or create account for limitless usage."
      }

    ]
  };


// This is for the information about our model Info.jsx
  const contentData = {
    howItWorks: {
      heading: 'How Does It Work?',
      text: 'Our intuitive image search feature analyzes the colors, composition, and style of your uploaded image to provide visually similar results.'
    },
    similarStyles: {
      heading: 'Explore Similar Styles',
      text: 'Results are based on visual similarities such as color palette, composition, and overall style. Enjoy discovering new images that resonate with your unique taste.'
    },
    optimizeStyle: {
      heading: "Optimize Your Uploads",
      text: "For optimal results, use high-quality images with clear style elements. Accepted formats: JPEG, PNG. Max file size: 5MB."
    }
    
  };
// These are for the training part Train.jsx
const trainStepsData = {
  heading: 'Train Our AI Model Here',
  text: 'By contributing your images, you play a vital role in enhancing the capabilities of our AI. Your unique styles help train the model to recognize a diverse range of visual elements',
  steps: [
    { id: 1, step: 'Step 1: Drag and drop or Upload an image that showcases a unique style.' },
    { id: 2, step: 'Step 2: Press “Train” button to train our model' },
  ],
};


  
  
  return (
    <div>
    
      <NavBar/>
      <div className='main'>
      <Heading heading={sectionOne.heading} text={sectionOne.text}/>
      
      <div className='guide'><GettingStartedGuide guideData={guideData}/></div>
      

      <div className='handle-upload'>
      <input type="file" onChange={handleImageUpload} />
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
      
      <button onClick={handleGenerateClick}>Search</button>
      </div>

      

      {Object.keys(contentData).map((key) => (
        <Information key={key} {...contentData[key]} />
      ))}

      <TrainSection 
      heading={trainStepsData.heading}
       text={trainStepsData.text}
      trainStepsData={trainStepsData}
      />
      <button onClick={handleTrainClick}>Train</button>
      </div>
      <Footer />
        
    
 

    </div>
  )
}

export default App

