# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [characters.proto](#characters.proto)
  
  
  
    - [MruVCharactersService](#mruv.MruVCharactersService)
  

- [items.proto](#items.proto)
    - [CreateItemRequest](#mruv.CreateItemRequest)
    - [CreateItemResponse](#mruv.CreateItemResponse)
    - [DestroyItemRequest](#mruv.DestroyItemRequest)
    - [DestroyItemResponse](#mruv.DestroyItemResponse)
    - [GetItemRequest](#mruv.GetItemRequest)
    - [GetItemResponse](#mruv.GetItemResponse)
    - [Item](#mruv.Item)
    - [UpdateItemRequest](#mruv.UpdateItemRequest)
    - [UpdateItemResponse](#mruv.UpdateItemResponse)
  
  
  
    - [MruVItemService](#mruv.MruVItemService)
  

- [services.proto](#services.proto)
    - [ServiceStatusRequest](#mruv.ServiceStatusRequest)
    - [ServiceStatusResponse](#mruv.ServiceStatusResponse)
    - [VersionRequest](#mruv.VersionRequest)
    - [VersionResponse](#mruv.VersionResponse)
  
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="characters.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## characters.proto


 

 

 


<a name="mruv.MruVCharactersService"></a>

### MruVCharactersService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetServiceStatus | [ServiceStatusRequest](#mruv.ServiceStatusRequest) | [ServiceStatusResponse](#mruv.ServiceStatusResponse) |  |
| GetServiceVersion | [VersionRequest](#mruv.VersionRequest) | [VersionResponse](#mruv.VersionResponse) |  |

 



<a name="items.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## items.proto



<a name="mruv.CreateItemRequest"></a>

### CreateItemRequest
Items


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [Item](#mruv.Item) |  |  |






<a name="mruv.CreateItemResponse"></a>

### CreateItemResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| itemId | [int64](#int64) |  |  |






<a name="mruv.DestroyItemRequest"></a>

### DestroyItemRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| itemId | [int64](#int64) |  |  |






<a name="mruv.DestroyItemResponse"></a>

### DestroyItemResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |






<a name="mruv.GetItemRequest"></a>

### GetItemRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| itemId | [int64](#int64) |  |  |






<a name="mruv.GetItemResponse"></a>

### GetItemResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [Item](#mruv.Item) |  |  |






<a name="mruv.Item"></a>

### Item



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  |  |
| name | [string](#string) |  |  |






<a name="mruv.UpdateItemRequest"></a>

### UpdateItemRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [Item](#mruv.Item) |  |  |






<a name="mruv.UpdateItemResponse"></a>

### UpdateItemResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |





 

 

 


<a name="mruv.MruVItemService"></a>

### MruVItemService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [CreateItemRequest](#mruv.CreateItemRequest) | [CreateItemResponse](#mruv.CreateItemResponse) |  |
| Destroy | [DestroyItemRequest](#mruv.DestroyItemRequest) | [DestroyItemResponse](#mruv.DestroyItemResponse) |  |
| Update | [UpdateItemRequest](#mruv.UpdateItemRequest) | [UpdateItemResponse](#mruv.UpdateItemResponse) |  |
| Get | [GetItemRequest](#mruv.GetItemRequest) | [GetItemResponse](#mruv.GetItemResponse) |  |
| GetServiceStatus | [ServiceStatusRequest](#mruv.ServiceStatusRequest) | [ServiceStatusResponse](#mruv.ServiceStatusResponse) | Service status |
| GetServiceVersion | [VersionRequest](#mruv.VersionRequest) | [VersionResponse](#mruv.VersionResponse) |  |

 



<a name="services.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## services.proto



<a name="mruv.ServiceStatusRequest"></a>

### ServiceStatusRequest







<a name="mruv.ServiceStatusResponse"></a>

### ServiceStatusResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [string](#string) |  |  |






<a name="mruv.VersionRequest"></a>

### VersionRequest







<a name="mruv.VersionResponse"></a>

### VersionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |
| buildDate | [string](#string) |  |  |
| commit | [string](#string) |  |  |
| osArch | [string](#string) |  |  |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

