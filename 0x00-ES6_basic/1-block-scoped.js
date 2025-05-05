export default function taskBlock(trueOrFalse) {
  let task = false; // Changed to let for block-scoping
  let task2 = true; // Changed to let for block-scoping

  if (trueOrFalse) {
    let task = true; // Block-scoped inside the if
    let task2 = false; // Block-scoped inside the if
  }

  return [task, task2];
}
