export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Using different variable names to avoid shadowing
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}

// Test the function
console.log(taskBlock(true));
console.log(taskBlock(false));
