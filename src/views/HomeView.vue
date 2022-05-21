<template>
  <div class="content">
    <div class="title">Lite Cryptocurrency Exchange Calculator</div>
    <calculator />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  created() {
    this.$store.dispatch("calculation");
  },

  components: {
    calculator: require("./../components/calculator.vue").default,
  },
};
</script>
Calculator

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
* {
  font-family: "Poppins", sans-serif;
}

html {
  background: #d0d0d0;
}

.inputField {
  font-weight: bold;
}

.shareContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.shareIcon {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0.5em;
}
.fa-copy:hover {
  cursor: pointer;
  color: rgb(12, 12, 126);
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #d0d0d0;
}

.btc {
  margin-top: 1em;
  margin-left: 1em;
  text-align: left;
  margin-bottom: 1em;
  line-height: 0px;
  font-weight: bold;
  color: #717171;
}

.rate {
  padding-top: 5px;
  color: #717171;
}

.dropdown-item {
  padding: 1.25rem 1.5rem;
}

.btn-secondary {
  background: white !important;
  border-color: #ffffff !important;
}

.dropdownIcon {
  color: #717171;
}

.spinIcon {
  color: orange;
  padding-left: 10px;
}
.spinIcon:hover {
  cursor: pointer;
}

.title {
  font-size: 25px;
  margin-top: 20px;
  color: #717171;
  font-weight: 600;
}

.calculatorContainer {
  padding: 2em;
  padding-top: 4em;
}

.rateContainer {
  display: flex;
  margin-top: 20px;
  margin-left: 1em;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d0d0d0;
}

.container {
  margin-top: 30px;
  width: 45% !important;
  /* height: 400px; */
  left: 475px;
  top: 219px;

  background: #ffffff;
  box-shadow: 3px 3px 6px rgba(121, 121, 121, 0.16);
  border-radius: 23px;
}

@media screen and (min-width: 1440px) {
  .container {
    width: 600px !important;
  }
}
@media screen and (max-width: 850px) {
  .container {
    width: 450px !important;
  }
}
</style>
