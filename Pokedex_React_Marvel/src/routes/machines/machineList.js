import React from 'react';
import { Link } from "react-router-dom";
import './machineList.css';

const MachineList = ({machines, pageIndexStart}) => (
    <div>
        <h2 className="headmachine">Machine List</h2>
        <ol>
            {machines.map((machine, index) => {
                return (
                    <li key={index}>
                    <Link to={`/machines${machine.url}`}> {machine.name}</Link>
                    </li>
                )
            })}
        </ol>
    </div>
);

export default MachineList;