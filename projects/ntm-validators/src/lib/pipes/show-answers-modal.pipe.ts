import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAnswersModal',
})
export class ShowAnswersModalPipe implements PipeTransform {
  transform(answers: any): any {
    const nfAnswer = 'mas não informou detalhes.';
    let answer = '';
    if (answers[0].answer == 'Sim') {
      answer += 'Egresso está trabalhando ';
      if (answers[1].answer != 'N/F') {
        answer += 'como ' + answers[1].answer;

        if (answers[2].answer != 'N/F') {
          answer += ', ganhando ' + answers[2].answer;
        } else {
          answer += nfAnswer;
        }
      } else {
        answer += nfAnswer;
      }
    } else {
      return 'Egresso não está trabalhando';
    }

    return answer;
  }
}
