import React from "react";
import './dropdown.css'

class Dropdown extends React.Component {

    render() {
        const { title, paragraph, equipments, isValue } = this.props;
        const containerClassName = equipments ? "dropdown--container dropdown--right" : "dropdown--container";
        const titleClassName = isValue ? "dropdown--text dropdown--title" : "dropdown--text dropdown--title dropdown--title__values"
        const contentClassName = isValue ? "dropdown--text dropdown--content dropdown--values" : "dropdown--text dropdown--content";

        return (
            <div className={containerClassName}>
                <div className={titleClassName}>{title}</div>
                <div className={contentClassName}>
                    {paragraph ?
                        paragraph
                        :
                        equipments && equipments.map((equipement) => <div>{equipement}</div>)
                    }
                </div>
            </div>
        )
    }
}

export default Dropdown;