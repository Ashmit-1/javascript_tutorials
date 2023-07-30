let string = " My name is Ashmit Das"
for (const char of string) {
    if (char == " ") {
        continue
    }
    console.log(`Each character of the string is ${char}`);
}