import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  moeda = 0;
  porcentagem = 0;
  total = 0;
  qntPessoas = 0;
  gorjetaPorPessoa = 0;
  valueCustom = 0;

  mensagemError = "";

  people: any[] = [];

  // this.valueCustom.addEventListener('keydown', (event: KeyboardEvent) => {
  //   if (event.key === 'Enter') {
  //     this.teste();
  //   }
  // });
  

  teste(btnValue: any){
  //se nao tiver valor no campo de pessoas, mostrar um erro e nao mostrar o bug

    this.porcentagem = btnValue.target.value;
    let porcentagemGorjeta = (this.moeda * this.porcentagem / 100);
    let quantidadePessoas = Number(porcentagemGorjeta) / this.qntPessoas;
    this.gorjetaPorPessoa = Number(quantidadePessoas.toFixed(2));
    let valorTotal = Number((this.moeda / this.qntPessoas) + quantidadePessoas).toFixed(2);
    
    this.total = Number(valorTotal);

    this.MensagemVaiza();
  }

  MensagemVaiza() {
    
    if(this.qntPessoas == 0) {
      this.mensagemError = "Can't be zero";
      this.gorjetaPorPessoa = 0;
      this.total = 0;
      return;
    }
    else {
      this.mensagemError = "";
    }
  }

  btnReset() {
    this.moeda = 0;
    this.porcentagem = 0;
    this.total = 0;
    this.qntPessoas = 0;
    this.gorjetaPorPessoa = 0;
  }

}


//  nome = "";
//  email = "";
//  senha = "";

//  people: any[] = [];

//   ngOnInit() {
//   }

//   clearFields() {
//   //limpa os campos
//   this.nome = "";
//   this.email = "";
//   this.senha = "";
//   }

//   register() {
//     let data = {
//       nome: this.nome,
//       email: this.email,
//       senha: this.senha
//     }
    
//     this.people.push(data)
//     console.log(this.people);

//     this.clearFields();
//   }

//campo de nome
//campo de e-mail
//campo de senha

//pegar o valor de cada um desses campos

//criar uma variável lista (array)
//dar push do objeto data na variável listaS

