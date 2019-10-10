import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as services_pb from './services_pb';

export class CreateItemRequest extends jspb.Message {
  getItem(): Item | undefined;
  setItem(value?: Item): void;
  hasItem(): boolean;
  clearItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateItemRequest): CreateItemRequest.AsObject;
  static serializeBinaryToWriter(message: CreateItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateItemRequest;
  static deserializeBinaryFromReader(message: CreateItemRequest, reader: jspb.BinaryReader): CreateItemRequest;
}

export namespace CreateItemRequest {
  export type AsObject = {
    item?: Item.AsObject,
  }
}

export class CreateItemResponse extends jspb.Message {
  getItemid(): number;
  setItemid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateItemResponse): CreateItemResponse.AsObject;
  static serializeBinaryToWriter(message: CreateItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateItemResponse;
  static deserializeBinaryFromReader(message: CreateItemResponse, reader: jspb.BinaryReader): CreateItemResponse;
}

export namespace CreateItemResponse {
  export type AsObject = {
    itemid: number,
  }
}

export class DestroyItemRequest extends jspb.Message {
  getItemid(): number;
  setItemid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyItemRequest): DestroyItemRequest.AsObject;
  static serializeBinaryToWriter(message: DestroyItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyItemRequest;
  static deserializeBinaryFromReader(message: DestroyItemRequest, reader: jspb.BinaryReader): DestroyItemRequest;
}

export namespace DestroyItemRequest {
  export type AsObject = {
    itemid: number,
  }
}

export class DestroyItemResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyItemResponse): DestroyItemResponse.AsObject;
  static serializeBinaryToWriter(message: DestroyItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyItemResponse;
  static deserializeBinaryFromReader(message: DestroyItemResponse, reader: jspb.BinaryReader): DestroyItemResponse;
}

export namespace DestroyItemResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class UpdateItemRequest extends jspb.Message {
  getItem(): Item | undefined;
  setItem(value?: Item): void;
  hasItem(): boolean;
  clearItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateItemRequest): UpdateItemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateItemRequest;
  static deserializeBinaryFromReader(message: UpdateItemRequest, reader: jspb.BinaryReader): UpdateItemRequest;
}

export namespace UpdateItemRequest {
  export type AsObject = {
    item?: Item.AsObject,
  }
}

export class UpdateItemResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateItemResponse): UpdateItemResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateItemResponse;
  static deserializeBinaryFromReader(message: UpdateItemResponse, reader: jspb.BinaryReader): UpdateItemResponse;
}

export namespace UpdateItemResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class GetItemRequest extends jspb.Message {
  getItemid(): number;
  setItemid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemRequest): GetItemRequest.AsObject;
  static serializeBinaryToWriter(message: GetItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemRequest;
  static deserializeBinaryFromReader(message: GetItemRequest, reader: jspb.BinaryReader): GetItemRequest;
}

export namespace GetItemRequest {
  export type AsObject = {
    itemid: number,
  }
}

export class GetItemResponse extends jspb.Message {
  getItem(): Item | undefined;
  setItem(value?: Item): void;
  hasItem(): boolean;
  clearItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemResponse): GetItemResponse.AsObject;
  static serializeBinaryToWriter(message: GetItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemResponse;
  static deserializeBinaryFromReader(message: GetItemResponse, reader: jspb.BinaryReader): GetItemResponse;
}

export namespace GetItemResponse {
  export type AsObject = {
    item?: Item.AsObject,
  }
}

export class Item extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    id: number,
    name: string,
  }
}

