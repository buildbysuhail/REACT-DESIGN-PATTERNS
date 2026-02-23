export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;
    return (
        <>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies:{ hairColor }</h3>
        <ul>
            {hobbies.map((hobby, i) => (
                <li key={i}>{hobby}</li>
            ))}
        </ul>
        </>
    )
}