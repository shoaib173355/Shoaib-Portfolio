import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Data Insight pvt ltd</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed and developed responsive user interfaces using React.js,
              Next.js, and Material UI for enterprise web applications. Built
              dynamic dashboards and reusable UI components to handle complex
              business workflows. Migrated a legacy React application to
              Next.js, resulting in approximately 30% improvement in page load
              speed and SEO performance. Integrated RESTful APIs to display
              real-time system metrics and business data. Optimized component
              rendering and Redux state management to reduce unnecessary
              re-renders and improve performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>School Website (Freelance) </h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and deployed a modern, responsive school website for
              Alif Creative School using React.js. The project focuses on
              delivering a clean UI, fast performance, and easy navigation for
              parents and students seeking admission information. Key features
              include a dynamic landing page, program overview, gallery
              showcase, career section, and contact functionality. The website
              is optimized for responsiveness across devices and structured for
              scalability. The application was built with React.js for
              component-based architecture, ensuring maintainable and reusable
              UI components. The project was deployed on Hostinger,
              demonstrating real-world experience in hosting, domain
              configuration, and production deployment.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
