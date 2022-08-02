export default {
  name: "AcaoHoje",
  data() {
    return {
      valorMercado: 0,
    }
  },
  template: `<p>Valor da apple: {{valorMercado}}</p>`,
  methods: {
    puxarAcao() {
      fetch("https://api.origamid.dev/stock/aapl/quote")
      .then(r => r.json())
      .then(r => {
        this.valorMercado = r.marketCap;
      })
    }
  },
  created() {
    this.puxarAcao();
  }
}