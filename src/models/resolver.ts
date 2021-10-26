export abstract class Resolver {
    abstract resolve<T>(): () => T;
}