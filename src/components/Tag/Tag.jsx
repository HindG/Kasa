import React from "react";
import './tag.css'

class Tag extends React.Component {

    render() {
        const { tagTitle, key } = this.props;
        return (
            <div key={key} className="tag">
                {tagTitle}
            </div>
        )
    }
}

export default Tag;