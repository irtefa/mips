/*
 * tests for opcodes
 */

test("incorrect opcode", function() {
    equal(thereIsSyntaxError("tom 3 3"), true);
    equal(thereIsSyntaxError("adds point two"), true);
    equal(thereIsSyntaxError("subl point two"), true);
    equal(thereIsSyntaxError("divide point two"), true);
    equal(thereIsSyntaxError("additon point two"), true);
    equal(thereIsSyntaxError("mlt point two"), true);
});

/*
 * skip lines that start with # 
 */

test("is a full line comment", function() {
    equal(thisLineIsAComment("#this line is a comment"), true);
    equal(thisLineIsAComment("#this #line is a comment"), true);
    equal(thisLineIsAComment("#1--00000"), true);
    equal(thisLineIsAComment("#########################"), true);
    equal(thisLineIsAComment("    #blah blah"), true);
    equal(thisLineIsAComment("aba cdc #ccccc"), false);
});
