<template>
  <header>
    <div class="icons">
      <riotGamesIcon class="riotGamesIcon" />
      <span class="splitter"></span>
      <valorantIcon class="valorantIcon" />
    </div>

    <div @click="toggleMenu()" class="openBtn" :class="checkToggle()">
      <span></span>
      <span></span>
    </div>

    <nav :class="checkToggle()">
      <ul>
        <li @click="toggleMenu()"><router-link to="/">Agents</router-link></li>
        <li @click="toggleMenu()"><router-link to="/weapons">Weapons</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
import riotGamesIcon from "./icons/riotGamesIcon.vue";
import valorantIcon from "./icons/valorantIcon.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    riotGamesIcon,
    valorantIcon,
  },
  methods: {
    ...mapActions(["toggleMenu"]),
    ...mapGetters(["checkToggle"]),
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

@media screen and (max-width: 992px) {
  header {
    padding: 20px 20px;

    .icons {
      svg {
        height: 25px;
      }
      span {
        margin: 0 15px;
        height: 25px;
      }
    }

    nav {
      width: 100%;
      background-color: #1f2326;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      top: 65px;
      left: -100%;
      opacity: 0;
      transition: all 200ms ease-in-out;
      padding: 45px 20px;
      z-index: 15;
      border-top: 1px solid #fff;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0;

        li {
          padding: 0;
          margin: 0;

          &:not(:last-child) {
            margin-right: 0px;
            margin-bottom: 20px;
          }

          a {
            margin: 0;
            padding: 0;
            font-size: 16px;
          }
        }
      }

      &.active {
        left: 0;
        opacity: 1;
      }
    }

    .openBtn {
      display: block;
      width: 25px;
      height: 25px;
      background-color: #1f2326;
      cursor: pointer;
      position: relative;

      span {
        position: absolute;
        transition: 180ms ease-in-out all;
        &:nth-child(1) {
          width: 25px;
          top: 8px;
        }
        &:nth-child(2) {
          width: 15px;
          top: 15px;
          right: 0;
        }

        height: 2px;
        background-color: #fff;
      }

      &.active {
        span {
          top: 50%;
          right: 0;
          transform: translate(-25%, -50%);

          &:nth-child(1) {
            width: 25px;
            height: 2px;

            transform: rotate(45deg);
          }
          &:nth-child(2) {
            width: 25px;
            height: 2px;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
}
</style>