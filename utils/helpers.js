const aceItToEther = (amount) => {
    return amount / 100;
}

const etherToAceIt = (amount) => {
    return  100 * amount;
}

const sumObjectValue = (obj, key) => {
    return obj.reduce((acc, obj) => { return acc + obj[key]; }, 0)
}

export default {
    aceItToEther,
    etherToAceIt,
    sumObjectValue,
}