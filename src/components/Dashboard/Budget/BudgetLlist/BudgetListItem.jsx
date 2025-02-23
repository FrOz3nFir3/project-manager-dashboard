import React from "react";

const BudgetListItem = (props) => {
    const item = props.item;

    return <div className="card space-y-2">

        <div className="flex justify-between">
            <div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-500">{item.description}</p>
            </div>
            <img className="w-12 h-12 rounded-full" src={item.imgSrc} alt="budget" />
        </div>

        <div className="text-sm">
            <span>Total Budget: </span>
            <strong>{item.totalBudget}</strong>
        </div>
        <div className="text-sm">
            <span >Profitability (100%): </span>
            <strong className={`${item.remainingBudget < 0 ? "text-red-600" : ""}`}>{item.remainingBudget}</strong>
        </div>

        {/* progress bar */}
        <div>
            <div className="w-full h-4 bg-neutral-200 rounded-full">
                {/* TODO: render icon as well based on value */}
                {/* TODO: color change based on hoursSpent value */}
                <div className="h-full bg-green-500 rounded-full" style={{ width: item.hoursSpent}}></div>
            </div>  
        </div>

        <div className="flex justify-between text-xs">
            <span>
                Actual hours:
                <span>{item.actualHours}</span>
            </span>
            <span>
                <span>{item.hoursRemaining}</span>
            </span>
        </div>
    </div>
}

export default BudgetListItem;