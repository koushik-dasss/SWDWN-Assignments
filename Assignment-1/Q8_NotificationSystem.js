const EventEmitter = require('events');
class NotificationService extends EventEmitter{
    sendNotification(msg){
        this.emit('notify',msg);
    }
}
const service = new NotificationService();
service.on('notify' , msg => console.log("Email: ", msg));
service.on('notify' , msg => console.log("SMS: " , msg));
service.on('notify' , msg => console.log("Push: " , msg));
service.sendNotification("Your order shipped");