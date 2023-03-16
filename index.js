// code your solution here
function saturdayFun(s = 'roller-skate'){
    return `This Saturday, I want to ${s}!`;
}

function mondayWork(s='go to the office'){
    return `This Monday, I will ${s}.`;
}

function wrapAdjective(w='*'){
    const wrap = w;
    return function(s='special'){
        return `You are ${wrap}${s}${wrap}!`;
    }
    
}

let result = wrapAdjective('*');
let emphatic = result("a hard worker");