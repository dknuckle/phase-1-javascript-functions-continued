// code your solution here
function saturdayFun(unActivity = "roller-skate") {
    return `This Saturday, I want to ${unActivity}!`;
}

function mondayWork(aActivity = "go to the office") {
    return `This Monday, I will ${aActivity}.`;
}

function wrapAdjective(flair = "*") {
    return function (unDef = "special") {
        return `You are ${flair}${unDef}${flair}!`;
    }
}