const NomadCoin = artifacts.require("./NomadToken.sol");

module.exports = function(deployer) {
    const _name = "Nomad Coin";
    const _symbol = "noMad";
    const _decimals = 18;

    deployer.deploy(DappToken, _name, _symbol, _decimals);
};