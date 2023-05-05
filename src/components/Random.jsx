import React from 'react';
import useGif from './useGif';

const Tag = () => {
    const { gif, fetchGif } = useGif();

    return (
        <div width="250" className='container'>
            <h1>Random Gif</h1>
            <img src={gif} alt="Random Gif" />
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag