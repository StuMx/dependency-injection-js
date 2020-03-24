export class Injector {
  static dependencies = {};

  static add(qualifier, obj){
    this.dependencies[qualifier] = obj;
  }

  static inject(func) {
    const instance = new func;
    const argument_names = this.getConstructorArgNames(instance)
    const dependencies = argument_names.map( name => this.dependencies[name] )
    func.apply(instance, dependencies)
    return instance
  }

  static getConstructorArgNames(instance) {
    const FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    return instance.constructor
      .toString()
      .match(FN_ARGS)[1]
      .split(',');
  }
}