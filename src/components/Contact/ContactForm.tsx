import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <div className="form-control">
        <input type="text" placeholder="Name" className="input input-bordered" />
      </div>
      <div className="form-control">
        <input type="email" placeholder="Email" className="input input-bordered" />
      </div>
      <div className="form-control">
        <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
      </div>
      <button className="btn btn-primary w-full">Send Message</button>
    </form>
  );
};