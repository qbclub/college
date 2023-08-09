<script setup>
import { ref,watch } from 'vue'
import content from "../db/1301100102.js"
import ContentInfo from '../components/ContentInfo.vue'
import Advices from '../components/Advices.vue'
import KeyWords from '../components/KeyWords.vue'
import SmallScreen from '../components/SmallScreen.vue'
import { useRouter } from "vue-router"
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'


const breakpoints = useBreakpoints(breakpointsTailwind)

const smallScreen = breakpoints.smaller('lg') // only smaller than lg
let router = useRouter()

let dialog = ref(false)
let dialogContent = ref('')

let getDialog = (content) => {
  dialog.value = true
  dialogContent.value = content
}
let routeTo = (path) => {
  router.push(path)
}
watch(smallScreen, (x) => {
  if(x){
  dialog.value = true
  dialogContent.value = "smallScreen"
  }
})

</script>

<template>
  <div class="top-block">
    <div class="top-left">
      <div class="top-block-left" @click="getDialog('contentInfo')">Информация <br> о контенте</div>
      <div class="top-block-left" @click="getDialog('keyWords')"> Ключевые <br> слова</div>
    </div>

    <div class="top-block-right">
      цифровой образовательный контент
    </div>
  </div>
  <div class="theme">
    <div class="theme-right">Тема</div>
    <div class="theme-center">{{ content.theme }}</div>
    <div class="theme-left">Спо</div>

  </div>
  <div class="main">
    <div class="main-left">
      <div class="nav">
        <div class="nav-button-befor learning"></div>
        <div class="nav-button-learning">
          <div class="nav-button-title learning"> Освоение нового материала</div>
          <div class="nav-button-icon learning">
            <div class="icon-wrapper">
              <img src="../assets/icons/book.webp">
            </div>
          </div>
          <div class="nav-button-description ">
            <div class="description-text">
              <div class="description-title">{{content.theme}}</div>
              <div class="description">Динамическая инфографика</div>
            </div>
            <div class="description-buttons">
              <img src="../assets/icons/advice.webp" @click="getDialog('advices')">
              <img src="../assets/icons/play.webp" @click="routeTo('/content')">
            </div>
          </div>

        </div>
        <div class="nav-button-after learning"> </div>

      </div>
      <div class="nav">
        <div class="nav-button-befor use"></div>
        <div class="nav-button-use ">
          <div class="nav-button-title use"> Применение изученного материала</div>
          <div class="nav-button-icon use">
            <div class="icon-wrapper">
              <img src="../assets/icons/use.webp" >
            </div>
          </div>
          <div class="nav-button-description ">
            <div class="description-text">
              <div class="description-title">{{content.theme}}</div>
              <div class="description">Виртуальный тренажер</div>
            </div>
            <div class="description-buttons">
              <img src="../assets/icons/advice.webp" @click="getDialog('advices')">
              <img src="../assets/icons/play.webp" @click="routeTo('/quiz')">
            </div>
          </div>
        </div>
        <div class="nav-button-after use"> </div>
      </div>
      <div class="nav ">
        <div class="nav-button-befor test"></div>
        <div class="nav-button-test ">
          <div class="nav-button-title test"> Диагностика приобретенных знаний, умений, навыков</div>
          <div class="nav-button-icon test">
            <div class="icon-wrapper">
              <img src="../assets/icons/test.webp">
            </div>
          </div>
          <div class="nav-button-description ">
            <div class="description-text">
              <div class="description-title">{{content.theme}}</div>
              <div class="description">Интерактивный тренажер по выполнению заданий</div>
            </div>
            <div class="description-buttons">
              <img src="../assets/icons/advice.webp" @click="getDialog('advices')">
              <img src="../assets/icons/play.webp" @click="routeTo('/test')">
            </div>
          </div>
        </div>
        <div class="nav-button-after test">

        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="logo-container">
        <img src="../assets/icons/logo.webp">
      </div>
      <div class="fgos-mdk-code">
        <div class="fgos-title ">ФГОС СПО {{ content.fgos.code }}</div>
        <div class="fgos-name">{{ content.fgos.name }}</div>
        <div class="mdk-title">МДКн {{ content.mdk.code }}</div>
        <div class="mdk-name">{{ content.mdk.name }}</div>
        <div class="mdk-title">МДКн {{ content.mdk.code }}</div>
        <div class="mdk-name">{{ content.mdk.name }}</div>
      </div>
    </div>

  </div>

  <v-row justify="center">
    <v-dialog v-model="dialog" width="800" height="500">

      <v-card>
        <div class="pa-1 d-flex justify-end">
          <v-btn @click="dialog = false" icon="mdi-close" size="small" color="#456DB1" style="color: white;">
          </v-btn>
        </div>
        <ContentInfo v-if="dialogContent == 'contentInfo'" />
        <KeyWords v-if="dialogContent == 'keyWords'" />
        <Advices v-if="dialogContent == 'advices'" />
        <SmallScreen v-if="dialogContent == 'smallScreen'" />
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style lang="scss">
.top-block {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;

  .top-left {
    display: flex;
    align-items: center;

    .top-block-left {
      cursor: pointer;
      width: 140px;
      height: 50px;
      border-left: 5px solid #473a53;
      font-size: 20px;
      padding-left: 15px;
      margin-left: 8px;
      line-height: 1.1;
      color: #473a53;

    }
  }

  .top-block-right {

    text-transform: uppercase;
    font-size: 35px;
    color: rgba(0, 0, 0, 0.6);
  }

}

