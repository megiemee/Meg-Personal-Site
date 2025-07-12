

function Message(){
    // JSX syntax - gets compiled to js behind the scenes
    
    const name = 'Megan';

    const checkTime = () => {
        const currentTime = new Date();
        return currentTime.getHours() >= 12 ? <p>Good afternoon!</p>: <p>Good morning!</p>
    }

    
    return <>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{checkTime()}</h1>
    <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Welcome to {name}'s website.</h3>
    </>;
    

}

export default Message;