import { users } from "../../utils/constants"


export const timeout = (ms) => new Promise(res => setTimeout(res,ms));

const login = async (data) => {
    const getUser = () => users.find(pred => pred.username === data.username && pred.password === data.password);
    await timeout(3000);
    return getUser(data);
}

export default {
    login
}