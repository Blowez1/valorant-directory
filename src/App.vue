<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: "App",
  components : {
      Header
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
}

@font-face {
  font-family: "Montserrat Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Montserrat Regular"),
    url("./assets/fonts/Montserrat-Regular.woff") format("woff");
}

@font-face {
  font-family: "Montserrat Bold";
  font-style: bold;
  font-weight: bold;
  src: local("Montserrat Bold"),
    url("./assets/fonts/Montserrat-Bold.woff") format("woff");
}

body {
  font-family: "Montserrat Regular";
}
</style>
