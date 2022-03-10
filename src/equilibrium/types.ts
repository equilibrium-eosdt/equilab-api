import type { Observable } from "rxjs";
export type UnwrapObservable<T> = T extends Observable<infer D> ? D : T;
export type UnwrapPromise<T> = T extends Promise<infer D> ? D : T;

/**
 * @deprecated
 */
export type Currency = "Usd" | "Eq" | "Eth" | "Btc" | "Eos" | "Dot" | "Crv";
export type SubAccType = "Borrower" | "Bailsman";
