import React from "react";
import { Porfolio } from "../../Porfolio/Porfolio";
import { Link } from "react-router-dom";

const porfolioList = [
  {
    img: process.env.PUBLIC_URL + "/asset/img/impreza.jpg",
    title: "Impreza",
    content: "landing page inspired by http://impreza.us-themes.com.",
    url: "https://minhl4m.github.io/Impreza/",
  },
  {
    img: process.env.PUBLIC_URL + "/asset/img/landing.jpg",
    title: "LandingPage",
    content:
      "landing page created by using React + TypeScript + SCSS. There are nice animations. Give it a shot",
    url: "https://github.com/MinhL4m/Hobby",
  },
  {
    img: process.env.PUBLIC_URL + "/asset/img/saigon.jpg",
    title: "Saigon",
    content: "landing page inspired by the beauty of my city.",
    url: "https://minhl4m.github.io/SaiGon/",
  },
];

interface PorfolioContainerProps {}

export const PorfolioContainer: React.FC<PorfolioContainerProps> = ({}) => {
  return (
    <section className="home-pofolio">
      <h1 className="section-header">Porfolio</h1>
      <div className="row">
        <Porfolio porfolioList={porfolioList} />
      </div>

      <div style={{ textAlign: "center" }}>
        <Link to="/porfolio">Want To See More?</Link>
      </div>
    </section>
  );
};
