// Question 5: Props and useState Interaction
// Create a `LikeButton` component. It should accept a `likeCount` prop, but internally manage the
// count using `useState`. Clicking the button should increase the like count.

import React, { useState } from 'react'

function LikeButtoon({like}) {
    const [likeCount, setlikeCount] = useState(like);

    function handleClick(){
        setlikeCount(likeCount+1);
    }
  return (
    <div>
        <label>like: {likeCount} </label>
        <button onClick={handleClick}> Click to Like</button>
    </div>
  )
}

export default LikeButtoon