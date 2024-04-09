<route>
    {
      meta: {
        layout: "auth"
      }
    }
    </route>

<script setup lang="ts">
// import { useRouter } from 'vue-router'

import { ref } from 'vue'
import Logo from '@/assets/images/logo.png'

// const router = useRouter()
const email = ref('')
const password = ref('')
const inValidEmail = ref(false)
const inValidPass = ref(false)

function handleGoogleLogin(response: any) {
  console.log('Handle the response', response)
}

function handleFacebookLogin() {

}

function handleLogin() {
  const isValidEmailFormat = /\S+@\S+\.\S+/.test(email.value) // Kiểm tra định dạng email

  if (!email.value || !isValidEmailFormat)
    inValidEmail.value = true
  else
    inValidEmail.value = false

  if (!password.value)
    inValidPass.value = true
  else
    inValidPass.value = false
}
</script>

<template>
  <div :class="$style.login">
    <div :class="$style.logo">
      <img :src="Logo" alt="logo">
    </div>
    <!-- <h1 :class="$style.title">
      Login to Guido
    </h1> -->
    <div :class="$style.inputWrap">
      <div :class="$style.inputBox">
        <div :class="$style.input">
          <el-icon><User /></el-icon>
          <input v-model="email" type="email" placeholder="Username or Email" @blur="handleLogin">
        </div>
        <span v-if="inValidEmail"><el-icon><WarningFilled /></el-icon>Please enter a valid email address</span>
      </div>
      <div :class="$style.inputBox">
        <div :class="$style.input">
          <el-icon><Lock /></el-icon>
          <input v-model="password" type="password" placeholder="Password" @blur="handleLogin">
        </div>
        <span v-if="inValidPass"><el-icon><WarningFilled /></el-icon>Please enter a valid email address</span>
      </div>
      <a href="#" :class="$style.porgotPassword"><el-icon><InfoFilled /></el-icon>Forgot password</a>
      <el-button :class="$style.btn" type="primary" @click="handleLogin">
        Login
      </el-button>
    </div>
    <div :class="$style.option">
      <p>Login with</p>
      <div>
        <el-icon :class="$style.icon">
          <ChromeFilled />
        </el-icon>

        <el-button :class="$style.btn" type="primary">
          <GoogleLogin :callback="handleGoogleLogin" :class="$style.googleLogin">
            Continue with Google
          </GoogleLogin>
        </el-button>
      </div>
      <div>
        <el-icon :class="$style.icon">
          <ElementPlus />
        </el-icon>
        <el-button :class="$style.btn" type="primary" @click="handleFacebookLogin">
          Continue with Facebook
        </el-button>
      </div>
    </div>

    <div :class="$style.other">
      <p>Don't have an account?</p>
      <el-button :class="$style.btn" round>
        Sign up
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" module>
.displayNone {
  display: none !important;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 20px;

  .logo {
    width: 300px;
    height: 220px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    font-size: 2rem;
    margin-top: 2rem;
    color: var(--color-primary)
  }

  .inputWrap {
    width: 100%;
    margin-top: 1rem;

    .inputBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      margin-top: 1rem;
      position: relative;

      .input {
        width: 100%;
        padding: 0.7rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;

        input {
          width: 100%;
          padding-left: 1rem;
          border: none;
          outline: none;
        }

      }

      span {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        color: red;
        margin-top: 4px;
      }

    }

    .porgotPassword {
      font-size: 0.9rem;
      color: var(--color-primary);
      margin-top: 0.4rem;
      width: 100%;
      justify-content: right;
      display: flex;
      align-items: center;
    }

    .btn {
        padding: 1.3rem 1rem;
        margin-top: 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: var(--color-primary);
        color: white;
        width: 100%;
        font-size: 1.2rem;
        font-weight: 500;
      }
  }

  .option {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 0.9rem;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1.7rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 1rem;
      position: relative;

      .icon {
        font-size: 1.5rem;
        color: white;
        position: absolute;
        left: 1rem;
      }

      .btn {
        width: 100%;
        padding: 1.3rem 1rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        font-weight: 500;
        background-color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: center;

        .googleLogin {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .btn:first-child {
        background-color: var(--color-secondary-dark);
      }
    }
  }

  .other {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1rem;
      color: var(--color-gray);
    }

    .btn {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      border: 1px solid var(--color-primary);
      border-radius: 1.6rem;
      color: var(--color-primary);
      background-color: white;
    }
  }
}
</style>
