import React, { Fragment } from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function HomePage() {

    return (
        <Fragment>
            <Header homeView={true} />
            <Footer />
        </Fragment>
    )
}

export default HomePage;