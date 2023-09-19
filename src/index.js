module.exports = function toReadable(number) {



    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    if (number === 10) { return 'ten'; }

    if (number === 0) {
        return 'zero';
    } else if (number < 10) {
        return units[number];
    } else if (number < 20) {
        return teens[number - 10];
    } else if (number < 100) {
        const ten = Math.floor(number / 10);
        const unit = number % 10;
        return tens[ten] + (unit > 0 ? ' ' + units[unit] : '');
    } else if (number < 1000) {
        const hundred = Math.floor(number / 100);
        const remaining = number % 100;
        return units[hundred] + ' hundred' + (remaining > 0 ? ' ' + toReadable(remaining) : '');
    }

    return 'Number out of range';
}
// toReadable(999);

