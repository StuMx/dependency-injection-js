export class MessageController{
  constructor(Logger) {
    this.logger = Logger;
  }

  sendMessage(){
    this.logger.log("Message sent!")
  }
} 