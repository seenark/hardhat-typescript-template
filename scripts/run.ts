import { ethers } from 'hardhat';
import { MyNFT__factory } from './../typechain/factories/MyNFT__factory';


async function main() {
    const MyNFTFactory = await ethers.getContractFactory("MyNFT") as MyNFT__factory
    const myNftContract = await MyNFTFactory.deploy()
    await myNftContract.deployed()
    console.log("Contract deployed to:", myNftContract.address);
    console.log('transaction hash', myNftContract.deployTransaction.hash)

    // mint nft 
    let tx = await myNftContract.makeNFT()
    await tx.wait()
    console.log('tx hash:', tx.hash)
    // mint again
    tx = await myNftContract.makeNFT()
    await tx.wait()
    console.log('tx hash:', tx.hash)

}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();