import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <div className="content-section">
      <h2 className="section-title">Courses We Offer</h2>
      <div className="card-container">
        <div className="card-row" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: '1 1', margin: '20px' }}>
            <h3 className="card-title">Web Development</h3>
            <p className="card-description">
              Learn how to build modern websites using HTML, CSS, and JavaScript. Master the skills to become a web developer.
            </p>
            <button className="card-button">Learn More</button>
          </div>

          <div className="card" style={{ flex: '1 1', margin: '20px' }}>
            <h3 className="card-title">Data Science</h3>
            <p className="card-description">
              Dive into data analysis, machine learning, and statistical modeling to become proficient in data science.
            </p>
            <button className="card-button">Learn More</button>
          </div>

          <div className="card" style={{ flex: '1 1', margin: '20px' }}>
            <h3 className="card-title">Cybersecurity</h3>
            <p className="card-description">
              Protect systems and networks. Learn essential cybersecurity skills to secure digital assets.
            </p>
            <button className="card-button">Learn More</button>
          </div>
        </div>

        <div className="card-row" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: '1 1', margin: '20px' }}>
            <h3 className="card-title">Artificial Intelligence</h3>
            <p className="card-description">
              Explore the world of AI, from neural networks to deep learning. Gain hands-on experience in building AI models.
            </p>
            <button className="card-button">Learn More</button>
          </div>

          <div className="card" style={{ flex: '1 1', margin: '20px' }}>
            <h3 className="card-title">Cloud Computing</h3>
            <p className="card-description">
              Learn about cloud services, deployment models, and how to manage scalable cloud-based applications.
            </p>
            <button className="card-button">Learn More</button>
          </div>

          <div className="card" style={{ flex: '1 1', margin: '20px' }}>
            <h3 className="card-title">UI/UX Design</h3>
            <p className="card-description">
              Master user experience and interface design. Create intuitive and visually appealing digital products.
            </p>
            <button className="card-button">Learn More</button>
          </div>
        </div>
      </div>
     </div>
  );
};

export default ContentSection;

