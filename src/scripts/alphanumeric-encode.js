

(() => {
    var capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    window.toAlphanumeric = (str, 
    ) => {
        return bigInt(str, 10).toString(62).replace(/<(\d{2,})>/g, m => capital[parseInt(m.slice(1, -1) - 36)]);
    }
    window.fromAlphanumeric = (encodedStr, base) => {
        return bigInt(encodedStr.replace(/[A-Z]/g, m => '<' + (capital.indexOf(m) + 36) + '>'), 62).toString(10);
    } 
})();
