function calcularExpressao(input) {
    if (!input) return "Erro";
    input = input.replace(/x/g, '*');
    try {
      const resultado = new Function('return ' + input)();
      if (resultado === Infinity || resultado === -Infinity || isNaN(resultado)) {
        return "Erro";
      }
      return resultado;
    } catch {
      return "Erro";
    }
   }
   module.exports = { calcularExpressao };