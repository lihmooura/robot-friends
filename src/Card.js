import React from "react";
import './Card.css';

const Card = ({
    name,
    username,
    email,
    id
}) => {
    return ( <div className = 'tc bg-light-green dib br3 ma2 grow bw1 shadow-5 card'>
        <img alt = 'robots'
        src = {
            `https://robohash.org/${id}?200x200`
        }
        /> <div>
        <h2> {
            name
        } </h2> <p> {
            username
        } </p> <p> {
            email
                }
            </p>
        </div>
    </div>
    );
}

export default Card;