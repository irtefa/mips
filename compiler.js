/*
 * @param content {string} entire code
 * @return _contentList {list} list of lines of code appended with their line numbers
 */

function enumerateLines(content) {
    // split content based on newlines
    var _contentList = content.split("\n");
    var _lineNum = 1;
    
    // add line numbers to content
    for (var i in _contentList) {
        _contentList[_lineNum - 1] = _contentList[i] + " " + _lineNum;
        _lineNum++;
    }

    return _contentList;
};

/*
 * @param opcode {string} opcode 
 * @return true/ false {boolean} invalid opcode
 */

function invalidOpcode(opcode) {
    var _validOpcodes = ["add", "addi", "addiu", "addu", "and", "andi", "beq", "bne", "j", "jal", "jr", "lbu", "lhu", "ll", "lui", "lw", "nor", "or", "ori", "slt", "slti", "sltiu", "sll", "srl", "sb", "sc", "sh", "sw", "sub", "subu"];
    // check if given opcode is present in valid opcode list
    if (_validOpcodes.indexOf(opcode) >= 0) {
        return false;
    } else {
        return true;
    }
};

/*
 * @param line {string} single line of code
 * @return true/ false {boolean} syntax error
 */

function thereIsSyntaxError(line) {
    // check for invalid opcodes
    if (invalidOpcode(line.split(" ")[0]) === true) {
        var _words = line.split(" ");
        console.log("wrong opcode at line " + _words[_words.length - 1]);
        return true;
    }
    return false;
};

/*
 * @param content {string} all the code
 */

function runCompiler(content) {
    var _lines = enumerateLines(content);

    for (var i in _lines) {
        if (thereIsSyntaxError(_lines[i]) === false) {
            console.log("correct");
        }
    }
}
