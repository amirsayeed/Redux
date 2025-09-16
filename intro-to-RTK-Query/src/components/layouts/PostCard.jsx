import React from 'react';

const PostCard = ({post}) => {
    return (
        <div className='border'>
            <div className='p-4'>
                <h3 className='text-xl'>{post.title}</h3>
                <p className='textl-base'>{post.body}</p>
            </div>
        </div>
    );
};

export default PostCard;