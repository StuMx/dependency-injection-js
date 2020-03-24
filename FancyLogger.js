export class FancyLogger {
  log(message){
    console.log(`[${new Date()}]: ${message}` );
  }
}