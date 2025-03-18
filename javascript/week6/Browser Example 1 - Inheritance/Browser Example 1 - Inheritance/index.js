import Gorilla from './gorilla.js';
const gorilla = new Gorilla('George', '160Kg');

function display(content) {
    console.log(content);
}

//THIS CODE MUST RUN ON A LIVE SERVER
display(gorilla.poundChest());
display(gorilla.sleep());
display(gorilla.showVigour());

// OUTPUT:
// George is pounding its chest!
// George is going to sleep!
// George is eating! George is pounding its chest!
// George is waking up! George is pounding its chest! George is putting on his red hat. George is eating! George is removing his red hat. George is going to sleep!
// Challenge 
/* Create class TrainedGorilla 
hatcolour property
removeHat
dailyRoutine
wakeup pound chest putohat eat removehat slep*/
/* in the index file
import trained gorilla
create a trained gorilla
poundChest, sleep, showVigour, dailyRoutine */
import TrainedGorilla from './trainedgorilla.js';
const trainedGorilla = new TrainedGorilla('Trained George', '160Kg', 'red');

//THIS CODE MUST RUN ON A LIVE SERVER
display(trainedGorilla.poundChest());
display(trainedGorilla.sleep());
display(trainedGorilla.showVigour());
display(trainedGorilla.dailyRoutine());