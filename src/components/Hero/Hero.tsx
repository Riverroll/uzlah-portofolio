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
    <section id="hero" className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-7 pt-1">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Column - Profile Information */}
          <div className="text-center md:text-left">
            <div className="avatar mb-6">
              <div 
                className={`w-32 md:w-48 lg:w-56 rounded-full ring ring-primary ring-offset-2 transform transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`} 
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">Nauval Uzlah</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Full Stack Developer | UI UX Designer | Data Analyst
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleDownloadCV}
              >
                Download CV
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={scrollToContact}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column - Typing Animation */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[500px] h-[600px] transform md:translate-x-4">
              <TypingAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
