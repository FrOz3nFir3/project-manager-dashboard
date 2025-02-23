import React from "react";
import BudgetListItem from "./BudgetListItem";

const BudgetList = (props) => {
    return <div className="grid grid-cols-4  gap-6">
        {
            props.items.map(item => {
                return <BudgetListItem key={crypto.randomUUID()} item={item} />
            })
        }
    </div>
}

export default BudgetList;