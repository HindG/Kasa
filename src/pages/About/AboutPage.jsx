import React, { Fragment } from "react"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function AboutPage() {

    return (
        <Fragment>
            <Header aboutView={true} />
            <Footer />
        </Fragment>
    )
}

export default AboutPage;