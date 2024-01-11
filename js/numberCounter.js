// get elements from the DOM
const counters = document.querySelectorAll(".box-container span");
const container = document.querySelector(".box-container");
 
// variable that tracks if the counters have been activated
let activated = false;

// add scroll event to the page
window.addEventListener("scroll", () => {
    /*If the page is scrolled to the containers 
    element and the counters are not activated*/
    if (pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false) {
        // select all counters
        counters.forEach(box => {
            // set counter values to zero
            box.innerText = 0;
            // set count variable to track the count
            let count = 0;

            function updateCount(){
                const target = parseInt(box.dataset.count);
                // as long as the count is below the target number
                if (count < target){
                    // increment the count
                    count++;
                    // set the counter text to the count
                    box.innerText = count;
                    // repeat this every 10 miliseconds
                    setTimeout(updateCount, 20); // count speed
                    
                } // and when the target is reached
                else {
                    // set the counter text to the target number
                    box.innerText = target;
                }
            }
            // run the function initialy
            updateCount();
            // set activated to true
            activated = true;
        });
        // if the page is scrolled back a certain amount or to the top and activated is true       
    } else if (pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true){
        // select all counters
        counters.forEach(box => {
            // set counter text back to zero
            box.innerText = 0;
        }); 
        // set activated to false
        activated = false;
    }
});
