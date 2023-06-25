/**
 * Your goal is to implement this function.
 *
 * The count squares function takes 2 integers, a and b. It should then calculate the number of perfect squares which
 * exist between a and b.
 *
 * For example, if a is 1, and b is 26, then the function should return 5, because there are 5 perfect squares between 1
 * and 26:
 * 1 = 1 * 1
 * 4 = 2 * 2
 * 9 = 3 * 3
 * 16 = 4 * 4
 * 25 = 5 * 5
 *
 * Note that a and b are not necessarily in order - a may be less than b, or b may be less than a. Also, zero is a
 * perfect square.
 *
 * @param a One end of the range to test
 * @param b The other end of the range
 * @returns The number of perfect squares between a and b (inclusive).
 */
function countSquares(a, b) {
    
   // Swap A and B if (A>B) 
   if (a > b) {
    [a, b] = [b, a];
  }

  let count = 0;

  if (a >= 0) {
    // Iterate from the square root of A and square root of B
    for (let i = Math.ceil(Math.sqrt(a)); i <= Math.floor(Math.sqrt(b)); i++) {
      count++;
    }
  } else if (b >= 0) {
     //Iterate from 0 to the square root of B
    for (let i = 0; i <= Math.floor(Math.sqrt(b)); i++) {
      count++;
    }
  } else {
     //Both A and B are negative no perfect square in the range
    count = 0;
  }

  return count;
} 
/**
 * The code below this point runs the tests that you see on the index.html page. You don't need to change anything below.
 */
function onload() {
    runTest(1, 0, 26, 6);
    runTest(2, 26, 0, 6);
    runTest(3, -1000, 26, 6);
    runTest(4, -1000, -1, 0);
    runTest(5, 4, 4, 1);
    runTest(6, 3, 3, 0);
    runTest(7, 0, 0, 1);
}

function runTest(testNum, a, b, expected) {
    const countSquaresResult = countSquares(a, b);
    const isPass = countSquaresResult === expected;
    const testResultText = isPass ? "Pass" : "Fail";

    document.getElementById("outputTest" + testNum).innerHTML = countSquaresResult;

    const resultTableCell = document.getElementById("resultTest" + testNum);
    resultTableCell.innerHTML = testResultText;

    if (isPass) {
        resultTableCell.classList.add("test-pass");
    } else {
        resultTableCell.classList.add("test-fail");
    }
}
