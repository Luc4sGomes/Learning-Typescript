export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }
  sub(n: number): this {
    this.numero -= n;
    return this;
  }
  div(n: number): this {
    this.numero /= n;
    return this;
  }
  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new Calculadora(10);
calculadora.add(5).mul(2).div(2).sub(5);
console.log(calculadora);

//Builder

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    return this;
  }

  send(): void {
    console.log(`Enviado dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://ww.google.com').setMethod('post').send();
