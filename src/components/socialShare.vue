<template>
  <div class="shareContainer">
    <div class="h6">Share the exchange rate to others!</div>
    <div class="shareIcon">
      <router-link to="/fb"
        ><i class="fa-brands fa-facebook fa-xl"></i
      ></router-link>
      <router-link to="/twitter"
        ><i class="fa-brands fa-twitter fa-xl"></i
      ></router-link>
      <span style="color: #007bff">
        <i class="fa-solid fa-copy fa-xl" @click="$store.dispatch('copy')"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
