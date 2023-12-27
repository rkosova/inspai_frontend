import { useState } from 'react'
import Heading from "./components/Header"
import GettingStartedGuide from './components/Guide';


const App = () => {

  const sectionOne = {
    heading: "Find Inspiration with the Power of AI!",
    text: "Upload images to find and create boards that match the same mood, style, or content as your original image."
  }

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

  
  
  return (
    <div>
      <Heading heading={sectionOne.heading} text={sectionOne.text}/>
      <GettingStartedGuide guideData={guideData}/>
    </div>
  )
}

export default App

