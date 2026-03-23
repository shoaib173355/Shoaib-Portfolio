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
                <h5>Insight view web</h5>
              </div>
              <h3>2023</h3>
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
                <h5>Business Analytics & Monitoring Platform</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Developed a scalable analytics dashboard to monitor business KPIs,
              user activity, and system metrics. Built reusable dashboard
              components including metric cards, dynamic charts, and advanced
              data tables. Implemented role-based access control for Admin,
              Manager, and Analyst users. Integrated REST APIs to fetch
              real-time analytics data and system monitoring metrics.
              Implemented filtering, sorting, pagination, and CSV export for
              large datasets. Optimized performance using lazy loading,
              memoization, and efficient state management with Redux Toolkit.
              Designed responsive UI layouts using Material UI to ensure
              seamless experience across devices.
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
        </div>
      </div>
    </div>
  );
};

export default Career;
