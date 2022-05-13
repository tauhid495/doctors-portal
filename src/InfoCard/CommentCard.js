import React from 'react';

const CommentCard = ({ comment }) => {

    return (
        <div>
            <div class="my-4 card lg:max-w-lg bg-base-100 shadow-xl p-6">
                <p>{comment.description}</p>
                <div class=" card-body">
                    <div className='flex items-center'>
                        <div class="avatar">
                            <div className="w-16 rounded-full ring ring-primary mr-4 ">
                                <img src={comment.image} />
                            </div>
                        </div>


                        <div>
                            <h2 className="card-title">{comment.name}</h2>
                            <p>{comment.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;