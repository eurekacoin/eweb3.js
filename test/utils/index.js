require('dotenv').config();

module.exports = {
  /**
   * Returns the default EurekaCoin address.
   * @return {String} Default EurekaCoin address.
   */
  getDefaultEurekaCoinAddress: () => {
    if (!process.env.SENDER_ADDRESS) {
      throw Error('Must have SENDER_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.SENDER_ADDRESS));
  },

  /**
   * Returns the EurekaCoin network RPC url.
   * @return {String} The EurekaCoin network RPC url.
   */
  getEurekaCoinRPCAddress: () => {
    if (!process.env.EUREKACOIN_RPC_ADDRESS) {
      throw Error('Must have EUREKACOIN_RPC_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.EUREKACOIN_RPC_ADDRESS));
  },

  /**
   * Returns the wallet passphrase to unlock the encrypted wallet.
   * @return {String} The wallet passphrase.
   */
  getWalletPassphrase: () => (process.env.WALLET_PASSPHRASE ? String(Buffer.from(process.env.WALLET_PASSPHRASE)) : ''),

  isWalletEncrypted: async (qweb3) => {
    const res = await qweb3.getWalletInfo();
    return Object.prototype.hasOwnProperty.call(res, 'unlocked_until');
  },
};
