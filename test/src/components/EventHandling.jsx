export const EventHandling = () => {

    function handleClickButton(event){
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey I am event handling type as onClick!");
    };

    return(
        <>
        <button onClick={handleClickButton}>Click me</button>
        </>
    );
};
