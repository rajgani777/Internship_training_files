
import { useEffect, useState } from 'react';



// interface CardProps {
//         title: string;
//         description: string;
//         image: string;
//         date: string;
//         icon: string;
//         tags: string[];
//         upvoteCount: number;
//         commentsCount: number;
//         link: string;
// }

export function Card({data}) {
    

    return (
        <div className="card" style={{border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px'}}>
            <img src={data.icon} alt="Icon" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Date: {data.date}</p>
            <div className="tags">
                {data.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <img src={data.image} alt="Card Image" />
            <div className="stats">
                <span>Upvotes: {data.upvoteCount}</span>
                <span>Comments: {data.commentsCount}</span>
            </div>
            <a href={data.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );

}