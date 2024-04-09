<route>
    {
      meta: {
        layout: "auth"
      }
    }
    </route>

<script setup lang="ts">
// import { useRouter } from 'vue-router'

import Logo from '@/assets/images/logo.png'

// const router = useRouter()

function handleGoogleLogin() {

}

function handleFacebookLogin() {

}
</script>

<template>
  <div :class="$style.login">
    <div :class="$style.logo">
      <img :src="Logo" alt="logo">
    </div>
    <h1 :class="$style.title">
      Login to Guido
    </h1>
    <div :class="$style.input">
      <div>
        <input type="email" placeholder="Username or Email">
      </div>
      <el-button type="primary">
        Continue
      </el-button>
    </div>
    <div :class="$style.option">
      <p>Login with</p>
      <div>
        <el-button type="primary" @click="handleGoogleLogin">
          Continue with Google
        </el-button>
      </div>
      <div>
        <el-button type="primary" @click="handleFacebookLogin">
          Continue with Facebook
        </el-button>
      </div>
    </div>

    <div :class="$style.other">
      <p>Don't have an account?</p>
      <button>Sign up</button>
    </div>
  </div>
</template>

<style lang="scss" module>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 20px;

  .logo {
    width: 200px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 2rem;
    margin-top: 2rem;
  }

  .input {
    width: 100%;
    margin-top: 2rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
      }

      button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #000;
        color: white;
      }
    }
  }

  .option {
    width: 100%;
    margin-top: 2rem;

    p {
      font-size: 1.5rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      button {
        width: 100%;
        padding: 0.5rem;
        border: none;
        border-radius: 0.5rem;
      }
    }
  }

  .other {
    margin-top: 2rem;

    p {
      font-size: 1.5rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      background-color: #000;
      color: white;
    }
  }
}
</style>
