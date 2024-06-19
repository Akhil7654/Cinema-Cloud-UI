import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './style.scss';

const StarRating = ({ rating }) => {
    // Calculate full stars, half stars, and empty stars
    const fullStars = Math.floor(rating / 2);
    const halfStars = rating % 2 >= 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="star-rating">
            {Array(fullStars).fill(<FaStar />)}
            {Array(halfStars).fill(<FaStarHalfAlt />)}
            {Array(emptyStars).fill(<FaRegStar />)}
            <span className="rating-text">{rating.toFixed(1)}</span>
        </div>
    );
};

export default StarRating;
