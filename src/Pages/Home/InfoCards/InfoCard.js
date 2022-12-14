import React from 'react';

const InfoCard = ({ card }) => {
    const {name, description, icon, bgClass } = card;
    return (
        <div className={`card p-6 card-side bg-base-100 shadow-xl ${bgClass}`} data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title text-2xl">{name}</h2>
                <p>{ description}</p>
            </div>
        </div>
    );
};

export default InfoCard;