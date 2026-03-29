function Profile (){
    return (
<div>
    <h1>Profile Card Challange</h1>
    <ProfileCard
    name = "Alice"
    age = {30}
    greeting = {
        <div>
            <strong>Hi Alice, Have a wonderful day!</strong>
        </div>
    }
    >
        <p>Hobbies: Reading Books, Bhangra</p>
        <button>Contact</button>
    </ProfileCard>

    <ProfileCard 
    name = "Bob"
    age ={25}
    greeting ={
        <div>
            <strong>Hello Bob, Keep up the great work!</strong>
        </div>
    }
    >
        <p>Hobbies: Gaming, Walking</p>
        <button>Contact</button>
    </ProfileCard>
</div>
    );
}

export default Profile;

function ProfileCard({name, age, greeting, children}){
    // const {name, age, greeting, children} = props;         // destructuring props
    return (
        <>
        <h2>Name: {name}</h2>
        <p>Age : {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}