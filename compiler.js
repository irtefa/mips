/*
 * @param {string} content entire code
 * @return {list} contentList list of lines of code appended with their line numbers
 */

function enumerateLines(content) {
    // split content based on newlines
    var contentList = content.split("\n");
    var lineNum = 1;
    
    // add line numbers to content
    for (var i in contentList) {
        contentList[i] = enumerateSingleLine(contentList[i], lineNum);
        lineNum++;
    }

    return contentList;
};

/*
 * @param {string} fuzzyLine line containing inline comment
 * @param {string} lineNum
 * @return {string} code
 */

function enumerateSingleLine(fuzzyLine, lineNum) {
    // remove inline comment
    var code = fuzzyLine.split("#")[0];
    // stript white spaces and add line number
    code = code.trim() + "@" + lineNum;
    
    return code;
};

/*
 * @param {string} opcode
 * @return {boolean} true invalid opcode
 */

function invalidOpcode(opcode) {
    var validOpcodes = ["add", "addi", "addiu", "addu", "and", "andi", "beq", "bne", "j", "jal", "jr", "lbu", "lhu", "ll", "lui", "lw", "nor", "or", "ori", "slt", "slti", "sltiu", "sll", "srl", "sb", "sc", "sh", "sw", "sub", "subu"];
    // check if given opcode is present in valid opcode list
    if (validOpcodes.indexOf(opcode) >= 0) {
        return false;
    } else {
        return true;
    }
};

/*
 * @param {string} line
 * @return {boolean} true if it is a comment
 */

function thisLineIsAComment(line) {
  line = line.replace(/\s/g, '');
  if (line[0] === "#") {
      return true;
  } else {
      return false;
  }
};
/*
 * @param line {string} single line of code
 * @return {boolean} true if there is syntax error
 */

function thereIsSyntaxError(line) {
    // check for invalid opcodes
    if (invalidOpcode(line.split(" ")[0]) === true) {
        var words = line.split(" ");
        console.log("wrong opcode at line " + words[words.length - 1]);
        return true;
    }
    return false;
};

/*
 * main thread
 * @param content {string} all the code
 */

function runCompiler(content) {
    var lines = enumerateLines(content);

    for (var i in _lines) {
        if (thereIsSyntaxError(lines[i]) === false) {
            console.log("correct");
        }
    }
}
