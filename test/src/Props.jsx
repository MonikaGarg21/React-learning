

function Props(props){
   return (
    <div className = "student">
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Nationality: {props.area}</p>
        <p>Student : {props.isStudent ? "Yes" : "No"}</p>
    </div>
   );
}

export default Props