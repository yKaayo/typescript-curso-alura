import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputDate: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes()

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  add(): void {
    const negociacao = this.criarNegociacao();
    this.negociacoes.adiciona(negociacao)
    this.negociacoes.lista()
    console.log(this.negociacoes.lista());
    
    this.inputDate.focus();
  }

  criarNegociacao(): Negociacao {
    const date = new Date(this.inputDate.value.replace(/-/g, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseInt(this.inputValor.value);

    return new Negociacao(date, quantidade, valor);
  }
}
