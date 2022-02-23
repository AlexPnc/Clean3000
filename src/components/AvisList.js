import React from 'react';

const AvisList = ({ avis, avisPassage }) => {

    const Liste = Object.keys(avisPassage).map(key => {
        return (
            <div className="order-details-item" key={key}>
                <div className="pizza-details">
                    <span>{avis[key].name}</span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="order-details-list">
                {Liste}
            </div>
        </div>
    )
};

export default AvisList;