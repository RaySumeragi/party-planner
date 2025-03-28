import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoryPlayer } from './App';

window.StoryWidget = {
  mount: (selector) => {
    const root = ReactDOM.createRoot(document.querySelector(selector));
    root.render(<StoryPlayer />);
  }
};