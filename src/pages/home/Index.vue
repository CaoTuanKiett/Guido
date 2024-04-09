<route>
  {
    meta: {
      layout: "auth"
    }
  }
</route>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '@/assets/images/logo.png'

const router = useRouter()

const dataSlide = ref([
  {
    title: 'Find the best guide 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Find the best guide 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Find the best guide 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
])

const currentIndex = ref(0)

function goToSlide(index) {
  currentIndex.value = index
}

function switchLogin() {
  console.log('switchLogin')
  router.push('/auth/login')
}
function switchSignUp() {
  router.push('/auth/login')
}
</script>

<template>
  <div :class="$style.home">
    <div :class="$style.logo">
      <img :src="Logo" alt="logo">
    </div>
    <div :class="$style.slide">
      <div v-for="(item, index) in dataSlide" :key="index" :class="$style.slideItem" :style="{ transform: `translateX(-${currentIndex.value * 100}%)` }">
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
      </div>
      <div class="dots">
        <span v-for="(item, index) in dataSlide" :key="index" :class="{ active: index === currentIndex.value }" @click="goToSlide(index)" />
      </div>
    </div>

    <div :class="$style.footer">
      <button @click="switchLogin">
        Login
      </button>
      <div :class="$style.other">
        <p>Create account <span @click="switchSignUp">Sign Up</span></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .logo {
    width: 370px;
    height: 370px;
    margin-top: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .slide {
    width: 100%;
    height: 100px;
    overflow: hidden;
    position: relative;
    margin-top: 40px;

    .slideItem {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: transform 0.5s;
      text-align: center;
      padding: 15px;

      h1 {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        color: #333;
      }
    }

    .dots {
    margin-top: 10px;
    display: flex;
    justify-content: center;

    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 5px;
      cursor: pointer;
    }

    .active {
      background-color: var(--color-primary);
    }
  }

  }

  .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 30px;

      button {
        border: none;
        width: 100%;
        padding: 10px;
        background-color: var(--color-primary);
        color: white;
        cursor: pointer;
        border-radius: 20px;
        font-size: 1.2rem;
        font-weight: bold;
      }

      .other {
        p {
          font-size: 0.8rem;
          color: #333;

          span {
            font-size: 1rem;
            color: var(--color-primary);
            cursor: pointer;
          }
        }
      }
    }

}
</style>
