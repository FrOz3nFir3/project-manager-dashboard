import MoodListItem from "./MoodListItem";

const MoodList = (props) => {
    return <div className="flex flex-col gap-4 card px-2">
        <h3>{props.title}</h3>
        {
            props.items.map(item => {
                return <MoodListItem key={item.id} item={item} />
            })
        }
    </div>
}

export default MoodList;