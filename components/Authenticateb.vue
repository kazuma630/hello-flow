<template>
  <div>
    <AuthenticateButton :user="user"></AuthenticateButton>
  </div>
</template>

<script>
import AuthenticateButton from '~/components/AuthenticateButton.vue'
export default {
  components: {
    AuthenticateButton
  },
  data() {
    return {
      user: undefined,
    };
  },
  methods: {
    async signInOrOut(event) {
      event.preventDefault()

      if (loggedIn) {
      this.$fcl.unauthenticate()
      } else {
        this.$fcl.authenticate()
      }
    },
    setUser(user) {
      this.user = user
    }

  },
  mounted() {
    this.$fcl.currentUser().subscribe(user => setUser({...user})), []
  },
}
</script>