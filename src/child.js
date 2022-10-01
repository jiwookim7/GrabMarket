function ChildComponent(props)
{
    const {name, age} = props;
    return (
        <div>
            <p>
                Name {name} and age {age} right?
            </p>

        </div>
      



    );

}

export default ChildComponent