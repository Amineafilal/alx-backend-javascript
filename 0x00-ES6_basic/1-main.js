import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));  // Output: [ true, false ]
console.log(taskBlock(false)); // Output: [ false, true ]
