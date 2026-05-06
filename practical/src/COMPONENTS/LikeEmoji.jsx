// practical question no. 01
// create a white heart like button and when we click on it, it should change to red heart and vice versa.

import React, { useState } from 'react';


const LikeEmoji = () => {
  const [liked, setLiked] = useState(false);
  const [users, setUsers] = useState([]);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
        <div>
            <button onClick={toggleLike} style={{ fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                {liked ? '❤️' : '🤍'}
            </button>
            <div>
                {users.map(user => (
                    <div key={user.id}>
                        <p>User: {user.name}</p>
                        <p>Website: {user.website}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// detail explanation of how we will run the code :

// 1. We will create a new file called LikeEmoji.jsx in the COMPONENTS folder.
// 2. We will import React and useState from the react library.
// 3. We will create a functional component called LikeEmoji.
// 4. We will use the useState hook function to create a state variable called liked and a function to update called setLiked. We will initialize liked to false.(it will remain white until clicked)
// 5. We will create a function called toggleLike that will toggle the value of liked when the button is clicked.
// 6. We will return a button element that displays a white heart emoji  when liked is false and a red heart emoji when liked is true. We will also add an onClick event handler to the button that calls the toggleLike function.
// 7. We will export the LikeEmoji component as the default export of the file.
// 8. we will render the file in app.jsx

export default LikeEmoji;