function test() {
    var a = "3";
    var b = "8";

    var c;
    c = a;
    a = b;
    b = c;
    console.log("a is " + a);
    console.log("a is " + b);
}