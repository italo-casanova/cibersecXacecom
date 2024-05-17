const NewsRanking = artifacts.require("NewsRanking");

module.exports = function(deployer) {
   
  deployer.deploy(NewsRanking);
};
