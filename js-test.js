//Danyl John Duguid
//4/24/2026
//Javascript Functions Test

function triangleBase() {
    return parseFloat(prompt("What is the base of your triangle?\n"));
}

function triangleHeight() {
    return parseFloat(prompt("what is the height of your triangle?\n"));
}

function triangleArea(triangleBase, triangleHeight){
    return((triangleBase * triangleHeight)/2);
}

alert("your triangle's area is:" + triangleArea(triangleBase(), triangleHeight()));
