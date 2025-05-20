const { calcularExpressao } = require('../calculadora');

test('1 - Somar dois números', () => {
    expect(calcularExpressao("2+3")).toBe(5);
});

test('2 - Subtrair dois números', () => {
    expect(calcularExpressao("5-2")).toBe(3);
});

test('3 - Dividir dois números', () => {
    expect(calcularExpressao("10/2")).toBe(5);
});

test('4 - Multiplicar dois números', () => {
    expect(calcularExpressao("4x2")).toBe(8);
});

test('5 - Adicionar dois números sem operador', () => {
    expect(calcularExpressao("2 2")).toBe("Erro");
});

test('6 - Adicionar operador mais de uma vez', () => {
    expect(calcularExpressao("3++4")).toBe("Erro");
});

test('7 - Operador diferente permitido pelo js', () => {
    expect(calcularExpressao("5%2")).toBe(1);

});

test('8 - Adicionar apenas valor ou operador', () => {
    expect(calcularExpressao("7")).toBe(7);
    expect(calcularExpressao("+")).toBe("Erro");
});

test('9 - Não digitar nenhum valor', () => {
    expect(calcularExpressao("")).toBe("Erro");
});

test('10 - Dividir número por zero', () => {
    expect(calcularExpressao("8/0")).toBe("Erro");
});

