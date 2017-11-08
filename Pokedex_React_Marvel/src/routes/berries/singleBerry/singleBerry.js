import './singleBerry.css';
import React from 'react';

const Berry = ({berry}) => (
    <div className="singleData">

        <ol>
            <li>Name : {berry.name}</li>
            <li>ID : {berry.id}</li>
            <li>Growth Time : {berry.growth_time}</li>
            <li>Max harvest : {berry.max_harvest}</li>
            <li>Natural Gift Power : {berry.natural_gift_power}</li>
            <li>Size : {berry.size}</li>
        </ol>

    </div>
);

export default Berry;