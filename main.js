// abilities:
// accept user Input of number operator number
//should accept decinal numbers
// store input
// recognize input and perform calculations
// return a result

//optional
//should accept longer arithmetic operations
//display the input as it is being entered
//the result can be the start of a new operation
//should prevent invalid inputs

const keys = document.querySelector('.button')

keys.addEventListener('click', event => {
    const{target} = event;
    const{value} = target;
    if (!target.matches('.button')) {
        return;
    } else {
        //pass value to parse method
        //console.log(event)
    }
})