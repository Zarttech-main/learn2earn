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

// function getAccounts (callback) {
//     web3.eth.getAccounts((error,result) => {
//         if (error) {
//             console.log(error);
//         } else {
//             callback(result);
//         }
//     });
// }

// function refreshAccounts () {
//     if (typeof window.web3 !== 'undefined') {
//         this.web3.eth.getAccounts((err, accs) => {
//             // console.log('Observed new accounts accs',accs);
//             console.log(' this.getProviderName ',
//               this.web3.givenProvider.networkVersion,
//             );
//             if (this.web3.givenProvider.networkVersion !== '4') {
//                 let linkTestnet = 'https://docs.binance.org/smart-chain/wallet/metamask.html#connect-your-metamask-with-binance-smart-chain'
//                 alert('Connect your  MetaMask wallet to Rinkeby testnet network!  \n  \n ');
//             }

//             if (err != null) {
//                 console.warn('There was an error fetching your accounts.');
//                 return;
//             }

//             // Get the initial account balance so it can be displayed.
//             if (accs.length === 0) {
//                 console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
//                 return;
//             }

//             if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
//                 console.log('Observed new accounts', accs);

//                 this.accountsObservable.next(accs);
//                 this.accounts = accs;
//                 localStorage.setItem("userAccount", this.accounts[0])
//                 console.log('Observed new accounts', this.accounts);
//             }

//             this.ready = true;
//         });
//     }
// };

// function enableAccounts () {
//     if (window.ethereum) {
//         window.web3 = new Web3(ethereum);
//         try {
//             // Request account access if needed
//             //Alter
//             ethereum.enable();
//             // get Logged in Account
//             getAccounts(function(result) {
//                 var account= result[0];
//                 // Get Account Balance
//                 web3.eth.getBalance("0xf91c2Fdc5382f2B04Ab4ecde0B04c2eA4F32eEE1", function(error, result){
//                     if(error) return console.log(error);
                    
//                     console.log("Eth balance is " + web3.utils.fromWei( result , 'ether'));
//                 });
//                 getTokenBalance();
//             });

//         } catch (error) {
//             // Alter User denied account access...
//         }
//     }
// }

// function getTokenBalance () {

//     var contract = new web3.eth.Contract(ABI, contractAddress);

//     getAccounts(function(result) {
//         // const account = result[0];
//         const tokensymbol;
//         contract.methods.symbol().call().then(function (symbol) {
//             tokensymbol=symbol ;
//         });

//         contract.methods.totalSupply().call().then(function (result) {
//             const tokenbalance = web3.utils.fromWei(result, 'ether');
//             return { "balance": tokenbalance, "symbol": tokensymbol }
//         });
//     });
// }

// function redeem ({ address, amount }) {
//     var contract = new web3.eth.Contract(ABI, contractAddress);
//     getAccounts(function(result) {
//         var account= result[0];
//         contract.methods.RedeemTokens(address, amount).send({ to : contractAddress, from: account, gas:400000}, function (error, transactonHash) {
//             console.log(transactonHash);
//         });
//     });
// }


export default {
    getAccount,
    purchaseTokens
}