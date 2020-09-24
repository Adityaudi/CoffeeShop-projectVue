<template>
  <div class="history">
    <div class="wrapper">
      <div class="header">
        <div class="icon-menu"><svg width="36" height="35" viewBox="0 0 36 35" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="0.3125" width="35.3528" height="35" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="translate(0 -0.00504031) scale(0.00195312)" />
              </pattern>
              <image id="image0" width="512" height="512"
                xlink:href="data:image/png;base64,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" />
            </defs>
          </svg></div>
        <div class="title-header">
          <h2>History</h2>
        </div>
        <div class="icon-search">
          <div><img src="@/assets/magnifying-glass.png" id="show-btn" @click="$bvModal.show('bv-modal-example')">
          </div>
        </div>
      </div>
      <!-- sidebar -->
      <div class="wrapper" id="sidebar">
        <div class="sidebar">
          <div class="sidebar-action">
            <div class="icon-menus">
              <router-link v-bind:to="'/home'">
                <img src="@/assets/fork.png"><span style="color:black;">Menus</span>
              </router-link>
            </div>
            <!-- HISTORY -->
            <div class="icon-history">
              <router-link v-bind:to="'/history'">
                <img src="@/assets/clipboard.png">
                <span>History</span>
              </router-link>
            </div>
            <div><img src="@/assets/add.png" @click="$bvModal.show('CRUD')">
              <b-modal id="CRUD" hide-footer header-border-variant="primary"><template v-slot:modal-title>
                  <h3>CoffeeShop <code>CRUD</code></h3>
                </template>
                <div class="d-block text-center">
                  <h2>CRUD not found! </h2><br>
                  <p style="float:left;">Change page:</p>
                </div>
                <b-button variant="outline-primary" block class="mt-3">
                  <router-link v-bind:to="'/'">
                    <h5 id="home">HOME</h5>
                  </router-link>
                </b-button>
                <b-button variant="danger" block class="mt-3" @click="$bvModal.hide('CRUD')">
                  <h5>Close</h5>
                </b-button>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <div class="shape">
        <div class="shape1">
          <p>Today`s Income</p>
          <h5>Rp. 1.000.000</h5>
          <h4>+2% Yesterday</h4>
          <img src="@/assets/Rectangle 9.png" id="background">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img1">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img2">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img3">
        </div>
        <div class="shape2">
          <p>Orders</p>
          <h5>3.270</h5>
          <h4>+5% Last Week</h4>
          <img src="@/assets/Rectangle 9-1.svg" id="background">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img1">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img2">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img3">
        </div>
        <div class="shape3">
          <p>This Year`s Income</p>
          <h5>Rp. 1.000.000.000.000</h5>
          <h4>+10% Last Year</h4>
          <img src="@/assets/Rectangle 9-2.svg" id="background">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img1">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img2">
          <img src="@/assets/Ellipse 1.svg" alt="" id="img3">
        </div>
      </div>
      <div class="chart">
        <img src="@/assets/Chart.png">
      </div>
      <div class="recent-order text-style" style="margin-bottom:1em;">
        <div class="container" style="padding-left: 6em;">
          <div class="row" style="background-color:#007BFe; color:white; border:1px solid black;">
            <div class="col-10">
              <h4>Recent Order</h4>
            </div>
            <div class="col-2">
              <div class="option-recent">
                <b-form-select v-model="selected" class="mb-1" style="background-color:#fff">
                  <b-form-select-option>Today</b-form-select-option>
                  <b-form-select-option>Month</b-form-select-option>
                  <b-form-select-option>Years</b-form-select-option>
                </b-form-select>
              </div>
            </div>
          </div>
          <div class="mt-3"></div>
          <div class="row font-recent-order" style="border-bottom:2px solid grey;">
            <div class="col">
              <h5>INVOICE</h5>
            </div>
            <div class="col">
              <h5>CASHIER</h5>
            </div>
            <div class="col">
              <h5>DATE</h5>
            </div>
            <div class="col">
              <h5>ORDERS</h5>
            </div>
            <div class="col">
              <h5>AMOUNT</h5>
            </div>
          </div>
          <div class="wrap">
            <div class="row data-history" v-for="items in history" :key="items.ID">
              <div class="col">
                <h5>#{{ items.invoices }}</h5>
              </div>
              <div class="col">
                <h5>{{ items.Cashier }}</h5>
              </div>
              <div class="col">
                <h5>{{ items.date }}</h5>
              </div>
              <div class="col">
                <h5>{{items.orders}}</h5>
              </div>
              <div class="col">
                <h5>{{items.amount}}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "History",
    data: function () {
      return {
        history: [],
      };
    },
    methods: {
      getHistory: function () {
        axios
          .get(process.env.VUE_APP_URL_HISTORY)
          .then((res) => {
            this.history = res.data;
          })
          .catch((err) => alert(err.message));
      },
    },
    mounted() {
      this.getHistory();
    },
  };
