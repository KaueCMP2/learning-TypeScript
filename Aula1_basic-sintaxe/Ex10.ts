//? -----------------------------------------------------------------
//? Exercicio 10
//? -----------------------------------------------------------------
//? Crie um tipo Produto com:
//? nome (string)
//? preco (number)
//? emPromocao (boolean)
//? Crie uma função calcularPrecoFinal que:
//? recebe um produto
//? se estiver em promoção → aplica 10% de desconto
//? retorna o preço final


type produtos = {
    nome: string;
    preco: number;
    emPromocao: boolean;
}

const cachorroQuente: produtos = { nome: "Hot-Dog", preco: 22, emPromocao: false };

const calcularPrecoFinal = (p: produtos) => (p.emPromocao ? console.log(`O ${p.nome} está custando: ${p.preco = p.preco - (p.preco % 10)}`) : console.log(`O ${p.nome} está custando: ${p.preco = p.preco}`));
calcularPrecoFinal(cachorroQuente);