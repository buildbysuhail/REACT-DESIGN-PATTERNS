export const SmallPersonListItem = ({ person }) => {
    const { name, age, hairColor } = person;
    return (
        <>
        <p>Name: {name}, Age: {age}</p>
        <h4>Hair Color: {hairColor}</h4>
        </>
    )
}