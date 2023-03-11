<template>
  <div v-if="user"> 
    <div>
      <button @click="signInOrOut">
        {{ user.loggedIn ? 'Sign Out' : 'Sign In/Up' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        loggedIn: false,
      },
    };
  },
  methods: {
    async signInOrOut(event) {
      event.preventDefault()

      if (this.user.loggedIn) {
        console.log("ログイン済み")
        this.$fcl.unauthenticate()
      } else {
        console.log("ログインしていない")
        this.$fcl.authenticate()
      }
    },
  },
  mounted() {
    this.$fcl.currentUser().subscribe((user) => (this.user = user));
  },
}
</script>