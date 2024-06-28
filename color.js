


/*
original python scripts:
-----------------------------
def rgb_f(ls_rgb):
    ansi_fore_ground_rgb_str = f'\033[38;2;{str(ls_rgb[0])};{str(ls_rgb[1])};{str(ls_rgb[2])}m'
    return ansi_fore_ground_rgb_str

def rgb_b(ls_rgb):
    ansi_background_rgb_str = f'\033[48;2;{ls_rgb[0]};{ls_rgb[1]};{ls_rgb[2]}m'
    return ansi_background_rgb_str
*/


class RgbColor {

    Rgb_f(rgbArr=[255,255,255]) {
        const ansiForeGroundRgbStr = `\x1b[38;2;${rgbArr[0].toString()};${rgbArr[1].toString()};${rgbArr[2].toString()}m`
        return ansiForeGroundRgbStr
        };


    Rgb_b(rgbArr=[255,255,255]) {
        const ansiBackgroundRgbStr = `\x1b[48;2;${rgbArr[0].toString()};${rgbArr[1].toString()};${rgbArr[2].toString()}m`
        return ansiBackgroundRgbStr
        };

    ResetAll() {
        return '\x1b[0m';
    };

};




const rgbColor = new RgbColor


module.exports = rgbColor;

