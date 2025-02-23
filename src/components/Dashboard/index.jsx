import React from "react";
import Stats from "../Stats";
import { DASHBOARD_MOOD_ITEMS, DASHBOARD_STATS_ITEMS } from "../../utils/constant";
import MoodList from "./MoodList";
import LineGraph from "./Graphs/LineGraph";
import CircleGraph from "./Graphs/CircleGraph";
import Budget from "./Budget";

const Dashboard = () => {
    return <div className="bg-neutral-100 min-h-screen pt-4 px-10 pb-10 space-y-10">
        <div className="flex flex-col gap-8 lg:flex-row">
            <div className="sm:basis-[80%] space-y-8">
                <Stats items={DASHBOARD_STATS_ITEMS}/>

                <div className="flex gap-4 ">
                    <div className="grow h-[300px]">
                        <LineGraph />
                    </div>

                    <div className="grow h-[300px]">
                        <CircleGraph />
                    </div>

                </div>
            </div>
            <div className="sm:basis-[20%]">
                <MoodList title="Team Mood" items={DASHBOARD_MOOD_ITEMS} />
            </div>
        </div>

        <div>
            <Budget />
        </div>
    </div>
}

export default Dashboard;