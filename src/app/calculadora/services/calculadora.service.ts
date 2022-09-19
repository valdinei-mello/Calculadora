/**
 * SErviço responsavel pelas operações
 * @author Valdinei
 * @since 1.0.0
 */





import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /*definicao de constante utilizadas nas operacoes*/
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que retorna o resultado de uma operação entre dois numeros3
   * 
   * @param num1 
   * @param num2 
   * @param operacao 
   * @return resultado
   */

  /*Metodos de calculo*/

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o resultado da aoperação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;

      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;

      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;

      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;

      default:
        resultado = 0;
    }


    return resultado;
  }
}
