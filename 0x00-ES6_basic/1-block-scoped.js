export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Using different variable names to avoid shadowing
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
