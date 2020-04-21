import React from "react";
import "./card.css";

export default function Card2(props) {
    const { imageUrl, children } = props;
    return (
        <div className="card">
            <div
                className="card-cover"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="card-body">{children}</div>
        </div>
    );
}