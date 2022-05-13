import React from 'react';
import comma from '../../assets/icons/quote.svg'
import avatar1 from '../../assets/images/people1.png'
import avatar2 from '../../assets/images/people2.png'
import avatar3 from '../../assets/images/people3.png'
import CommentCard from '../../InfoCard/CommentCard';


const Testimonial = () => {

    const comments = [
        {
            "_id": 1,
            "image": avatar1,
            "name": "Fluride Treatment",
            "location": "Dhokrakul",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "_id": 2,
            "image": avatar2,
            "name": "Cavity Filling",
            "location": "Dhokrakul",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "_id": 3,
            "image": avatar3,
            "name": "Teeth Whitening",
            "location": "Dhokrakul",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]

    return (
        <section className='my-20 '>
            <div className='flex justify-between'>
                <div>
                    <h4 className='font-semibold text-primary'>Testimonial</h4>
                    <p className='text-accent text-3xl'>What Our Patients Says</p>
                </div>
                <div><img className='w-24 md:w-48' src={comma} alt="" /></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    comments.map(comment => <CommentCard
                        key={comment._id}
                        comment={comment} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;