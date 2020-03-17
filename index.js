// Your code here
const saturdayFun = (activity="roller-skate" ) => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (style="*") => {
    return (poop="special") => {
        return `You are ${style}${poop}${style}!`
    }
}

const Calculator = {
    add: (a, b) => {return a + b},
    subtract: (a, b) => {return a - b},
    multiply: (a, b) => { return a * b },
    divide: (a,b) => { return a/b }
}

const actionApplyer = (numInt, functionsArray) => {
    let a = numInt

    for (let i = 0; i < functionsArray.length; i++ ) { 
        a = functionsArray[i](a)
    }
    return a 
}

