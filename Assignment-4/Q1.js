class Database{
    constructor(){
        this.users=[];
    }
    saveUser(user){
        this.users.push(user);
        console.log("User saved successfully");
    }
    getAllUsers(){
        return this.users;
    }
    findUserByName(name){
        return this.users.find(user => user.name === name);
    }
}
// UserService Class using Dependency Injection
class UserService{
    constructor(database){
        this.database = database;
    }
    createUser(name,age){
        const user = {name,age};
        this.database.saveUser(user);
    }
    listUsers(){
        return this.database.getAllUsers();
    }
    getUser(name){
        return this.database.findUserByName(name);
    }
} 
// Injecting Dependency
const db = new Database();
const userService = new UserService(db);
userService.createUser("Koushik",14);
userService.createUser("Roman",69);
console.log("All Users: ");
console.log(userService.listUsers());
console.log("Find User: ");
console.log(userService.getUser("Koushik"));




