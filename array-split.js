const nums = [1, 2, 3, 4, 5, 6, 7, 8,];
//const part = nums.slice(2, 5);

//const removed = nums.splice(2, 5);
const removedInject = nums.splice(2, 3, 88);
//console.log(removed);
//console.log(part);
// console.log(removedInject);
// console.log(nums);

const together = nums.join(" , ")
//const together = nums.join("  ")
//const together = nums.join("")
console.log(together);