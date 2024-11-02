import React from 'react';
import './HomePage.css';

/**
 * HomePage component
 *
 * This component represents the home page of the test assignment project.
 * It displays a welcome message and a brief description.
 *
 * Project Info:
 * - This is a front-end project that utilizes the Star Wars API (SWAPI) to fetch and display data.
 *
 * @returns {JSX.Element} The rendered home page component.
 */
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-page-blur-box">
        <h1>Welcome to the Home Page</h1>
        <p>The project uses React and TypeScript to create a responsive and interactive user interface. It fetches data from the Star Wars API (SWAPI) and displays information about various Star Wars characters, planets, and starships.</p>
      </div>
    </div>
  );
};

export default HomePage;