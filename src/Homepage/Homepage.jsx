import React, {useEffect} from 'react'
import './Homepage.css'
const Homepage = () => {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");

    const handleMouseEnter = (event) => {
      removeActiveClasses();
      event.target.classList.add("active");
    };

    panels.forEach((panel) => {
      panel.addEventListener("mouseenter", handleMouseEnter);
    });

    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []); 

  function removeActiveClasses() {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  return (
    <>
    <div className="Homepage">
      <div className="container">
      <div className="panel active" id='panel_act' >
        <h1>Religious Worship</h1>
      </div>
      <div className="panel" id='panel1' >
        <h1>Majestic Himalayan Peaks</h1>
        </div>
      <div className="panel" id='panel2'>
        <h1>Serene Lakes</h1>
      </div>
      <div className="panel" id='panel3' >
        <h1>Charming Hill Stations</h1>
      </div>
    </div>
    </div>
    </>
  )
}

export default Homepage
