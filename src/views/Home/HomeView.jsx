import React, { Fragment } from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function HomeView() {

    return (
        <Fragment>
            <Header homeView={true} />
            <Footer />
        </Fragment>
    )
}

export default HomeView;