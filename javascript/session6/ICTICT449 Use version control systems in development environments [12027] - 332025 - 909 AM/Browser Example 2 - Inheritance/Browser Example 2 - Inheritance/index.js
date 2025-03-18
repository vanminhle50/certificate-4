import TrainedGorilla from './trainedGorilla.js';
const trainedGorilla = new TrainedGorilla('George', '160Kg', 'red');

function display(content) {
    console.log(content);
}

//THIS CODE MUST RUN ON A LIVE SERVER

display(trainedGorilla.poundChest());
display(trainedGorilla.sleep());
display(trainedGorilla.showVigour());
display(trainedGorilla.dailyRoutine());

// OUTPUT:
// George is pounding its chest!
// George is going to sleep!
// George is eating! George is pounding its chest!
// George is waking up! George is pounding its chest! George is putting on his red hat. George is eating! George is removing his red hat. George is going to sleep!