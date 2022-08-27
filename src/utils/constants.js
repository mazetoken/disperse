export const chains = {
  dogechain: 2000,
  dogechain_testnet: 568,
};

export const disperseAddresses = {
  2000:
    import.meta.VITE_DISPERSE_DOGECHAIN ||
    "0x63c8f8a8dfaf72c22753285534e36718c4fe4f5c",
  568:
    import.meta.VITE_DISPERSE_DOGECHAIN_TESTNET ||
    "0xf17698bd0a8864cb37db9eb2334d63331145250d",
};

export const scans = {
  2000: "https://explorer.dogmoney.money/",
  //2000: "https://explorer.dogechain.dog/",
  568: "https://explorer-testnet.dogechain.dog",
};

export const warnMessage =
  "*Supports Dogechain, Dogechain testnet";