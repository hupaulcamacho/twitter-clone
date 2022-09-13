import React from 'react';
import "./Post.css";

import { Avatar, Button } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1559150975302209536/3CsJQBdz_400x400.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Hupaul Camacho {" "}
                            <span className='post__headerSpecial'>
                                <VerifiedUserIcon className="post__badge" />{" "}
                                @traplordhuey
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to make a Twitter clone with react</p>
                    </div>
                </div>
                <img src='https://i.kym-cdn.com/photos/images/original/001/013/244/d23.gif' alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default Post
