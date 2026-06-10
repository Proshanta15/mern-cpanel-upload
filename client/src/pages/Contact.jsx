import { useState } from 'react';
import { useAuth } from '../store/auth.jsx';
import '../style/contact.css';

export default function Contact() {


  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: ''
  })

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email
    });
    setUserData(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      })
      if (response.ok) {
        setContact({
          username: '',
          email: '',
          message: ''
        })
        alert("Form submitted successfully");
      }

    } catch (error) {
      console.log(error)
    }


  }
  return (
    <main className="contact-page">
      <section className="contact-card">
        <div className="contact-copy">
          <p className="contact-tag">Contact Us</p>
          <h1>Let us discuss your next web project</h1>
          <p>
            Share your idea or requirement and we will get back to you with the
            best solution for your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              autoComplete="off"
              value={contact.username}
              onChange={(e) => setContact({ ...contact, username: e.target.value })}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message"
              autoComplete="off"
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}
