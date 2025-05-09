import React from 'react'
import LeftSection from '../LeftSection/leftSection'
import RightSection from '../RightSection/RightSection'
import { useEffect } from 'react';

function ChatMainComp() {
  const pictures = [ "/image1.jpg" , "/default.png" , "/image2.jpg" , "/image3.jpg" , "/image4.jpg" , "/image5.jpg" , "/image6.jpg" , "/image7.png" , "/image8.png" , "/image9.png" , "/image10.jpg" , "/image11.png" , "/image12.jpg" , "/image13.jpg" , "/image14.jpg" ]

  useEffect(() => {
    pictures.forEach((pic) => {
      const img = new Image();
      img.src = `${pic}`;
      img.onload = () => console.log("Image loaded")
    });
  }, []);
  return (
    <>
        <LeftSection pictures={pictures} />
        <RightSection />
    </>
  )
}

export default ChatMainComp
