import React, { useState } from 'react';
import profilePic1 from '../../assets/images/ProfilePic.jpg'; 
import profilePic2 from '../../assets/images/ProfilePic2.png';
import cvFile from '../../assets/CV_Nauval_Uzlah.pdf';
import TypingAnimation from '../animation/Typing';

export const Hero: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'CV_Nauval_Uzlah.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-4rem)] bg-base-200 flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto w-full py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Column - Profile Information */}
          <div className="text-center md:text-left">
            <div className="avatar mb-6 flex justify-center md:justify-start">
              <div 
                className={`w-32 md:w-40 lg:w-48 rounded-full ring ring-primary ring-offset-2 transform transition-transform duration-700 cursor-pointer ${flipped ? 'rotate-y-180' : ''}`} 
                onClick={handleFlip}
                style={{
                  perspective: '1000px',
                }}
              >
                {/* Front Side */}
                <img 
                  src={profilePic1} 
                  alt="Profile Front" 
                  className={`w-full h-full object-cover absolute backface-hidden`}
                />
                {/* Back Side */}
                <img 
                  src={profilePic2} 
                  alt="Profile Back" 
                  className={`w-full h-full object-cover absolute rotate-y-180 backface-hidden`}
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Nauval Uzlah</h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-400">
              Full Stack Developer | UI UX Designer | Data Analyst
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button 
                className="btn btn-primary"
                onClick={handleDownloadCV}
              >
                Download CV
              </button>
              <button 
                className="btn btn-outline"
                onClick={scrollToContact}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column - Typing Animation */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-full h-[400px] md:h-[450px] max-w-[450px]">
              <TypingAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;