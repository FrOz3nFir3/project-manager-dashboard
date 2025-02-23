import React from "react";

const StatItem = (props) => {
    const {
        item
    } = props;
    return <div className={`card relative ${item.className ?? ""}`}>
        {item.svg && <div className="absolute fill-cyan-500 left-3 top-3 w-6 h-6" dangerouslySetInnerHTML={{__html: item.svg}}></div>}
        <h3 className="text-3xl text-center font-bold">{item.title}</h3>
        <p>{item.description}</p>
    </div>
}

export default StatItem;