.theme {
  display: flex;
  align-items: center;
  padding: 0 25px;
  box-sizing: border-box;
  height: 150px;
  background-color: #fff;
  border-top: 5px solid #473b53;
  border-bottom: 5px solid #473b53;

  .theme-center {
    text-transform: uppercase;
    line-height: 1;
    text-transform: uppercase;
    color: #473a53;
    font-size: 36px;
    padding: 0 25px;
    margin-left: 8px;
  }

  .theme-right,
  .theme-left {
    width: 150px;
    color: rgba(0, 0, 0, .2);
    transform: scaleY(1.5) scaleX(.9);
    text-transform: uppercase;
    font-size: 48px;
  }

  .theme-left {
    display: flex;
    justify-content: end;
    align-items: center;
  }
}

.main {
  padding: 0 30px;
  display: flex;

  .main-left {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .nav {
      height: 160px;
      margin: 10px 0;
      display: flex;

      .learning {
        background: #456DB1;
      }

      .use {
        background: #223a76;
      }

      .test {
        background: #483a53;
      }

      .nav-button-befor {
        width: 10px;
        height: 100%;
      }

      .nav-button-learning,
      .nav-button-use,
      .nav-button-test {
        width: 100%;
        background: white;
        margin: 0 10px;
        display: flex;

        .nav-button-title {
          width: 30%;
          height: 100%;
          color: white;
          display: flex;
          align-items: center;
          font-size: 22px;
          padding: 0 20px;

        }

        .nav-button-icon {
          width: 150px;
          height: 100%;
          border-bottom-right-radius: 50%;
          border-top-right-radius: 50%;
          box-shadow: 3px -5px 3px 0 rgba(0, 0, 0, .2);
          display: flex;
          justify-content: center;
          align-items: center;

          .icon-wrapper {
            background-color: #fff;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;

            box-shadow: inset 3px -5px 3px 0 rgba(0, 0, 0, .2);

            img {
              width: 60%;
            }
          }
        }

        .nav-button-description {
          display: flex;
          font-size: 20px;
          flex-shrink: 100;

          .description-text {
            flex-shrink: 100;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 15px;

            .description {
              color: rgba(0, 0, 0, .3);
              font-size: 18px;
            }


          }

          .description-buttons {
            width: 50px;

            font-size: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            color: rgba(0, 0, 0, 0.6);

            img {
              width: 80%;
              cursor: pointer;
            }

          }
        }


      }

      .nav-button-learning {
        border: 2px solid #456DB1;
      }

      .nav-button-use {
        border: 2px solid #223a76;
      }

      .nav-button-test {
        border: 2px solid #483a53;
      }

      .nav-button-after {
        width: 45px;
        height: 100%;
        border-radius: 0 100% 100% 0/0 50% 50% 0;

      }


    }
  }

  .main-right {
    width: 30%;
    display: flex;
    flex-direction: column;

    margin: 20px 0;

  }

  .logo-container {
    text-align: center;
    // margin-bottom: 20px;
    padding: 20px;

    img {
      width: 100%;
    }
  }

  .fgos-mdk-code {
    margin-left: 50px;
  }

  .fgos-title,
  .mdk-title {
    text-transform: uppercase;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.6);
    margin: 10px 0;

    &:after {
      content: "";
      display: block;
      width: 40%;
      height: 4px;
      background-color: rgba(71, 58, 83, .85);

    }
  }

  .fgos-name,
  .mdk-name {
    color: #473a53;
    font-size: 25px;
  }


}
</style>
