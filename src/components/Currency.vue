<template>
  <div class="container currency">
    <h1>{{ msg }}</h1>
    <h3>Seleccione el tipo de moneda</h3>
    <md-tabs class="md-transparent">
      <md-tab md-label="DÓLAR">
        <div class="row">
          <h2 class="text-center">Dólar</h2>
          <div class="columns large-3 medium-6" v-for="(value, key) in currencyDolar" :index='value' :key='value'>
            <div class="card">
              <div class="card-divider text-center">
                {{ keys[key] }}
              </div>
              <div class="card-section text-center">
                <p>Bs. {{ value  }}</p>
              </div>
            </div>
          </div>
        </div>
      </md-tab>

      <md-tab md-label="Euro">
        <div class="row">
          <h2 class="text-center">Euro</h2>
          <div class="columns large-3 medium-6" v-for="(value, key) in currencyEuro" :index='value' :key='value'>
            <div class="card">
              <div class="card-divider text-center">
                {{ keys[key] }}
              </div>
              <div class="card-section text-center">
                <p>Bs. {{ value  }}</p>
              </div>
            </div>
          </div>
        </div>
      </md-tab>
    </md-tabs>
    <p>Made with <md-icon>favorite_border</md-icon> and vuejs</p>
  </div>
</template>

<script>
import axios from 'axios';
  const URL = 'https://lechuga.herokuapp.com'
  const KEYS = { 
    transferencia: 'Transferencia',
    transfer_cucuta: 'Transferencia Cúcuta',
    efectivo: 'Efectivo',
    efectivo_real: 'Efectivo real',
    efectivo_cucuta: 'Efectivo Cúcuta',
    promedio: 'Promedio',
    promedio_real: 'Promedio real',
    cencoex: 'Cencoex',
    sicad1: 'Sicad 1',
    sicad2: 'Sicad 2',
    bitcoin_ref: 'Bitcoin',
    dolartoday: 'Dolar Today'
  }
  export default {
    name:  'currency',
    data() {
      return {
        msg: 'Valor del Dolar y el Euro en Bolívares',
        keys: KEYS,
        currencyDolar: {},
        currencyEuro: {},
        currentCurrency: 'Dólar'
      }
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios.get(URL)
          .then((response) => {
            this.data = response.data;
            this.currencyDolar = response.data.USD;
            this.currencyEuro = response.data.EUR;
          })
          .catch((error) => { console.log(error); })
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
