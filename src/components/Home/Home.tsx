import React from 'react'
import { HeroContainer } from './Hero/HeroContainer'
import { AboutContainer } from './About/AboutContainer'
import { VisionContainer } from './Vision/VisionContainer'
import { BlogContainer } from './Blog/BlogContainer'

export const Home: React.FC<{}> = () => {
        return (
                <div>
                        <HeroContainer />
                        <AboutContainer />
                        <hr />
                        <VisionContainer />
                        <hr />
                        <BlogContainer />
                </div>
        );
}