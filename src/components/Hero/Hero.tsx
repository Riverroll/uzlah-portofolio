import React from 'react';
import profilePic from '../../assets/images/ProfilePic.jpg';
import cvFile from '../../assets/CV_Nauval_Uzlah.pdf';
import TypingAnimation from '../animation/Typing';

export const Hero: React.FC = () => {
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

  return (
    <section id="hero" className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-8 pt-1">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Column - Profile Information */}
          <div className="text-center md:text-left">
            <div className="avatar mb-6">
              <div className="w-32 md:w-48 lg:w-56 rounded-full ring ring-primary ring-offset-2">
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
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