//Cycle

var fib = Number(prompt('Enter your number'));

    if (fib === 0) {
        document.write('Result: 0');
    }
    else if (fib === 1) {
        document.write('Result: 1');
    }
    else {
        document.write('Cycle: ' + сycle(fib, 0, 1) + '<br>');
        document.write('Recursion: ' + recursion(fib - 1, 0, 1));
    }

    
    function сycle(n, p1, p2) {
        var fibonacci;
        for (var i = 2; i <= n; i++) {
            fibonacci = p1 + p2;
            p1 = p2;
            p2 = fibonacci;
        }
        return fibonacci;
    }

//Recursion
    function recursion(num, f1, f2) {
        if (num === 0) {
            return f2;
        }
        return recursion(num - 1, f2, f1 + f2);

    }
    
var results = [0,1];
function fibonacci(n){
  if ( n == 0 ) return results[0];
 
  if (n == 1) return results[1];
 
  if (!results[n]){
    results[n] = fibonacci(n-2) + fibonacci(n-1);
  } 
  return results[n];
}