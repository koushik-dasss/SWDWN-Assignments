class UserManager{
    constructor(){
        this.users = [];
    }
    addUser(name){
        this.users.push(name);
    }
    getUsers(){
        return this.users;
    }
}
module.exports = new UserManager();