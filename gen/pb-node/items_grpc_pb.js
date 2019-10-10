// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var items_pb = require('./items_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var services_pb = require('./services_pb.js');

function serialize_mruv_CreateItemRequest(arg) {
  if (!(arg instanceof items_pb.CreateItemRequest)) {
    throw new Error('Expected argument of type mruv.CreateItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_CreateItemRequest(buffer_arg) {
  return items_pb.CreateItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_CreateItemResponse(arg) {
  if (!(arg instanceof items_pb.CreateItemResponse)) {
    throw new Error('Expected argument of type mruv.CreateItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_CreateItemResponse(buffer_arg) {
  return items_pb.CreateItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_DestroyItemRequest(arg) {
  if (!(arg instanceof items_pb.DestroyItemRequest)) {
    throw new Error('Expected argument of type mruv.DestroyItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_DestroyItemRequest(buffer_arg) {
  return items_pb.DestroyItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_DestroyItemResponse(arg) {
  if (!(arg instanceof items_pb.DestroyItemResponse)) {
    throw new Error('Expected argument of type mruv.DestroyItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_DestroyItemResponse(buffer_arg) {
  return items_pb.DestroyItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetItemRequest(arg) {
  if (!(arg instanceof items_pb.GetItemRequest)) {
    throw new Error('Expected argument of type mruv.GetItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetItemRequest(buffer_arg) {
  return items_pb.GetItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetItemResponse(arg) {
  if (!(arg instanceof items_pb.GetItemResponse)) {
    throw new Error('Expected argument of type mruv.GetItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetItemResponse(buffer_arg) {
  return items_pb.GetItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServiceStatusRequest(arg) {
  if (!(arg instanceof services_pb.ServiceStatusRequest)) {
    throw new Error('Expected argument of type mruv.ServiceStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServiceStatusRequest(buffer_arg) {
  return services_pb.ServiceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_ServiceStatusResponse(arg) {
  if (!(arg instanceof services_pb.ServiceStatusResponse)) {
    throw new Error('Expected argument of type mruv.ServiceStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_ServiceStatusResponse(buffer_arg) {
  return services_pb.ServiceStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_UpdateItemRequest(arg) {
  if (!(arg instanceof items_pb.UpdateItemRequest)) {
    throw new Error('Expected argument of type mruv.UpdateItemRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_UpdateItemRequest(buffer_arg) {
  return items_pb.UpdateItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_UpdateItemResponse(arg) {
  if (!(arg instanceof items_pb.UpdateItemResponse)) {
    throw new Error('Expected argument of type mruv.UpdateItemResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_UpdateItemResponse(buffer_arg) {
  return items_pb.UpdateItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_VersionRequest(arg) {
  if (!(arg instanceof services_pb.VersionRequest)) {
    throw new Error('Expected argument of type mruv.VersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_VersionRequest(buffer_arg) {
  return services_pb.VersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_VersionResponse(arg) {
  if (!(arg instanceof services_pb.VersionResponse)) {
    throw new Error('Expected argument of type mruv.VersionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_VersionResponse(buffer_arg) {
  return services_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MruVItemServiceService = exports.MruVItemServiceService = {
  create: {
    path: '/mruv.MruVItemService/Create',
    requestStream: false,
    responseStream: false,
    requestType: items_pb.CreateItemRequest,
    responseType: items_pb.CreateItemResponse,
    requestSerialize: serialize_mruv_CreateItemRequest,
    requestDeserialize: deserialize_mruv_CreateItemRequest,
    responseSerialize: serialize_mruv_CreateItemResponse,
    responseDeserialize: deserialize_mruv_CreateItemResponse,
  },
  destroy: {
    path: '/mruv.MruVItemService/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: items_pb.DestroyItemRequest,
    responseType: items_pb.DestroyItemResponse,
    requestSerialize: serialize_mruv_DestroyItemRequest,
    requestDeserialize: deserialize_mruv_DestroyItemRequest,
    responseSerialize: serialize_mruv_DestroyItemResponse,
    responseDeserialize: deserialize_mruv_DestroyItemResponse,
  },
  update: {
    path: '/mruv.MruVItemService/Update',
    requestStream: false,
    responseStream: false,
    requestType: items_pb.UpdateItemRequest,
    responseType: items_pb.UpdateItemResponse,
    requestSerialize: serialize_mruv_UpdateItemRequest,
    requestDeserialize: deserialize_mruv_UpdateItemRequest,
    responseSerialize: serialize_mruv_UpdateItemResponse,
    responseDeserialize: deserialize_mruv_UpdateItemResponse,
  },
  get: {
    path: '/mruv.MruVItemService/Get',
    requestStream: false,
    responseStream: false,
    requestType: items_pb.GetItemRequest,
    responseType: items_pb.GetItemResponse,
    requestSerialize: serialize_mruv_GetItemRequest,
    requestDeserialize: deserialize_mruv_GetItemRequest,
    responseSerialize: serialize_mruv_GetItemResponse,
    responseDeserialize: deserialize_mruv_GetItemResponse,
  },
  // Service status
  getServiceStatus: {
    path: '/mruv.MruVItemService/GetServiceStatus',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.ServiceStatusRequest,
    responseType: services_pb.ServiceStatusResponse,
    requestSerialize: serialize_mruv_ServiceStatusRequest,
    requestDeserialize: deserialize_mruv_ServiceStatusRequest,
    responseSerialize: serialize_mruv_ServiceStatusResponse,
    responseDeserialize: deserialize_mruv_ServiceStatusResponse,
  },
  getServiceVersion: {
    path: '/mruv.MruVItemService/GetServiceVersion',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.VersionRequest,
    responseType: services_pb.VersionResponse,
    requestSerialize: serialize_mruv_VersionRequest,
    requestDeserialize: deserialize_mruv_VersionRequest,
    responseSerialize: serialize_mruv_VersionResponse,
    responseDeserialize: deserialize_mruv_VersionResponse,
  },
};

exports.MruVItemServiceClient = grpc.makeGenericClientConstructor(MruVItemServiceService);
