import React, { Fragment, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./accomodationpage.css"

function AccomodationPage() {
    const id = useParams()
    let [accomodationsData, setAccomodationsData] = useState(null)
    let [currentAccomodation, setCurrentAccomodation] = useState(null)

    useEffect(() => {
        fetch("/logements.json")
            .then(response => response.json())
            .then(data => setAccomodationsData(data))
    }, [])

    useEffect(() => {
        accomodationsData && accomodationsData.forEach(accomodation => {
            (accomodation.id === id.id) && setCurrentAccomodation(accomodation)
        })
    }, [accomodationsData, id.id])

    console.log(currentAccomodation);

    return (
        <Fragment>
            <Header />
            {currentAccomodation &&
                <Fragment>
                    <div className="accomodation--header">
                        <div>
                            <h3 className="accomodation--text accomodation--title">{currentAccomodation.title}</h3>
                            <span className="accomodation--text accomodation--location">{currentAccomodation.location}</span>
                        </div>
                        <div className="accomodation--host__container">
                            <div className="accomodation--text accomodation--host__name">{currentAccomodation.host.name}</div>
                            <img src={currentAccomodation.host.picture} alt="Host"className="accomodation--host__picture" />
                        </div>
                    </div>
                </Fragment>
            }
            <Footer />
        </Fragment>
    )
}

export default AccomodationPage;