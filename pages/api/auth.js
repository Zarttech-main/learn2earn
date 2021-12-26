import { users } from "../../utils/constants"

const login = async (data) => {
    const timeout = (ms) => new Promise(res => setTimeout(res,ms));
    const getUser = () => users.find(pred => pred.username === data.username && pred.password === data.password);
    await timeout(3000);
    return getUser(data);
}

export default {
    login
}