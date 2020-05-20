class InstrumentacaoStats {
  constructor(valores) {
    this.valores = [...valores];
  }

  getQuantidade() {
    return this.valores.length;
  }

  getSoma() {
    return this.valores.reduce((anterior, atual) => anterior + atual, 0)
  }

  getMedia() {
    return this.getSoma() / this.getQuantidade();
  }

  getMediana() {
    const valoresOrdenados = this.valores.sort((a, b) => a - b);
    const medianaIndex = Math.floor(this.getQuantidade() / 2);

    return valoresOrdenados[medianaIndex];
  }

  getModa() {
    /*
      - O objeto deve ter como chave os valores da array, e como valor a frequência de 
      cada uma.
      - No caso de inexistência do elemento como propriedade, ela deverá ser criada 
      com o valor inicial de 1.
    */
    const count = {};
    this.valores.forEach((val) => count[val] = count[val] ? count[val] + 1 : 1);

    const countArray = Object.entries(count);
    const sortedCountArray = countArray.sort((a, b) => b[1] - a[1]);

    const mostFrequentValue = sortedCountArray[0][0];
    
    return mostFrequentValue;
  }

  getVariancia() {
    const media = this.getMedia();
    const somatorio = this.valores.reduce((anterior, atual) => anterior + Math.pow(atual - media, 2), 0);
    const quantidade = this.valores.length;
    return somatorio / (quantidade - 1);
  }

  getDesvioPadrao() {
    return Math.sqrt(this.getVariancia());
  }

  getIncertezaPadrao() {
    return this.getDesvioPadrao() / Math.sqrt(this.getQuantidade());
  }

  getValoresSorteados(ordem = 'asc') {
    switch (ordem.toLowerCase()) {
      case 'asc': // Crescente
        return this.valores.sort((a, b) => a - b);
      case 'desc': // Decrescente
        return this.valores.sort((a, b) => b - a);
      default:
        throw new Error('Ordem não válida', ordensValidas);
    }
  }

  info() {
    const mediaFormatada = this.getMedia().toFixed(4);
    const incertezaFormatada = this.getIncertezaPadrao().toFixed(4);
    
    console.log(this.getValoresSorteados('asc'));
    console.log(`Quantidade: ${this.getQuantidade()} itens`);
    console.log('Média: ' + this.getMedia());
    console.log('Mediana: ' + this.getMediana());
    console.log('Moda: ' + this.getModa());
    console.log('Variância: ' + this.getVariancia());
    console.log('Desvio Padrão: ' + this.getDesvioPadrao());
    console.log(`Incerteza Padrão: ${mediaFormatada} ± ${incertezaFormatada}`);
  }
}



module.exports = InstrumentacaoStats;