<template>
  <main>
    <section class="container">
      <div class="agents-side">
        <Swiper class="swiper agents" :options="swiperOption">
          <SwiperSlide v-for="(agent, index) in agents" :key="index">
            <div class="agent">
              <div class="agent-body">
                <div class="agent-image">
                  <img v-lazy="agent.fullPortrait" :alt="agent.displayName" />
                </div>
                <div class="agent-info">
                  <div class="agent-role">{{ agent.role.displayName }}</div>
                  <div class="agent-name">{{ agent.displayName }}</div>
                </div>
              </div>
              <div class="agent-skills">
                <div
                  class="agent-skill"
                  v-for="(ability, index) in agent.abilities"
                  :key="index"
                >
                  <img :src="ability.displayIcon" />
                  <span class="agent-skill-name">{{
                    ability.displayName
                  }}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </main>
</template>
<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay } from "swiper";
export default {
  name: "Agents",
  mounted() {
    this.$store.dispatch("getAgents");
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState(["agents"]),
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 150,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        modules: [Autoplay],
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 55,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 150,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Druk Wide Medium";
  src: url("../assets/fonts/7e389c5e310dc537b083e0e25ea6eab5.ttf")
    format("truetype"); /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
}

@import url(https://unpkg.com/swiper@7/swiper-bundle.min.css);

#app {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../assets/img/background.jpg);
  width: 100%;
  height: 100%;
}

main {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 120px 0 119px 0;
  overflow-x: hidden;
}

.container {
  width: 100%;
  position: relative;
}

.agents-side {
  &::before {
    content: "Agents";
    font-size: 100px;
    position: absolute;
    top: 240px;
    left: -15px;
    font-family: "Druk Wide Medium";
    color: #fff;
    transform: rotate(90deg);
    text-transform: uppercase;
    letter-spacing: 5px;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #fff;
  }
}

.agents {
  margin-left: 420px;
  position: relative;
  padding: 20px 40px;

  .agent {
    position: relative;

    &-body {
      background-color: #1f2326;
      width: 280px;
      height: 550px;
      position: relative;

      .agent-image {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;

        img {
          width: 1000px;
          object-fit: cover;
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translate(-40%, -33%);

          &[lazy="loading"] {
            
            left: 50%;
            top: 50%;
            width: auto;
            transform: translate(-50%, -50%);
          }
        }
      }

      .agent-info {
        position: absolute;
        right: 0px;
        left: -255px;
        top: 240px;
        transform: rotate(90deg);

        .agent-role {
          font-family: "Druk Wide Medium";
          font-size: 20px;
          color: #ff4656;
          letter-spacing: 5px;
        }

        .agent-name {
          font-family: "Druk Wide Medium";
          font-size: 45px;
          color: #ff4656;
          text-transform: uppercase;
          letter-spacing: 5px;
          -webkit-text-fill-color: rgba(0, 0, 0, 0);
          -webkit-text-stroke: 1px #fff;
        }
      }
    }

    .agent-skills {
      position: absolute;
      display: flex;
      background-color: #1f2326;
      border: 2px solid #fff;
      align-items: center;
      justify-content: space-between;
      left: 25px;
      bottom: -20px;

      padding: 8px 25px;

      .agent-skill {
        img {
          height: 50px;
          cursor: pointer;
        }

        display: flex;
        justify-content: center;
        align-items: center;

        &:not(:last-child) {
          margin-right: 10px;
        }

        position: relative;

        &-name {
          font-family: "Druk Wide Medium";
          font-size: 13px;
          color: #fff;
          position: absolute;
          display: inline-block;

          background-color: #1f2326;
          border: 2px solid #db3b49;
          padding: 5px 12px;
          top: -35px;
          left: 10px;
          z-index: 10;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
          opacity: 0;
          transition: 200ms ease-in-out opacity;

          &::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 10px;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid #db3b49;
          }
        }

        &:hover {
          .agent-skill-name {
            opacity: 1;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  main {
    padding: 100px 0;
    position: relative;
    min-height: calc(100vh - 65px);
  }

  .agents {
    margin-left: 0px;
    position: relative;
    padding: 20px 45px;
  }

  .agents-side {
    width: 100vw;
    position: relative;
    margin-top: 50px;

    &::before {
      content: "Agents";
      font-size: 50px;
      position: absolute;
      top: -95px;
      left: 50%;
      font-family: "Druk Wide Medium";
      color: #fff;
      transform: rotate(0deg) translateX(-50%);
      text-transform: uppercase;
      letter-spacing: 5px;
      -webkit-text-fill-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 1px #fff;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }
}
</style>