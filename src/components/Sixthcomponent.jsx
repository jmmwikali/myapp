// Create a Sixthcomponent.jsx. Inside of it, have the useState hook with the initial value of weight being 50kgs, have a button to update the weight to 55kgs when the button is clicked. Render the component on App.js

import { useState } from "react"

const Sixthcomponent = () => {

    const [weight, setWeight] = useState(50)

    return(
        <div className="Sixthcomponent">
            <h1>Welcome to my Sixth component</h1>
            <h2>My weight is: {weight}kgs</h2>
            <button onClick={ () => setWeight(55)}>Click to update your age</button> <br /> <br />
        </div>
    )
}

export default Sixthcomponent