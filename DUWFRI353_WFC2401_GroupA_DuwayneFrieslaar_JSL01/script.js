function validateSyntax() {
    //I am implementing a function which will respond to the onclick added to the validate button 
    let input = document.getElementById('petInput').value; 
    //I am starting by fetching the input field from the DOM
    let regex = /^pet_[a-zA-Z0-9]+$/;
    //Here I am adding the numerical values to a variable so I could split it up later
    let petRegex = "pet_";
    let validInputRegex = new RegExp(`^${petRegex}[0-9]+[a-zA-Z]+$`)
    //Here I'm splitting the expression, and calling the variable I created a few lines up
    console.log(validateSyntax.Regex)
    let result = ''; 
    //Here I am creating a variable and setting it to an empty string

    if (validInputRegex.test(input)) {
        //Here I am testing if the input matches the expression
        result = 'Valid name'; // Set result to 'Valid' if input matches
    } else {
        result = 'Invalid name'; // Set result to 'Invalid' if input does not match
    }
            document.getElementById('result').innerText = result;
            /*Here I am showing the validation result to show if the input is valid by getting the result 
            from the dom and rendering it out with the innerText*/
}             


