
export const GrpcPackageToken = {
  AUTH: 'AUTH_PACKAGE',
  USER: 'USER_PACKAGE',
} as const;
export type GrpcPackageToken = typeof GrpcPackageToken[keyof typeof GrpcPackageToken];

export const GrpcProtoName = {
  AUTH: 'auth',
  USER: 'user',
} as const;
export type GrpcProtoName = typeof GrpcProtoName[keyof typeof GrpcProtoName];