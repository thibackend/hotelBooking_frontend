import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero">
        <h1>About Us</h1>
        <p>Welcome to our hotel booking website!</p>
      </section>

      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <p>At HotelBooking, we believe that travel is a transformative experience. Our journey started with a simple idea: to make it easy for people to find and book the perfect hotel for their trip. With our passion for travel and dedication to customer satisfaction, we have grown into one of the leading hotel booking platforms in the industry.</p>
          <div className="hotel-images">
            <img src="https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?size=626&ext=jpg&ga=GA1.1.760094843.1687339403&semt=ais" alt="Hotel 1" />
            <img src="https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg?size=626&ext=jpg&ga=GA1.1.760094843.1687339403&semt=ais" alt="Hotel 2" />
            <img src="https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18726.jpg?size=626&ext=jpg&ga=GA1.1.760094843.1687339403&semt=ais" alt="Hotel 3" />
          </div>
        </div>
      </section>

      <section className="meet-the-team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="member">
              <img src="https://www.shutterstock.com/image-photo/developing-new-ideahandsome-successful-businessman-260nw-1304114191.jpg" alt="Member 1" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="member">
              <img src="https://media.gettyimages.com/id/996979796/photo/handsome-businessman-using-laptop.jpg?s=612x612&w=gi&k=20&c=W7oPWUhjlH5bDT1vJ5Mdiyi3JbRqfi3OO5Zs-n9NI6w=" alt="Member 2" />
              <h3>Jane Smith</h3>
              <p>Head of Operations</p>
            </div>
            <div className="member">
              <img src="https://ak.picdn.net/offset/photos/58b9c4f417fb156e48054cde/medium/photo.jpg" alt="Member 3" />
              <h3>Michael Johnson</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className="member">
              <img src="https://www.shutterstock.com/image-photo/serious-young-handsome-businessman-holding-260nw-439342054.jpg" alt="Member 3" />
              <h3>Michael Johnson</h3>
              <p>Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
