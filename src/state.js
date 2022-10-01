import React from "react"

function TimerComponent()
{
    const [time, setTime] = React.useState(0);
    console.log('Component Update');
    React.useEffect(function()
    {
        setTime(time + 1);
    }, []
    );
    return (
        <div>
            <h3>{time}second</h3>
            <button> Click one </button>
        </div>
    )
}

export default TimerComponent;