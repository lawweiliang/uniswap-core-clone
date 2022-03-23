const UniswapV2Factory = artifacts.require('UniswapV2Factory');

module.exports = async (deployer, network, [owner]) => {
  await deployer.deploy(UniswapV2Factory, owner);
};
