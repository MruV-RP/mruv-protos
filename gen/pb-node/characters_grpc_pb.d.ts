// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: characters.proto

import * as characters_pb from "./characters_pb";
import * as services_pb from "./services_pb";
import * as grpc from "grpc";

interface IMruVCharactersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getServiceStatus: grpc.MethodDefinition<services_pb.ServiceStatusRequest, services_pb.ServiceStatusResponse>;
  getServiceVersion: grpc.MethodDefinition<services_pb.VersionRequest, services_pb.VersionResponse>;
}

export const MruVCharactersServiceService: IMruVCharactersServiceService;

export class MruVCharactersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getServiceStatus(argument: services_pb.ServiceStatusRequest, callback: grpc.requestCallback<services_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: services_pb.ServiceStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceStatus(argument: services_pb.ServiceStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_pb.ServiceStatusResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: services_pb.VersionRequest, callback: grpc.requestCallback<services_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: services_pb.VersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_pb.VersionResponse>): grpc.ClientUnaryCall;
  getServiceVersion(argument: services_pb.VersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_pb.VersionResponse>): grpc.ClientUnaryCall;
}
