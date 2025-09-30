import React from "react";
import Scene from "./Scene";

export default function App() {
  return (
    <div className="container">
      <nav className="nav">HARSH SINGH — Social Media Manager</nav>
      <section className="hero">
        <Scene />
        <div className="overlay">
          <h1>Hi — I'm <strong>HARSH</strong></h1>
          <p>I help brands grow with content, campaigns & AI-powered social media.</p>
        </div>
      </section>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project"><strong>Instagram Growth Campaign</strong><br/><small>Case study • +120% followers</small></div>
          <div className="project"><strong>Content Calendar System</strong><br/><small>Templates & processes</small></div>
          <div className="project"><strong>Paid Ads Case Study</strong><br/><small>ROAS 4.2</small></div>
        </div>
      </section>
    </div>
  );
}
