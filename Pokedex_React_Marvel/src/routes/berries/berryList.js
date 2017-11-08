import React from 'react';
import { Link } from "react-router-dom";
import './berryList.css';

const BerryList = ({berrys, pageIndexStart}) => (
    <div>
        <h2 className="headberry">Berry List</h2>
        <ol>
            {berrys.map((berry, index) => {
                return (
                    <li key={index}>
                    <Link to={`/berry${berry.url}`}>{berry.name}</Link>
                    </li>
                )
            })}
        </ol>
    </div>
);

export default BerryList;