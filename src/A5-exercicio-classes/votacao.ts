type votationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  //criando a classe principal que é a de votação
  private votationOptions: votationOption[] = []; //o array que sustenta as opções de votação
  public details: string;

  constructor(details: string) {
    this.details = details;
  }

  addVotationOption(votationOption: votationOption): void {
    this.votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this.votationOptions[votationIndex]) return;
    this.votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votatitonOptions(): votationOption[] {
    return this.votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      for (const votationOption of votation.votatitonOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
    }
  }
}

const votation1 = new Votation('qual sua linguagem de programacao favorita?');
votation1.addVotationOption({ option: 'js', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'java', numberOfVotes: 1 });
votation1.addVotationOption({ option: 'ts', numberOfVotes: 0 });
votation1.vote(1);
votation1.vote(0);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();

console.log('Oi');
