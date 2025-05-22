import React from 'react';
import { Header } from './Header';
import { MyButton } from './MyButton';

import './Posting.css';

function Posting() {
    return (
        <div className="posting">
            <Header/>
            <div className ='postContent'>
            <div className='postContainer'>
                <img src='image.png' alt='No Image'/>
                <div className='postTitle'>
                    <h2>Title</h2>
                    <p>날짜</p>
                </div>
                <div className='postDescription'>
                    {/* <p>내용</p>  */}
                </div>
            </div>

            <div className='Postbuttons'>
                <MyButton label='Delete Post'/>
                <MyButton label='Edit Post'/>
            </div>
            </div>
        </div>
    )
}

export default Posting;