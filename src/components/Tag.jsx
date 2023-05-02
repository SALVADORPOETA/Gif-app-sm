import React, { useState } from 'react';
import useGif from './useGif';

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const { gif, fetchGif } = useGif(tag);
    
    return (
        <div className='container'>
            <h1>Random {tag} Gif</h1>
            <img width="250" src={gif} alt="Random Gif" />
            <h2>Search gif:</h2>
            <input value={tag} onChange={(e) => setTag(e.target.value)} type="text" />
            <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag