import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Porfolio } from "./Porfolio";

const porfolioList = [
  {
    img: process.env.PUBLIC_URL + "/asset/img/impreza.jpg",
    title: "Impreza",
    content: "landing page inspired by http://impreza.us-themes.com.",
    url: "https://minhl4m.github.io/Impreza/",
  },
  {
    img: process.env.PUBLIC_URL + "/asset/img/vezorla.jpg",
    title: "Vezorla",
    content:
      "Oil Shopping Page created by using React + Spring + Mysql. This is Capstone Project for my graduation from SAIT.",
    url: "https://github.com/Vezorla",
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
  {
    img: process.env.PUBLIC_URL + "/asset/img/follow-cursor.jpg",
    title: "404 Follow Cursor",
    content:
      "eyes of 0 in 404 follow the cursor. This also a component of this website. Try add /404 at the end of the url.",
    url: "https://minhl4m.github.io/NotFoundPage/",
  },
  {
    img: process.env.PUBLIC_URL + "/asset/img/todo.jpg",
    title: "Todo App FullStack",
    content: "todo app created by using React+ TypeScript + Go + Mysql.",
    url: "https://github.com/MinhL4m/todo-Go-React-Mysql",
  },
];

export const PorfolioContainer: React.FC<{}> = () => {
  return (
    <>
      <div className="row">
        <Porfolio porfolioList={porfolioList} />
      </div>
      <div className="more">
        <p>
          Take a look into my &thinsp;
          <a href="https://github.com/MinhL4m">
            Github&nbsp;
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          .
        </p>
      </div>
    </>
  );
};
