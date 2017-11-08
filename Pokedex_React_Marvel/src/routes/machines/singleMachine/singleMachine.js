import './singleMachine.css';
import React from 'react';

const Machine = ({machine}) => (
    <div className="singleData">
        <ol>
            <li>ID : {machine.id}</li>
            <li>Item Name : {machine.item.name}</li>
             <li>Version Group : {machine.version_group.name}</li>
            <li>Move : {machine.move.name}</li>
        </ol>
    </div>
);

export default Machine;