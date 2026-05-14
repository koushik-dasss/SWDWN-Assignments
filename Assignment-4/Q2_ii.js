const consoleProxy = new Proxy(console,{
    get(target,prop){
        if(prop === "log"){
            return function(...args){
                const timestamp = new Date().toLocaleTimeString();
                target.log(`[${timestamp}]`, ...args);
            };
        }
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target): value;
    }
});
consoleProxy.log("Server started");
consoleProxy.log("Database connected")