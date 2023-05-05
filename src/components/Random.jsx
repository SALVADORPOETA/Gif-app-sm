import React from 'react';
import useGif from './useGif';

const Tag = () => {
    const { gif, fetchGif } = useGif();

    return (
        <div className='container'>
            <h1>Random Gif</h1>
            <img src={gif} alt="Random Gif" style="max-width:250px;width:100%" />
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag