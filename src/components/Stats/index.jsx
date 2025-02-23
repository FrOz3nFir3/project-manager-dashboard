import React from "react";
import StatItem from "./StatItem";

const Stats = (props) => {
    return <div className="flex flex-wrap gap-8">
        {
            props.items.map(item => {
                return <StatItem key={crypto.randomUUID()} item={item} />
            })
        }
    </div>
}

export default Stats;