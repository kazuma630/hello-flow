<template>
  <div v-if="user"> 
    <div>
      <button @click="signInOrOut">
        {{ user.loggedIn ? 'Sign Out' : 'Sign In/Up' }}
      </button>
      <p>address: {{ user?.addr  }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        loggedIn: false,
        addr: undefined,
      },
    };
  },
  methods: {
    async signInOrOut(event) {
      event.preventDefault()

      if (this.user.loggedIn) {
        console.log("ログイン済み")
        this.$fcl.currentUser().subscribe(console.log) // 現在のユーザー情報の取得
        this.$fcl.unauthenticate()
        this.user.loggedIn = false
        this.user.addr = undefined
      } else {
        console.log("ログインしていない")
        this.$fcl.currentUser().subscribe(console.log)
        this.$fcl.authenticate()
      }
    },
  },
  mounted() {
    this.$fcl.currentUser().subscribe((user) => (this.user = user));
  },
}
</script>