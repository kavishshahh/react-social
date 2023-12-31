import React from 'react'
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";

export default function Post({ post }) {

    return (
        <div className='post'>
            <div className="postWrapper">
                {/* Top */}
                <div className="postTop">
                    {/* Top Left */}
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className='postUsername'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    {/* Top Right  */}
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>

                {/* Center  */}
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img className='postImg' src={post.photo} alt="" />
                </div>

                {/* Bottom  */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="./assets/like.png" alt="" />
                        <img className='likeIcon' src="./assets/heart.png" alt="" />
                        <span className="postLikeCounter">{post.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
