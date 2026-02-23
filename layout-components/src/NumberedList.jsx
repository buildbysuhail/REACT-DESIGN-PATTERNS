export const NumberedList = ({
    person
}) => {
    const { name, age, hairColor, hobbies } = person;

    return (
        <>
        <h2>Name: {name}, <span>Age: {age}</span></h2>
        <p>Hair Color of the person: {hairColor}</p>
        <ul>
        { hobbies.map((hobby, idx) => {
            return <li>S.No: { idx } Hobby: {hobby}</li>
        })
        }
        </ul>
        </>
    )
}