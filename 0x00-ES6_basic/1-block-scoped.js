export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Using let for block-scoped variables
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}

// Test the function
console.log(taskBlock(true));
console.log(taskBlock(false));
