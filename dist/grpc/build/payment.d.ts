import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "payment";
export interface CreatePaymentIntentRequest {
    amount: string;
    currency: string;
}
export interface PaymentIntentResponse {
    clientSecretKey?: string | undefined;
}
export declare const CreatePaymentIntentRequest: MessageFns<CreatePaymentIntentRequest>;
export declare const PaymentIntentResponse: MessageFns<PaymentIntentResponse>;
export interface PaymentService {
    CreatePaymentIntent(request: CreatePaymentIntentRequest): Promise<PaymentIntentResponse>;
}
export declare const PaymentServiceServiceName = "payment.PaymentService";
export declare class PaymentServiceClientImpl implements PaymentService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreatePaymentIntent(request: CreatePaymentIntentRequest): Promise<PaymentIntentResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
