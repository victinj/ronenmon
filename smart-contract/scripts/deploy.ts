import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Roninmon contract...");

  const Roninmon = await ethers.getContractFactory("Roninmon");
  const roninmon = await Roninmon.deploy();

  await roninmon.waitForDeployment();

  const contractAddress = await roninmon.getAddress();
  console.log(`Roninmon contract deployed to: ${contractAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
