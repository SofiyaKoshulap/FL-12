function pipe() {
    let a = 0;
    if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
            arguments[i+1]=addOne(arguments[i]);
            a=arguments[i];
        }
        return a;
    } else {
        return arguments[0];
    }
}
function addOne(x) {
    return x + 1;
}
pipe(1, addOne, addOne); 