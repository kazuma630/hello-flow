<template>
  <div>
    <h2>send transaction</h2>
    <!-- <Code>{simpleTransaction}</Code> -->
    <Code>{{ `\
      transaction {
        execute {
          log("Hello World!!")
        }
      }
      ` }}
    </Code>
    <button @click="sendTransaction">
      Transaction Send
    </button>
    <p>{{ "Status:" + status }}</p>
    <Code v-if="transaction">{{ JSON.stringify(transaction, null, 2) }}</Code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Not started",
      transaction: undefined,
    };
  },
  methods: {
    async sendTransaction(event) {
      event.preventDefault()
      this.status = "Resolving..."

      const blockResponse = await this.$fcl.send([
        this.$fcl.getLatestBlock(),
      ])

      const block = await this.$fcl.decode(blockResponse)

      const simpleTransaction = `\
                                  transaction {
                                    execute {
                                      log("Hello World!!")
                                    }
                                  }
                                `
      try {
        const tx = await this.$fcl.send([
          this.$fcl.transaction(simpleTransaction),
          this.$fcl.proposer(this.$fcl.currentUser().authorization),
          this.$fcl.payer(this.$fcl.currentUser().authorization),
          this.$fcl.ref(block.id)
        ])

        const { transactionId } = tx
        this.status = `Transaction (${transactionId}) sent, waiting for confirmation`

        const unsub = this.$fcl
          .tx(transactionId)
          .subscribe(transaction => {
            this.transaction = transaction

            if (this.$fcl.tx.isSealed(transaction)) {
              this.status = `Transaction (${transactionId}) is Sealed`
              unsub()
            }
          })
      } catch (error) {
        console.error(error)
        this.status = "Transaction failed"
      }
    },
  },
}
</script>