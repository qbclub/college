<script setup>
import { ref } from 'vue'
import ContentInfo from '../components/ContentInfo.vue'
import Advices from '../components/Advices.vue'
import KeyWords from '../components/KeyWords.vue'
import { useRoute, useRouter } from "vue-router"
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useDB } from '../stores/db'


let code = useRoute().query.code
const content = await useDB().getFromCode(code)

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
</script>

<template>
  <div>
    <div class="top-block">
      <div class="top-left">
        <div class="top-block-left" @click="getDialog('contentInfo')">Информация <br> о контенте</div>
        <div class="top-block-left" @click="getDialog('keyWords')"> Ключевые <br> слова</div>
      </div>

      <div class="top-block-right text-center pa-4">
        цифровой образовательный <br> контент
      </div>

    </div>

    <div class="theme">

      <div class="theme-right">Тема</div>
      <div class="theme-center"><span>{{ content.theme }}</span></div>

    </div>

    <div class="main">
      <div class="logo-container">
        <img src="../assets/icons/logo.webp">
      </div>
      <div class="main-left">

        <div class="nav">
          <div class="nav-button-learning">

            <div>
              <div>Освоение нового материала</div>
              <div class="description"> {{   content.interactive.type ==  "slides"? "Динамическая инфографика": "Видеолекция" }}   </div>
            </div>



            <div class="nav-button-description ">
              <div class="description-buttons">
                <img src="../assets/icons/advice.svg" class="mb-1" @click="getDialog('advices')">
                <img src="../assets/icons/play.svg" @click="routeTo('/content')">
              </div>
            </div>

          </div>



        </div>

        <div class="nav">
          <div class="nav-button-use ">

            <div>
              <div>Применение изученного материала</div>
              <div class="description">Виртуальный тренажер</div>
            </div>


            <div class="nav-button-description ">
              <div class="description-buttons">
                <img src="../assets/icons/advice.svg" class="mb-1" @click="getDialog('advices')">
                <img src="../assets/icons/play.svg" @click="routeTo('/quiz')">
              </div>
            </div>

          </div>

        </div>

        <div class="nav ">
          <div class="nav-button-test ">
            <div>
              <div>Диагностика приобретенных знаний, умений, навыков</div>
              <div class="description">Интерактивный тренажер по выполнению заданий</div>
            </div>

            <div class="nav-button-description">
              <div class="description-buttons">
                <img src="../assets/icons/advice.svg" class="mb-1" @click="getDialog('advices')">
                <img src="../assets/icons/play.svg" @click="routeTo('/test')">
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="main-right">
        <div class="fgos-mdk-code">
          <div class="fgos-title ">ФГОС СПО {{ content.fgos.code }}</div>
          <div class="fgos-name">{{ content.fgos.name }}</div>
          <!-- <div class="mdk-title">ПМ {{ content.pm.code }}</div>
          <div class="mdk-name">{{ content.pm.name }}</div>
          <div class="mdk-title">МДКн {{ content.mdk.code }}</div>
          <div class="mdk-name">{{ content.mdk.name }}</div> -->
        </div>
      </div>

    </div>

    <v-row justify="center">
      <v-dialog v-model="dialog" width="800" height="500">

        <v-card>
          <div style="position:relative;">
            <v-btn @click="dialog = false" icon="mdi-close" size="small" color="#456DB1" style="color: white; "
              class="close-btn">
            </v-btn>
          </div>
          <ContentInfo v-if="dialogContent == 'contentInfo'" />
          <KeyWords v-if="dialogContent == 'keyWords'" :code="code" />
          <Advices v-if="dialogContent == 'advices'" />
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.top-block {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;

  .top-left {
    display: flex;
    align-items: center;

    .top-block-left {
      cursor: pointer;
      width: 120px;
      height: 50px;
      // border-left: 3px solid #473a53;
      font-size: clamp(1rem, 0.7059rem + 0.4706vw, 1.25rem);
      padding-left: 10px;
      margin-left: 0px;
      line-height: 1.1;
      color: #473a53;

    }
  }

  .top-block-right {
    text-align: left;
    text-transform: uppercase;
    font-size: clamp(0.75rem, 0.4432rem + 1.0909vw, 1.125rem);
    color: rgba(0, 0, 0, 0.6);
  }

}

.theme {
  display: flex;
  align-items: center;
  padding: 0 4px;
  box-sizing: border-box;
  height: 100px;
  background-color: #fff;
  // border-top: 3px solid #473b53;
  // border-bottom: 3px solid #473b53;

  .theme-center {
    padding-left: 8px;
    text-transform: uppercase;
    line-height: 1;
    color: rgba(0, 0, 0, 0.6);
    font-size: clamp(1rem, 0.5909rem + 1.4545vw, 1.5rem);
  }

  .theme-right,
  .theme-left {
    color: rgba(0, 0, 0, .2);
    text-transform: uppercase;
    font-size: clamp(1.75rem, 1.3409rem + 1.4545vw, 2.25rem);
  }

  .theme-left {
    display: flex;
    justify-content: end;
    align-items: center;
  }
}

.main {
  padding: 0 30px;


  .main-left {
    display: flex;
    flex-direction: column;
    // justify-content: center;

    .nav {
      margin: 10px 0;
      display: flex;

      .nav-button-learning,
      .nav-button-use,
      .nav-button-test {
        width: 100%;
        background: white;
        display: flex;
        justify-content: space-between;
        padding: 8px;

        .nav-button-description {
          display: flex;
          font-size: clamp(0.875rem, 0.4338rem + 0.7059vw, 1.25rem);

          .description-buttons {
            width: 35px;
            font-size: clamp(2rem, 1.4118rem + 0.9412vw, 2.5rem);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            color: rgba(0, 0, 0, 0.6);

            img {
              width: 90%;
              cursor: pointer;
              opacity: 0.6;
            }

          }
        }


      }

      // .nav-button-learning {
      //   border: 2px solid #456DB1;
      // }

      // .nav-button-use {
      //   border: 2px solid #223a76;
      // }

      // .nav-button-test {
      //   border: 2px solid #483a53;
      // }



    }
  }

  .main-right {
    display: flex;
    flex-direction: column;

  }

  .logo-container {
    margin-top: 4px;
    text-align: right;
    // margin-bottom: 20px;

    img {
      width: 75px;
    }
  }


  .fgos-title,
  .mdk-title {
    text-transform: uppercase;
    font-size: clamp(1.3125rem, 0.6507rem + 1.0588vw, 1.875rem);
  }

  .fgos-name,
  .mdk-name {
    color: rgba(0, 0, 0, 0.6);
    font-size: clamp(1rem, 0.3382rem + 1.0588vw, 1.5625rem);
    margin-bottom: 20px;
  }


}

.description {
  color: rgba(0, 0, 0, .3);
  font-size: clamp(0.875rem, 0.4338rem + 0.7059vw, 1.25rem);
}

.close-btn {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1;
}
</style>
