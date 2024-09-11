import * as React from 'react';

export interface StarRatingProps {
    starLength?: number;
    color?: string;
    size?: number;
    starStyle?: React.CSSProperties;
    starTextStyle?: React.CSSProperties;
    messages?: string[];
    defaultRating?: number;
    newRating: (rating: number) => void;
    disabled?: boolean;
}

export const StarRating: React.FC<StarRatingProps>;
