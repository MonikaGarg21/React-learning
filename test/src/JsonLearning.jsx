import data from "../api/learning.json";


export function JsonLearning(){
    return(
        <div>
            {data.map((value)=>(
                <div key = {value.id}>
                    <h2>{value.name}</h2>
                    <p>Class: {value.class}</p>
                </div>
            ))}
        </div>
    )
}