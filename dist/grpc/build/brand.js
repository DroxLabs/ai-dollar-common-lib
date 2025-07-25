"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.5
//   protoc               v3.21.12
// source: brand.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandServiceClientImpl = exports.BrandServiceServiceName = exports.UpdateBrandRequest = exports.CreateBrandRequest = exports.BrandResponse = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "brand";
function createBaseBrandResponse() {
    return { id: "", userId: "", name: "", description: "", logoUrl: "", websiteUrl: "", createdAt: "", updatedAt: "" };
}
exports.BrandResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.logoUrl !== "") {
            writer.uint32(42).string(message.logoUrl);
        }
        if (message.websiteUrl !== "") {
            writer.uint32(50).string(message.websiteUrl);
        }
        if (message.createdAt !== "") {
            writer.uint32(58).string(message.createdAt);
        }
        if (message.updatedAt !== "") {
            writer.uint32(66).string(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrandResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.logoUrl = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.websiteUrl = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.createdAt = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.updatedAt = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            logoUrl: isSet(object.logoUrl) ? globalThis.String(object.logoUrl) : "",
            websiteUrl: isSet(object.websiteUrl) ? globalThis.String(object.websiteUrl) : "",
            createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
            updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.logoUrl !== "") {
            obj.logoUrl = message.logoUrl;
        }
        if (message.websiteUrl !== "") {
            obj.websiteUrl = message.websiteUrl;
        }
        if (message.createdAt !== "") {
            obj.createdAt = message.createdAt;
        }
        if (message.updatedAt !== "") {
            obj.updatedAt = message.updatedAt;
        }
        return obj;
    },
    create(base) {
        return exports.BrandResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBrandResponse();
        message.id = object.id ?? "";
        message.userId = object.userId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.logoUrl = object.logoUrl ?? "";
        message.websiteUrl = object.websiteUrl ?? "";
        message.createdAt = object.createdAt ?? "";
        message.updatedAt = object.updatedAt ?? "";
        return message;
    },
};
function createBaseCreateBrandRequest() {
    return { userId: "", name: "", description: undefined, logoUrl: undefined, websiteUrl: undefined };
}
exports.CreateBrandRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== undefined) {
            writer.uint32(26).string(message.description);
        }
        if (message.logoUrl !== undefined) {
            writer.uint32(34).string(message.logoUrl);
        }
        if (message.websiteUrl !== undefined) {
            writer.uint32(42).string(message.websiteUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateBrandRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.logoUrl = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.websiteUrl = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : undefined,
            logoUrl: isSet(object.logoUrl) ? globalThis.String(object.logoUrl) : undefined,
            websiteUrl: isSet(object.websiteUrl) ? globalThis.String(object.websiteUrl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== undefined) {
            obj.description = message.description;
        }
        if (message.logoUrl !== undefined) {
            obj.logoUrl = message.logoUrl;
        }
        if (message.websiteUrl !== undefined) {
            obj.websiteUrl = message.websiteUrl;
        }
        return obj;
    },
    create(base) {
        return exports.CreateBrandRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateBrandRequest();
        message.userId = object.userId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? undefined;
        message.logoUrl = object.logoUrl ?? undefined;
        message.websiteUrl = object.websiteUrl ?? undefined;
        return message;
    },
};
function createBaseUpdateBrandRequest() {
    return { userId: "", name: undefined, description: undefined, logoUrl: undefined, websiteUrl: undefined };
}
exports.UpdateBrandRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.name !== undefined) {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== undefined) {
            writer.uint32(26).string(message.description);
        }
        if (message.logoUrl !== undefined) {
            writer.uint32(34).string(message.logoUrl);
        }
        if (message.websiteUrl !== undefined) {
            writer.uint32(42).string(message.websiteUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        const end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateBrandRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.logoUrl = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.websiteUrl = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            description: isSet(object.description) ? globalThis.String(object.description) : undefined,
            logoUrl: isSet(object.logoUrl) ? globalThis.String(object.logoUrl) : undefined,
            websiteUrl: isSet(object.websiteUrl) ? globalThis.String(object.websiteUrl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        if (message.description !== undefined) {
            obj.description = message.description;
        }
        if (message.logoUrl !== undefined) {
            obj.logoUrl = message.logoUrl;
        }
        if (message.websiteUrl !== undefined) {
            obj.websiteUrl = message.websiteUrl;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateBrandRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateBrandRequest();
        message.userId = object.userId ?? "";
        message.name = object.name ?? undefined;
        message.description = object.description ?? undefined;
        message.logoUrl = object.logoUrl ?? undefined;
        message.websiteUrl = object.websiteUrl ?? undefined;
        return message;
    },
};
exports.BrandServiceServiceName = "brand.BrandService";
class BrandServiceClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.BrandServiceServiceName;
        this.rpc = rpc;
        this.Create = this.Create.bind(this);
        this.Update = this.Update.bind(this);
    }
    Create(request) {
        const data = exports.CreateBrandRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Create", data);
        return promise.then((data) => exports.BrandResponse.decode(new wire_1.BinaryReader(data)));
    }
    Update(request) {
        const data = exports.UpdateBrandRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Update", data);
        return promise.then((data) => exports.BrandResponse.decode(new wire_1.BinaryReader(data)));
    }
}
exports.BrandServiceClientImpl = BrandServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=brand.js.map