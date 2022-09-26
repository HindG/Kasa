import React from "react";
import { Link } from "react-router-dom";
import './thumb.css'

class Thumb extends React.Component {

    render() {
        const { accomodationData, key } = this.props;
        const divStyle = {
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${accomodationData.cover}') center no-repeat`,
            backgroundSize: "cover",
            position: "relative",
            width: "340px",
            height: "340px",
            margin: "25px",
            borderRadius: "10px",
        };
        return (
            <Link to={`/accomodation/${accomodationData.id}`} className="thumb--link" >
                <div key={key} style={divStyle}>
                    <span className="thumb--title">
                        {accomodationData.title}
                    </span>
                </div>
            </Link >
        )
    }
}

export default Thumb;