<template>
  <div>
    <GetLatestBlock />
    <AuthenticateButton />
    <SendTransaction />
  </div>
</template>

<script>
import GetLatestBlock from '../components/GetLatestBlock.vue';
import AuthenticateButton from '../components/AuthenticateButton.vue';
import SendTransaction from '../components/SendTransaction.vue';

export default {
    name: "IndexPage",
    components: {
    GetLatestBlock,
    AuthenticateButton,
    SendTransaction
}
}
</script>
