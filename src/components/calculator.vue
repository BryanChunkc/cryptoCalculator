<template>
  <div class="container">
    <div class="calculatorContainer">
      <div class="btc h4">BTC</div>
      <div class="input-group input-group-lg">
        <input
          type="text"
          class="form-control inputField"
          placeholder="Input BTC value"
          v-model="btcValue"
          @focus="$store.dispatch('updateInputFocus', 'btcInput')"
        />
      </div>
      <exchangeRate />
      <hr />
      <div class="btc h4">
        {{ $store.state.currency }}

        <span class="dropdown">
          <button
            class="btn btn-secondary"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="dropdownIcon">
              <i
                class="fa-solid fa-caret-down fa-xl"
                id="dropdownMenuButton"
              ></i>
            </span>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button
              class="dropdown-item"
              type="button"
              @click="
                $store.dispatch('changeCurrency', 'HKD'),
                  $store.dispatch('changeMoney', $store.state.btcValue),
                  $store.dispatch('calculation')
              "
            >
              HKD
            </button>
            <button
              class="dropdown-item"
              type="button"
              @click="
                $store.dispatch('changeCurrency', 'USD'),
                  $store.dispatch('changeMoney', $store.state.btcValue),
                  $store.dispatch('calculation')
              "
            >
              USD
            </button>
          </div>
        </span>
      </div>
      <div class="input-group input-group-lg">
        <input
          type="text"
          class="form-control inputField"
          placeholder="Input currency value"
          v-model="money"
          @focus="$store.dispatch('updateInputFocus', 'moneyInput')"
        />
      </div>
    </div>
    <socialShare />
  </div>
</template>

<script>
export default {
  computed: {
    btcValue: {
      get() {
        return this.$store.state.btcValue;
      },
      set(inputValue) {
        this.$store.dispatch("changeMoney", inputValue);
      },
    },
    money: {
      get() {
        return this.$store.state.money;
      },
      set(inputValue) {
        this.$store.dispatch("changeCrypto", inputValue);
      },
    },
  },
  components: {
    exchangeRate: require("./exchangeRate.vue").default,
    socialShare: require("./socialShare.vue").default,
  },
};
</script>

<style></style>
