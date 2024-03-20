function fibonacci(num) {
// your code here
	if (num === 0) return 0;

	let prev1 = 0;
	let prev2 = 1;
	let curr;

	for (let i = 2; i <= n; i++) {
		curr = prev1 + prev2;
		prev1 = prev2;
		prev2 = curr;
	}
		return prev2;
}
console.log(solution(num));

module.exports = fibonacci;
