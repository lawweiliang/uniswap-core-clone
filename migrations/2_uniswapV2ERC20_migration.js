const UniswapV2ERC20 = artifacts.require('UniswapV2ERC20');

module.exports = async (deployer, network) => {
  await deployer.deploy(UniswapV2ERC20);
};
