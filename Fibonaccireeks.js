function fibonacci(num) {
    var fibonacci = []; 

    fibonacci[0] = 1;
    fibonacci[1] = 0;
    for (i = 2; i <= num; i++) {
        
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        document.write(fibonacci[i] + ",");
    }
    return  num;
}

fibonacci(20);

