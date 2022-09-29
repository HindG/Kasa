import React, { Fragment } from "react"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown";
import Banner from "../../img/banner-about.png"

function AboutPage() {
    const fiabiliteDescription = "La fiabilité fait partie des valeurs fondatrices de Kasa.";
    const respectDescription = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const serviceDescription = "Le service fait partie des valeurs fondatrices de Kasa.";
    const responsabilitéDescription = "La responsabilité fait partie des valeurs fondatrices de Kasa.";

    return (
        <Fragment>
            <Header aboutView={true} />
            <div className="banner--container">
                <img src={Banner} alt="Banner" className="banner--img" />
            </div>
            <Dropdown paragraph={fiabiliteDescription} title="Fiabilité" isValue={true} />
            <Dropdown paragraph={respectDescription} title="Respect" isValue={true} />
            <Dropdown paragraph={serviceDescription} title="Service" isValue={true} />
            <Dropdown paragraph={responsabilitéDescription} title="Responsabilité" isValue={true} />
            <Footer />
        </Fragment>
    )
}

export default AboutPage;