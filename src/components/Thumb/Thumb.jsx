import React from "react";
import { Link } from "react-router-dom";
import './thumb.css'

class Thumb extends React.Component {

    render() {
        const { accomodationData, index } = this.props;
        const divStyle = {
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${accomodationData.cover}') center no-repeat`,
        };
        return (
            <Link to={`/accomodation/${accomodationData.id}`} className="thumb--link" >
                <div key={index} style={divStyle} className="thumb--picture">
                    <span className="thumb--title">
                        {accomodationData.title}
                    </span>
                </div>
            </Link >
        )
    }
}

export default Thumb;