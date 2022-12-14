function fibSeq(limit){
  var fib = [];
  if (limit == 0) {
    return fib;
  }
  else if(limit == 1){
    fib = [0]
    return fib;
  }
     fib = [0,1];
    for (var i = 2; i < limit; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    }
return fib;
}