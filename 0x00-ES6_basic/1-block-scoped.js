export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let for block-scoping
  let task2 = true;   // Use let for block-scoping

  if (trueOrFalse) {
    let task = true;   // This task is scoped to the if-block
    let task2 = false; // This task2 is scoped to the if-block
  }

  return [task, task2];  // Returns the original task and task2 values
}
