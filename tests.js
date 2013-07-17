/*
 * tests for opcodes
 */

test("incorrect opcode", function() {
    equal(thereIsSyntaxError("tom 3 3"), true);
});

test("incorrect opcode", function() {
    equal(thereIsSyntaxError("adds point two"), true);
});
