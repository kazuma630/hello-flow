import * as fcl from "@blocto/fcl"

fcl.config()
  .put("accessNode.api", "https://access-testnet.onflow.org") // connect to Flow testnet
  .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn") // use Blocto testnet wallet

export default ({ app }, inject) => {
  inject("fcl", fcl);
};