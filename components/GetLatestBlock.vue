<template>
  <div>
    <button @click="runGetLatestBlock">Get Latest Block</button>
    <!-- <p>{{ testdata }}</p> -->
    <!-- <p>{{data && <Code>{JSON.stringify(data, null, 2)}</Code>}}</p> -->
    <br />
    <Code v-if="testdata">{{ JSON.stringify(testdata, null, 2) }}</Code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testdata: undefined,
    };
  },
  methods: {
    async runGetLatestBlock(event) {
      event.preventDefault()

      const response = await this.$fcl.send([
        this.$fcl.getLatestBlock(),
      ])

      this.testdata = await this.$fcl.decode(response)
    }
  }
}
</script>