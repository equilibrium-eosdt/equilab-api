import type { Observable } from "rxjs";
export type UnwrapObservable<T> = T extends Observable<infer D> ? D : T;
export type UnwrapPromise<T> = T extends Promise<infer D> ? D : T;
