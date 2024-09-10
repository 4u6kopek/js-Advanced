function stringLength(str1, str2, str3) {
    let num1 = Number(str1.length);
    let num2 = Number(str2.length);
    let num3 = Number(str3.length);
    
    let sum = (num1 + num2 + num3);
    console.log(sum);
    console.log(Math.floor(sum/3));
    
}
stringLength("adas", "bdasd", "cdasd");