</script>

<style>
  .icon-history span,
  .icon-history a {
    color: white;
    background-color: #007BFe;

  }

  .container {
    z-index: -10000;
  }

  .header {
    background-color: white;
    width: 100%;
    height: 4.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 1;
    border-radius: 8px;
    border-bottom: #007BFF solid;
    box-shadow: 10px 10px rgba(144, 144, 144, 0.212);
  }

  .icon-menu {
    padding-left: 40px;
    cursor: pointer;
  }

  .icon-search {
    padding-right: 30px;
    cursor: pointer;
  }

  .sidebar {
    width: 4em;
    background-color: white;
    padding-top: 7em;
    margin-left: 1.5em;
    padding-bottom: 12em;
    border-radius: 8px;
    /* border: 1px gray solid; */
    border-bottom: #007BFF solid;
    box-shadow: 10px 10px rgba(144, 144, 144, 0.212);
    position: fixed;
    cursor: pointer;
  }

  .sidebar-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
  }

  .sidebar-action img:hover {
    transform: scale(1.1);
  }

  .sidebar-action img {
    padding: 1.4em;
  }

  #home {
    background-color: white;
  }

  .shape {
    width: 85%;
    height: 45%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 130px 0 0px 130px;
    position: fixed;
    z-index: -100;
  }

  .shape .shape1:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .shape .shape2:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .shape .shape3:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .shape .shape1 {
    filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
    border-radius: 10px;
    width: 30%;
    height: 70%;
    border: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%) solid;
  }

  .shape .shape2 {
    filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
    border-radius: 10px;
    width: 30%;
    height: 70%;
    border: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%) solid;
  }

  .shape .shape3 {
    filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.75));
    border-radius: 10px;
    width: 30%;
    height: 70%;
    border: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%) solid;
  }

  .shape img {
    width: 50%;
    height: 45%;
    padding-top: -100px;
  }

  .shape .shape1 #img1 {
    position: absolute;
    margin: 60px 0px 0px 110px;
  }

  .shape .shape1 #img2 {
    position: absolute;
    margin: 10px 0px 0px 160px;
  }

  .shape .shape1 #img3 {
    position: absolute;
    margin: -20px 0px 10px 200px;
  }

  .shape .shape2 #img1 {
    position: absolute;
    margin: 60px 0px 0px 110px;
  }

  .shape .shape2 #img2 {
    position: absolute;
    margin: 20px 0px 0px 165px;
  }

  .shape .shape2 #img3 {
    position: absolute;
    margin: -20px 0px 10px 200px;
  }

  .shape .shape3 #img1 {
    position: absolute;
    margin: 60px 0px 0px 110px;
  }

  .shape .shape3 #img2 {
    position: absolute;
    margin: 20px 0px 0px 165px;
  }

  .shape .shape3 #img3 {
    position: absolute;
    margin: -20px 0px 10px 200px;
  }

  .shape p {
    position: absolute;
    font-family: 'Airbnb Cereal App', sans-serif;
    font-size: 16px;
    margin: 45px 0 0 20px;
  }

  .shape h5 {
    position: absolute;
    font-family: 'Airbnb Cereal App', sans-serif;
    font-size: 28px;
    margin: 70px 0 0px 20px;
    z-index: 1;
    font-weight: 600;
  }

  .shape h4 {
    position: absolute;
    font-family: 'Airbnb Cereal App', sans-serif;
    font-size: 18px;
    margin: 110px 0 0px 20px;
    font-weight: 500;
  }

  .shape #background {
    position: absolute;
    z-index: -1;
    width: 105%;
    height: 100%;
  }

  .chart img {
    width: 91.6%;
    height: 35em;
    float: right;
    margin: 50% auto 42em;
    z-index: 99;
    border-top: #007BFF dotted 15px;
    box-shadow: 0px 10px rgba(144, 144, 144, 400) 100%;
    cursor: pointer;
  }

  .chart img:hover {
    border: #ffffff groove 40px;
  }

  .data-history {
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
  }

  .data-history h5 {
    font-weight: 400;
    text-align: center;
  }

  .col {
    text-align: center;
  }

  .wrap {
    overflow-x: hidden;
    overflow-y: auto;
    height: 16.5em;
    background-color: #007BFF;
  }
</style>