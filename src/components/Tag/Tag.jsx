import React from "react";
import './tag.css'

class Tag extends React.Component {

    render() {
        const { tagTitle } = this.props;
        return (
            <div className="tag">
                {tagTitle}
            </div>
        )
    }
}

export default Tag;