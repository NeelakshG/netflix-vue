<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.png";

const signState = ref("Sign In");
const name = ref("");
const email = ref("");
const password = ref("");

const user_auth = async (event) => {
  event.preventDefault();

  if (signState.value === "Sign In") {
    await login(email.value, password.value);
  } else {
    await signup(name.value, email.value, password.value);
  }
};
</script>

<template>
  <div class="login">
    <img :src="logo" alt="" class="login-logo" />

    <div class="login-form">
      <h1>{{ signState }}</h1>

      <form @submit="user_auth">
        <!-- Name field (Sign Up only) -->
        <input
          v-if="signState === 'Sign Up'"
          v-model="name"
          type="text"
          placeholder="Your Name"
        />

        <input
          v-model="email"
          type="email"
          placeholder="Email"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          {{ signState }}
        </button>

        <div class="form-help">
          <div class="remember">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
      </form>

      <div class="form-switch">
        <p v-if="signState === 'Sign In'">
          New to Netflix?
          <span @click="signState = 'Sign Up'">Sign up Now</span>
        </p>

        <p v-else>
          Already have an account?
          <span @click="signState = 'Sign In'">Sign In Now</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  height: 100vh;
  background-image: linear-gradient(#0000007e, #0000007e),
    url(/background_banner.jpg);
  padding: 20px 8%;
}

.login-logo {
  width: 150px;
}

.login-form {
  width: 100%;
  max-width: 450px;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px;
  margin: auto;
}

.login-form h1 {
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 28px;
}

.login-form input {
  width: 100%;
  height: 50px;
  background: #333;
  color: white;
  margin: 12px 0;
  border: 0;
  outline: 0;
  border-radius: 4px;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 500;
}

.login-form input::placeholder {
  font-size: 16px;
  font-weight: 500;
}

.login-form button {
  width: 100%;
  border: 0;
  outline: 0;
  padding: 16px 20px;
  background: #e50914;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
}

.form-help {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b3b3b3;
  font-size: 13px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 5px;
}

.remember input {
  width: 18px;
  height: 18px;
}

.form-switch {
  margin-top: 40px;
  color: #737373;
}

.form-switch span {
  margin-left: 6px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
}
</style>
