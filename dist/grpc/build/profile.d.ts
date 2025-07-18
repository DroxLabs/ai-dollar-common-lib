import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "profile";
export interface ProfileResponse {
    id: string;
    userId: string;
    username: string;
    name: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    twitter: string;
    github: string;
    youtube: string;
    linkedin: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface CreateProfileRequest {
    userId: string;
    username: string;
    name?: string | undefined;
    avatarUrl?: string | undefined;
    bio?: string | undefined;
    websiteUrl?: string | undefined;
    twitter?: string | undefined;
    github?: string | undefined;
    youtube?: string | undefined;
    linkedin?: string | undefined;
}
export interface UpdateProfileRequest {
    userId: string;
    username?: string | undefined;
    name?: string | undefined;
    avatarUrl?: string | undefined;
    bio?: string | undefined;
    websiteUrl?: string | undefined;
    twitter?: string | undefined;
    github?: string | undefined;
    youtube?: string | undefined;
    linkedin?: string | undefined;
}
export interface GetProfileByUserIdRequest {
    userId: string;
}
export declare const ProfileResponse: MessageFns<ProfileResponse>;
export declare const CreateProfileRequest: MessageFns<CreateProfileRequest>;
export declare const UpdateProfileRequest: MessageFns<UpdateProfileRequest>;
export declare const GetProfileByUserIdRequest: MessageFns<GetProfileByUserIdRequest>;
export interface ProfileService {
    Create(request: CreateProfileRequest): Promise<ProfileResponse>;
    Update(request: UpdateProfileRequest): Promise<ProfileResponse>;
    GetByUserId(request: GetProfileByUserIdRequest): Promise<ProfileResponse>;
}
export declare const ProfileServiceServiceName = "profile.ProfileService";
export declare class ProfileServiceClientImpl implements ProfileService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Create(request: CreateProfileRequest): Promise<ProfileResponse>;
    Update(request: UpdateProfileRequest): Promise<ProfileResponse>;
    GetByUserId(request: GetProfileByUserIdRequest): Promise<ProfileResponse>;
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
