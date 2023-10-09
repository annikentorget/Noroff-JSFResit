import React, { useState } from 'react';

const ReadMore = ({ abilities, attacks, flavorText, hp, level, types, weaknesses }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleShowDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div>
            <button className="readmore__button" onClick={toggleShowDetails}>
                {showDetails ? 'Hide Details' : 'Show details'}
            </button>

            {showDetails && (
                <div className="readmore">
                    <h2 className="readmore__heading">Pokemon types</h2>
                    <p className="readmore__text">{types}</p>

                    <h2 className="readmore__heading">Abilities</h2>
                    <ul className="readmore__list">
                        {abilities.map((abilities, index) => (
                            <li className="readmore__item" key={index}>{abilities.name}</li>
                        ))}
                    </ul>

                    <h2 className="readmore__heading">Attacks</h2>
                    <ul className="readmore__list">
                        {attacks.map((attacks, index) => (
                            <li className="readmore__item" key={index}>{attacks.name}</li>
                        ))}
                    </ul>

                    <h2 className="readmore__heading">Flavor Text</h2>
                    <p className="readmore__text">{flavorText}</p>

                    <h2 className="readmore__heading">HP</h2>
                    <p className="readmore__text">{hp}</p>

                    <h2 className="readmore__heading">Level</h2>
                    <p clasSName="readmore__text">{level}</p>

                    <h2 className="readmore__heading">Weaknesses</h2>
                    <ul className="readmore__list">
                        {weaknesses.map((weaknesses, index) => (
                            <li className="readmore__item" key={index}>{weaknesses.name}</li>
                        ))}
                    </ul>


                </div>
            )}
        </div>
    );
};

export default ReadMore;