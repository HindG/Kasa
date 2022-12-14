import React, { Fragment, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import Gallery from "../../components/Gallery/Gallery";
import "./accomodationpage.css"

function AccomodationPage() {
    const id = useParams()
    const navigate = useNavigate();
    let [currentAccomodation, setCurrentAccomodation] = useState(null)

    useEffect(() => {
        fetch("/logements.json")
            .then(response => response.json())
            .then(data => {
                if (data.find((accomodation) => accomodation.id === id.id)) {
                    const currentAccodomation = data.find((accomodation) => accomodation.id === id.id);
                    setCurrentAccomodation(currentAccodomation);
                } else {
                    navigate("/error")
                }
            })
    }, [navigate, id.id])

    return (
        <Fragment>
            <Header />
            {currentAccomodation &&
                <Fragment>
                    <Gallery pictures={currentAccomodation.pictures} />
                    <div className="accomodation--flex">
                        <div className="accomodation--header--responsive">
                            <div>
                                <h3 className="accomodation--text accomodation--title">{currentAccomodation.title}</h3>
                                <span className="accomodation--text accomodation--location">{currentAccomodation.location}</span>
                            </div>
                            <div className="accomodation--tags__container">
                                {currentAccomodation.tags.map((tag, index) => <Tag key={index} index={index} tagTitle={tag} />)
                                }
                            </div>
                        </div>
                        <div className="accomodation--header--responsive accomodation--header--responsive_flex">
                            <div className="accomodation--host__container">
                                <div className="accomodation--text accomodation--host__name">{currentAccomodation.host.name}</div>
                                <img src={currentAccomodation.host.picture} alt="Host" className="accomodation--host__picture" />
                            </div>
                            <Rating starsNumber={currentAccomodation.rating} />
                        </div>
                    </div>
                    <div className="accomodation--flex">
                        <Dropdown paragraph={currentAccomodation.description} title="Description" />
                        <Dropdown equipments={currentAccomodation.equipments} title="??quipements" />
                    </div>
                </Fragment>
            }
            <Footer />
        </Fragment>
    )
}

export default AccomodationPage;