import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    btcValue: "",
    bpi: 0,
    money: "",
    currency: "HKD",
    inputFocus: "btcInput",
  },
  getters: {},
  mutations: {
    changeMoney(state, inputValue) {
      state.btcValue = inputValue;
      state.btcValue != ""
        ? (state.money = inputValue * state.bpi)
        : (state.money = "");
    },
    changeCrypto(state, inputValue) {
      state.money = inputValue;
      state.money != ""
        ? (state.btcValue = inputValue / state.bpi)
        : (state.btcValue = "");
    },
    changeCurrency(state, currency) {
      state.currency = currency;
    },
    changeBPI(state, res) {
      state.currency === "HKD"
        ? (state.bpi = res.data.bpi.HKD.rate_float)
        : (state.bpi = res.data.bpi.USD.rate_float);

      state.inputFocus != "btcInput"
        ? state.money != ""
          ? (state.btcValue = state.money / state.bpi)
          : (state.btcValue = "")
        : state.btcValue != ""
        ? (state.money = state.btcValue * state.bpi)
        : (state.money = "");
    },
    updateInputFocus(state, inputField) {
      state.inputFocus = inputField;
      console.log(state.inputFocus);
    },
    copy(state) {
      var text =
        "The Exchange rate now is 1 BTC = " + state.bpi + " " + state.currency;
      console.log(text);
      navigator.clipboard.writeText(text);
      alert("Exchange rate copied to clipboard!");
    },
  },
  actions: {
    calculation({ commit }) {
      axios("https://api.coindesk.com/v1/bpi/currentprice/HKD.json").then(
        (res) => {
          commit("changeBPI", res);
          console.log(res.data);
        }
      );
    },
    changeMoney({ commit }, inputValue) {
      commit("changeMoney", inputValue);
    },
    changeCrypto({ commit }, inputValue) {
      commit("changeCrypto", inputValue);
    },
    changeCurrency({ commit }, currency) {
      commit("changeCurrency", currency);
    },
    updateInputFocus({ commit }, inputField) {
      commit("updateInputFocus", inputField);
    },
    copy({ commit }) {
      commit("copy");
    },
  },
  modules: {},
});
