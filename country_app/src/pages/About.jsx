/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import countryFacts from "../api/countryData.json";

export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are interesting facts
                <br />
                We are proud of
            </h2>

            <div className="gradient-cards">

                {countryFacts.map((curCountry) => {
                    const { id, countryName, capital, population, interestingFact } = curCountry;
                    return (
                        <div className="card" key={curCountry.id}>
                            <div className="container-card bg-blue-box">
                                <p className="card-title">{countryName}</p>
                                <p>
                                    <span className="card-description">Capital:</span>{capital}
                                </p>
                                <p>
                                    <span className="card-description">Population:</span>{population}
                                </p>
                                <p>
                                    <span className="card-description">Interesting Fact:</span>{interestingFact}
                                </p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </section>
    );
};
