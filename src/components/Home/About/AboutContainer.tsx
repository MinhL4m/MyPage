import React, { useEffect } from "react";
import { About } from "./About";

let options = {
  root: null,
  rootMargin: "-10%",
  thresholds: 0.1,
};

/**
 * About Button
 */
const contactBtnHover = () => {
  const letters = document.getElementsByClassName("a");

  setTimeout(() => (letters[0].textContent = "D"), 200);
  setTimeout(() => (letters[1].textContent = "O"), 800);
  setTimeout(() => (letters[2].textContent = "W"), 400);
  setTimeout(() => (letters[3].textContent = "N"), 500);
  setTimeout(() => (letters[4].textContent = "L"), 700);
  setTimeout(() => (letters[5].textContent = "O"), 300);
  setTimeout(() => (letters[6].textContent = "A"), 600);
  setTimeout(() => (letters[7].textContent = "D"), 400);
  setTimeout(() => (letters[8].textContent = ""), 100);
};

const contactBtnOut = () => {
  const letters = document.getElementsByClassName("a");

  setTimeout(() => (letters[0].textContent = "M"), 200);
  setTimeout(() => (letters[1].textContent = "Y"), 800);
  setTimeout(() => (letters[2].textContent = " "), 400);
  setTimeout(() => (letters[3].textContent = "R"), 500);
  setTimeout(() => (letters[4].textContent = "E"), 700);
  setTimeout(() => (letters[5].textContent = "S"), 300);
  setTimeout(() => (letters[6].textContent = "U"), 600);
  setTimeout(() => (letters[7].textContent = "M"), 400);
  setTimeout(() => (letters[8].textContent = "E"), 100);
};

export const AboutContainer: React.FC<{}> = () => {
  useEffect(() => {
    var svg = document.querySelector(".self-img");
    let callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          svg?.classList.add("appear-self-img");
        } else {
          svg?.classList.remove("appear-self-img");
        }
      });
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector(".home-about") as Element);
    document
      .querySelector(".about-btn")
      ?.addEventListener("mouseenter", contactBtnHover);
    document
      .querySelector(".about-btn")
      ?.addEventListener("mouseleave", contactBtnOut);

    return () => {
      document
        .querySelector(".about-btn")
        ?.removeEventListener("mouseenter", contactBtnHover);
      document
        .querySelector(".about-btn")
        ?.removeEventListener("mouseleave", contactBtnOut);
    };
  }, []);

  return (
    <>
      <About />
    </>
  );
};
