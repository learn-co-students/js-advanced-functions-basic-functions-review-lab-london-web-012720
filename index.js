function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = (wrap = "*") => {
  debugger;
  if (wrap == "*" || wrap == "||") {
    return function(adject) {
      return `You are ${wrap}${adject}${wrap}!`;
    };
  }
};

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
};

const actionApplyer = (int, arr) => {
  if (arr.length == 0) {
    return int;
  }
  let base = int;
  for (let i = 0; i < arr.length; i++) {
    base = arr[i](base);
  }
  return base;
};
