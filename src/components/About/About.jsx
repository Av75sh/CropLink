import AboutHero from './AboutHero';
import StatCard from './StatCard';
import farmImage from '../../assets/farmer4.png';

import farmImage1 from '../../assets/about-f111.jpeg';
import farmImage2 from '../../assets/about-f21.jpeg';
import farmImage3 from '../../assets/about-f31.jpeg';


export default function About() {
  const stats = [
    {
      title: '30+ Days',
      subtitle: 'Influencing Digital Aspects',
      description: 'Together',
    },
    {
      title: '21+ Projects',
      subtitle: 'Excellence Achieved Through',
      description: 'Success',
    },
    {
      title: '26+ Awards',
      subtitle: 'Our Dedication to Innovation',
      description: 'Wins Understanding',
    },
    {
      title: '99% Happy Farmers',
      subtitle: 'Mirrors our Focus on our Farmer',
      description: 'Satisfaction',
    },
  ];


  const features = [
    'Innovative solutions for farming challenges',
    'Commitment to sustainable practices',
    'Empowering communities globally',
    'Building resilience for the future',
  ];

  return (
    <>
      <section className="hero1-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="subtitle text-green-700">A little about us</span>
            <h1 className="title">Empowering Communities Together</h1>
            <p className="description">
              the creation of environments where everyone has the opportunity to thrive.
              This approach not only promotes individual success but also contributes to
              the overall resilience and cohesion of society.
            </p>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
           
          </div>
          <div className="hero-images">
            <div className="image-grid">
              <img
                src={farmImage3}
                alt="Team collaboration"
                className="hero-image image-1"
              />
              <img
                src={farmImage2}
                alt="Professional at work"
                className="hero-image image-2"
              />
              <img
                src={farmImage1}
                alt="Office environment"
                className="hero-image image-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="content-wrapper">
          <div className="about-container">
            <div className="about-content">
              <AboutHero />
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    title={stat.title}
                    subtitle={stat.subtitle}
                    description={stat.description}
                  />
                ))}
              </div>
            </div>
            <div className="about-image">
              <img
                src={farmImage}
                alt="Team collaboration"
                className="team-image mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
