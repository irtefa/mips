function incorrectOpcode(opcode) {
    var validOpcodes = ["add", "addi", "addiu", "addu", "and", "andi", "beq", "bne", "j", "jal", "jr", "lbu", "lhu", "ll", "lui", "lw", "nor", "or", "ori", "slt", "slti", "sltiu", "sll", "srl", "sb", "sc", "sh", "sw", "sub", "subu"];
    // check if given opcode is present in valid opcode list
    if (validOpcodes.indexOf(opcode) >= 0) {
        return false;
    } else {
        return true;
    }
};

function thereIsSyntaxError(line) {
    if (incorrectOpcode(line.split(" ")[0]) === true) {
        console.log("this line: " + line + "has the wrong opcode");
        return true;
    }
    return false;
};
