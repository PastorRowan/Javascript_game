



class AnsiCursor {
    Up(n=1) {
        return '\x1b[' + n.toString() + 'A';
    }
    Down(n=1) {
        return '\x1b[' + n.toString() + 'B';
    }
    Forward(n=1) {
        return '\x1b[' + n.toString() + 'C';
    }
    Back(n=1) {
        return '\x1b[' + n.toString() + 'D';
    }
    Pos(x=1, y=1) {
        return '\x1b[' + y.toString() + ';' + x.toString() + 'H';
    }
};


const ansiCursor = new AnsiCursor;


module.exports = ansiCursor;