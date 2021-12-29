import { ethers } from 'ethers';
import { ABI } from '../../utils/constants';

const contractAddress = "0xf91c2Fdc5382f2B04Ab4ecde0B04c2eA4F32eEE1"; //0xf91c2Fdc5382f2B04Ab4ecde0B04c2eA4F32eEE1

const getAccount = async () => {
    const { ethereum } = window

    if (!ethereum) {
        return alert('Please install MetaMask!');
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if(!accounts.length) return alert("No, account found. please create an account on metamask");

    console.log("Found an account", accounts[0]);
    return accounts[0];
}

const _getContract = () => {
    const { ethereum } = window;

    if(!ethereum) return alert("Please install and connect to metamask or refresh the page to try again");

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, ABI, signer);
    return contract
}

const purchaseTokens = async ( { amount, account } ) => {
    try {
        //get a contract instance
        const contract = _getContract();

        // call a contract function
        const trx = await contract?.purchaseTokens({
            from: account,
            gasLimit: 400000,
            value : ethers.utils.parseEther(amount.toString()),
        });

        return trx.hash;
    } catch (err) {
        console.log(err);
    }
}

const redeemTokens = async ({ amount }) => {
    try {
        //get a contract instance
        const contract = _getContract();
        const address = localStorage.getItem("wallet");
        const account = getAccount();

        // call a contract function
        const trx = await contract?.RedeemTokens(address, ethers.utils.parseEther(amount.toString()));

        return trx.hash;
    } catch (err) {
        console.log(err);
    }
}

const setTest = async ({ testid, testreward, studentsSize }) => {
    try {
        console.log('ll: ', testid, testreward, studentsSize);
        //get a contract instance
        const contract = _getContract();

        const account = getAccount();

        // call a contract function
        const trx = await contract?.setTest(account, testid, ethers.utils.parseEther(testreward.toString()), studentsSize);

        return trx.hash;
    } catch(err) {
        console.log('error***:', err);
    }
}

export default {
    getAccount,
    redeemTokens,
    purchaseTokens,
    setTest,
}