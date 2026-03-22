
export function Child(){
    const name = "Monika"
    // const age = 28
    const returnProfession = ()=>{
        const profession = "Electrician";
        return profession;
    };

let age = 20;
//(first way of using React conditional jsx)
// if(age<18){
//     return (
//         <p>Name : {name}</p>,
//         <p>Profession : {returnProfession()}</p> ,
//         <p>Age : {20+8}</p>,
//         <button>Not Available</button>

        
//     );
// }
// let canWatch = "Not available";
// if ( age>= 18 ) canWatch = "watch now";
// (third way of using REact conditional jsx rendering)


// fourth way of rendering conditional jsx
const canWatch = ()=>{
    if(age>= 18) return "watch now";
    return "not available";
}



    return(
       <>

       {/* dynamic value accessing */}
       <p>Name : {name}</p> 


       {/* dynamic value accessing with expressions */}
        <p>Age : {20+8}</p>


       {/* dynamic value accessing with funciton calls  */}
       <p>Profession : {returnProfession()}</p>
       
       {/*(second way of using React conditional jsx rendering) <button>{age <=18 ? "Not Available" : "Watch Now"}</button> */}

        <button>{canWatch()}</button>   
       </>
        

    );
    
}


export function Parent(parent){
const name = "Nav";
    return(
        <div>
            <h1>Welcome {name}!!</h1>
        </div>

    );
}


function GrandChild(child){
const greetName = ()=>{
    const name = "Reet";
    return name;
}
    return(
        <h3>Welcome {greetName()} </h3>
    );
}
export default GrandChild;

