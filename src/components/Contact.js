import React, { useState } from 'react';
import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from 'react-icons/ri';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: RiPhoneFill,
      title: 'Phone Or Landline',
      lines: ['+525 782 7377 716', '+525 782 2272 292']
    },
    {
      icon: RiMailFill,
      title: 'Mail Or Query',
      lines: ['info@tamzyn.com', 'support@tamzyn.com']
    },
    {
      icon: RiMapPin2Fill,
      title: 'Located Or Nearby',
      lines: ['Calle 123, Colonia, Delegación, Ciudad, CP 12345', 'USA']
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container contact__container">
        <div className="header-text contact-header fade-up">
          <div className="small-card">Get in touch</div>
          <h3 className="title">Contact Us</h3>
        </div>

        <div className="contact__main-container">
          <div className="contact__row">
            <div className="contact__col left fade-up">
              <form onSubmit={handleSubmit} className="form" autoComplete="off">
                <div className="input-box">
                  <label htmlFor="name" className="text-label">Name*</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="email" className="text-label">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="message" className="text-label">Message*</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    cols="30"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="contact-btn">Submit Now</button>
              </form>
            </div>
            <div className="contact__col right fade-up">
              <div className="contact-image">
                <img src="/assets/images/contact-img.png" alt="Contact" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="contact__cards">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div className="contact__card fade-up" key={index}>
                  <Icon />
                  <h4>{info.title}</h4>
                  {info.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;