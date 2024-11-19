import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { socialLinks } from '../data/socialLinks';
import Poster from '../../assets/images/Poster.png'; // Importing the poster image

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Poster */}
          <div className="flex justify-center">
            <img
              src={Poster} // Using the imported poster image
              alt="Poster"
              className="max-w-full"
            />
          </div>

          {/* Form Section */}
          <div>
            <div className="flex justify-center gap-6 mb-8">
              <a href={socialLinks.github} className="btn btn-ghost btn-circle">
                <Github size={24} />
              </a>
              <a href={socialLinks.linkedin} className="btn btn-ghost btn-circle">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${socialLinks.email}`} className="btn btn-ghost btn-circle">
                <Mail size={24} />
              </a>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
