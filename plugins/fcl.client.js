import * as fcl from "@blocto/fcl"

fcl.config()
  .put("accessNode.api", "https://access-testnet.onflow.org") // connect to Flow testnet. mainnet → https://access-mainnet-beta.onflow.org
  .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn") // use Blocto testnet wallet. mainnet → https://flow-wallet.blocto.app/authn

export default ({ app }, inject) => {
  inject("fcl", fcl);
};