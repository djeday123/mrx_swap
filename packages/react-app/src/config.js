import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x54E2845671F22Ad3891f6F10a6cfaBE41784c14e"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/uF054meRb4n9woo-cxPw82RAFiAVJtXD",
  },
};