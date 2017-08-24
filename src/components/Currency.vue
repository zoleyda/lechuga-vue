<template>
  <div class="container currency">
    <h2>{{ msg }}</h2>
    <h4>Seleccione el tipo de moneda</h4>
    <md-tabs md-centered class="md-transparent">
      <md-tab md-label="DÓLAR">
        <img src="../assets/dollars.png">
        <div class="row">
          <!-- <h2 class="text-center">$</h2> -->
          <div class="columns large-3 medium-6" v-for="(value, key) in currencyDolar" :index='value' :key='value'>
            <div class="card">
              <div class="card-divider-dolar text-center">
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
        <img src="../assets/euros.png">
        <div class="row">
          <!-- <h2 class="text-center">€</h2> -->
          <div class="columns large-3 medium-6" v-for="(value, key) in currencyEuro" :index='value' :key='value'>
            <div class="card">
              <div class="card-divider-euro text-center">
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
.card-divider-dolar {
    padding: 1rem;
    text-transform: uppercase;
    background: #8BC34A;
    color: #092d09;
}
.card-divider-euro {
    padding: 1rem;
    text-transform: uppercase;
    background: #31a5d8;
    color: #042b3c;
}
.card-section {
  font-weight: bold;
}

/deep/ .md-tabs .md-tab-header{
  font-size: 30px;
}
</style>
