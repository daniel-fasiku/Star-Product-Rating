import React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import StarIcon from "../StarIcon/StarIcon";


const StarRating = ({ starLength = 5, color = '#000000', size = 24, disabled = false, starStyle = { display: "flex", alignItems: "center", gap: "2px" }, starTextStyle = { color: color }, messages = ["Terrible", "Bad", "Okay", "Good", "Amazing"], defaultRating = 1, newRating }) => {
    StarRating.propTypes = {
        starLength: PropTypes.number,
        color: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        starStyle: PropTypes.object,
        starTextStyle: PropTypes.object,
        messages: PropTypes.array,
        defaultRating: PropTypes.number.isRequired,
        newRating: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
    };

    const arrayLength = Array.from({ length: starLength });
    const [rating, setRating] = useState(arrayLength);
    const [storedRating, setStoredRating] = useState(defaultRating);


    const handleStoreRating = (rating, disabled) => {
        if (!disabled) {
            setStoredRating(rating);
            newRating(rating);
        } else {
            return undefined;
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
            <div style={starStyle} >
                {
                    rating.map((item, index) => (<StarIcon key={index} onClick={() => handleStoreRating(index + 1, disabled)} full={storedRating >= index + 1} color={color} size={size} />))
                }
            </div>
            <p style={starTextStyle} >{messages.length === starLength ? messages[storedRating ? storedRating - 1 : rating - 1] : storedRating}</p>
        </div>
    )
}

export default StarRating