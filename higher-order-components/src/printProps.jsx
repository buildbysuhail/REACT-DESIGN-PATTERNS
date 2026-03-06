// // notice that smaller case is used(printProps.jsx)
// export const printProps = Component => {
//     return (props) => {
//         console.log(props);

//         return <Component {...props}/>
//     }
// }

export const printProps = Component => props => {
  console.log(props);

  return <Component {...props} />
}