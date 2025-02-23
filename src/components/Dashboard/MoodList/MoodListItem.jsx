import React from "react";

const MoodListItem = (props) => {
    const item = props.item;

    return <div className="flex flex-col  gap-4">

        <div className="flex gap-2">
            <img src={props.item.portraitImage} alt="Portrait" className="w-12 h-12 rounded-full" />
            <div className="w-full">
                <h4 className="font-bold">{props.item.name}</h4>
                <p className="text-gray-500">{props.item.position}</p>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="w-full h-2 bg-neutral-200 rounded-full">
                {/* render mood svg at moodLevel */}

                <div className="flex justify-end -translate-y-2 w-6 h-6" style={{width: item.moodLevel}} dangerouslySetInnerHTML={{__html: item.moodSvg}}></div>
                <div className="h-full bg-primary rounded-full w-full" ></div>
            </div>
        </div>
    </div>
}

export default MoodListItem;