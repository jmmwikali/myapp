const Thirdcomponent = () => {
    // Variables enable us to create dynamic websites. (It means the cntent of the website will be changing over time.)
    // Below we declare some variablesa. Note: Variables are usually declared just befor the return statement in Reactjs.

    let name = "Jessica"
    let age = 28
    let message ="I love programming"


    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my Third component</h1>

            {/* Below we bind our variables. We use the variable name we had declared before. */}
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}


export default Thirdcomponent;

// Create a Fourthcomponent.jsx, have two variables i.e weight and height and bind the user interface. Then render the component on App.js