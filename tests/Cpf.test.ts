import {validate} from '../src/Cpf';

test("Deve retornar false para cpf null", function() {
    const isValid = validate(null);
    expect(isValid).toBe(false);
});

test("Deve retornar false para cpf com tamanho menor que 11", function (){
    const isValid = validate("1234567890");
    expect(isValid).toBe(false);
});

test("Deve retornar false para cpf com tamanho maior que 14", function (){
    const isValid = validate("123456789012345");
    expect(isValid).toBe(false);
});

test("Deve retornar false para cpf com todos os numeros iguais", function (){
    const isValid = validate("11111111111");
    expect(isValid).toBe(false);
});

const validCpfs = ["328.480.840-06", "32848084006", "426.279.780-55"]
test.each(validCpfs)("Deve retornar true para cpf válido", function (validCpf){
    const isValid = validate(validCpf);
    expect(isValid).toBe(true);
});