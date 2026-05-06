// rendering the like button and api call component in the app.jsx file

import React from 'react';
import LikeEmoji from './COMPONENTS/LikeEmoji';
import ApiCall from './COMPONENTS/ApiCall';

const App = () => {
  return (
    <div>
        <h1>Practical Questions</h1>    
        <h2>Question 1: Like Button</h2>
        <LikeEmoji />
        <h2>Question 2: API Call</h2>
        <ApiCall />
    </div>
  );
};

export default App;
