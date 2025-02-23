import React from "react";
import BudgetList from "./BudgetLlist";
import { DASHBOARD_BUDGET_ITEMS } from "../../../utils/constant";

const Budget = () => {
    const [budgetListsData, setBudgetListsData] = React.useState(DASHBOARD_BUDGET_ITEMS);

    const handleAddData = () => {
        // TODO: obviously show form instead of dummy data
        setBudgetListsData([...budgetListsData, {
            title: "Project A",
            description: "ds",
            imgSrc: "https://randomuser.me/api/portraits/men/10.jpg",
            totalBudget: "100,000",
            remainingBudget: "33",
            hoursSpent: "10%",
            actualHours: 1100,
            hoursRemaining: "100 hours budget!"
        }])
    }

    return <div className="space-y-8">
        <div className="flex gap-4">
            <h2 className="text-2xl font-bold">Budget Status</h2>
            <div className="flex gap-4">
                {/* list of actionable buttons */}
                <button onClick={handleAddData} className="btn btn-primary">Add New Project</button>
                <button className="btn">Download report</button>
                <button className="btn">dd/mm/yyyy - dd/mm/yyyy</button>
                <button className="btn">filter</button>
            </div>
        </div>


        <BudgetList items={budgetListsData} />
    </div>
}

export default Budget;