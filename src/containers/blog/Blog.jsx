import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Some amazing facts about voting.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Apr 25 2023" text="Experience the benefits of modern technology in the voting booth with our cutting-edge online system." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Apr 25 2023" text="Maximize voter participation and engagement with our innovative online voting solution." />
        <Article imgUrl={blog03} date="Apr 25 2023" text="Join the decentralized movement and build a better future with blockchain." />
        <Article imgUrl={blog04} date="Apr 25 2023" text="Democracy is not a spectator sport - get in the game and vote!" />
        <Article imgUrl={blog05} date="Apr 25 2023" text="Don't let others decide your future - vote for yourself!" />
      </div>
    </div>
  </div>
);

export default Blog;
