import React from "react";
import './thumb.css'

class Thumb extends React.Component {

    render() {
        const { accomodationTitle } = this.props;
        return (
            <div className="thumb">
                <div className="thumb--title__container">
                <span className="thumb--title">
                    {accomodationTitle}
                </span>
                </div>
            </div>
        )
    }
}

export default Thumb;