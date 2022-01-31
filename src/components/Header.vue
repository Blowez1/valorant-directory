<template>
  <header>
    <div class="icons">
      <riotGamesIcon class="riotGamesIcon" />
      <span class="splitter"></span>
      <valorantIcon class="valorantIcon" />
    </div>

    <nav>
      <ul>
        <li><router-link to="/">Agents</router-link></li>
        <li><router-link to="/weapons">Weapons</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
import riotGamesIcon from "./icons/riotGamesIcon.vue";
import valorantIcon from "./icons/valorantIcon.vue";

export default {
  name: "Header",
  components: {
    riotGamesIcon,
    valorantIcon,
  },
};
</script>
<style lang="scss" scoped>
header {
  background-color: #1f2326;
  padding: 35px 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icons {
  display: flex;
  align-items: center;
}

.splitter {
  width: 2px;
  margin: 0 50px;
  height: 40px;
  background-color: #fff;
}

nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      &:not(:last-child) {
        margin-right: 50px;
      }

      a {
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        transition: 200ms ease-in-out color;
        text-decoration: none;

        &.router-link-exact-active {
          color: #ff4656;
        }

        &:hover {
          color: #ff4656;
        }
      }
    }
  }
}
</style>