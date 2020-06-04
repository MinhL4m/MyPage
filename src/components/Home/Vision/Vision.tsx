import React from 'react';
import './vision.css';

export const Vision: React.FC<{}> = () => {
	return (
		<section className="home-vision">
			<h1 className="section-header">Vision</h1>
			<p className="center vision-para">
				Knowing the struggle that juniors are facing, I decided to share what I learnt through series of blogs.
				Through those blogs, I will share both technical and soft skill that I learnt. For the technical side, I
				will most focus on website development. I will share with you, what I learnt from side projects and
				group projects, what is the problem I faced and how I solve it. I hope that we will have a good run.
			</p>
			<img
				id="rellex-1"
				className="rellax rellax3"
				src="https://img.icons8.com/plasticine/100/000000/react.png"
				alt="react"
			/>
			<img
				id="rellex-2"
				className="rellax rellax3"
				src="https://img.icons8.com/color/96/000000/javascript.png"
				alt="javascript"
			/>
			<img
				id="rellex-3"
				className="rellax rellax1"
				src="https://img.icons8.com/color/80/000000/css3.png"
				alt="css3"
			/>
			<img
				id="rellex-4"
				className="rellax rellax1"
				src="https://img.icons8.com/color/96/000000/nodejs.png"
				alt="nodejs"
			/>
		</section>
	);
};
