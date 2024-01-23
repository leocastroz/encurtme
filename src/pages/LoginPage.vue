<template>
  <div>
    <h1>Login</h1>
    <form @submit.stop.prevent="submit">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import Cookie from 'js-cookie';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  created() {
    Cookie.remove('token')
  },
  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password
      };
      fetch(`http://127.0.0.1:8000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(res => {
        Cookie.set('token', res.token)
        console.log(res)
      })
    }
  }
}
</script>
