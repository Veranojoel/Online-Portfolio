import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="page-content contact-page">
      <section className="section">
        <h1>Get in Touch</h1>
        <p className="section-subtitle">Let's discuss your next project</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <strong>Email:</strong>
              <p>your.email@example.com</p>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <p>Your City, Country</p>
            </div>
            <div className="contact-item">
              <strong>Social:</strong>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
