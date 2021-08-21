for (var x = 1; x <= 100; x++){
    if(x % 3 == 0 && x % 5 == 0){
        document.writeln("FizzBuzz")
        document.write("<br>");
        document.write("<br>");
    }else if (x % 3 == 0){
        document.writeln("Fizz")
        document.write("<br>");
        document.write("<br>");
    }else if(x % 5 == 0){
        document.writeln("Buzz")
        document.write("<br>");
        document.write("<br>");
    }else{
        document.writeln(x)
        document.write("<br>");
        document.write("<br>");
    }
}