import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputDate: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  add(): void {
    const negociacao = this.criarNegociacao();
    console.log(negociacao);

    this.inputDate.focus();
  }

  criarNegociacao(): Negociacao {
    const date = new Date(this.inputDate.value.replace(/-/g, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseInt(this.inputValor.value);

    return new Negociacao(date, quantidade, valor);
  }
}
