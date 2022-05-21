<template>
  <div class="rateContainer">
    <div class="rate h6" ref="rate">
      <strong>Exchange Rate: </strong>1 BTC = {{ $store.state.bpi }}
      {{ $store.state.currency }}
    </div>
    <span class="spinIcon">
      <i
        class="fa-solid fa-arrows-rotate fa-xl"
        @click="$store.dispatch('calculation')"
      ></i>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
