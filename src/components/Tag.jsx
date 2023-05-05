import React, { useState } from 'react';
import useGif from './useGif';

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const { gif, fetchGif } = useGif(tag);
    
    return (
        <div className='container'>
            <h1>Random {tag} Gif</h1>
            <div className='img-container' >
                <img src={gif} alt="Random Gif" width={250} />
            </div>
            <h2>Search gif:</h2>
            <label aria-label='Write down a category of a gif' ><input value={tag} onChange={(e) => setTag(e.target.value)} type="text" /></label>
            <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag