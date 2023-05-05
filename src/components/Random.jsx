import React from 'react';
import useGif from './useGif';

const Tag = () => {
    const { gif, fetchGif } = useGif();

    return (
        <div className='container'>
            <h1>Random Gif</h1>
            <div className='img-container' >
                <img src={gif} alt="Random Gif" width={250} />
            </div>
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag