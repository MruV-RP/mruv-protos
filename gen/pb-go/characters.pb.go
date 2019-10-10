// Code generated by protoc-gen-go. DO NOT EDIT.
// source: characters.proto

package mruv

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("characters.proto", fileDescriptor_26e03172b7884e33) }

var fileDescriptor_26e03172b7884e33 = []byte{
	// 202 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x48, 0xce, 0x48, 0x2c,
	0x4a, 0x4c, 0x2e, 0x49, 0x2d, 0x2a, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0xc9, 0x2d,
	0x2a, 0x2d, 0x93, 0x92, 0x49, 0xcf, 0xcf, 0x4f, 0xcf, 0x49, 0xd5, 0x4f, 0x2c, 0xc8, 0xd4, 0x4f,
	0xcc, 0xcb, 0xcb, 0x2f, 0x49, 0x2c, 0xc9, 0xcc, 0xcf, 0x83, 0xaa, 0x91, 0xe2, 0x2b, 0x4e, 0x2d,
	0x2a, 0xcb, 0x4c, 0x4e, 0x85, 0xf2, 0x8d, 0x9e, 0x32, 0x72, 0x89, 0xfa, 0x16, 0x95, 0x86, 0x39,
	0xc3, 0x0d, 0x0b, 0x86, 0x28, 0x10, 0xca, 0xe2, 0x12, 0x70, 0x4f, 0x2d, 0x81, 0xf2, 0x82, 0x4b,
	0x12, 0x4b, 0x4a, 0x8b, 0x85, 0xa4, 0xf4, 0x40, 0x56, 0xe8, 0xa1, 0x08, 0x06, 0xa5, 0x16, 0x96,
	0xa6, 0x16, 0x97, 0x48, 0x49, 0x63, 0x95, 0x2b, 0x2e, 0xc8, 0xcf, 0x2b, 0x4e, 0x55, 0x92, 0x6d,
	0xba, 0xfc, 0x64, 0x32, 0x93, 0xb8, 0x90, 0xa8, 0x3e, 0xc2, 0xd5, 0xfa, 0x65, 0x86, 0xfa, 0xc5,
	0x10, 0x73, 0x13, 0xb8, 0x04, 0x11, 0x76, 0x85, 0xa5, 0x16, 0x15, 0x67, 0xe6, 0xe7, 0x09, 0x89,
	0x40, 0x0c, 0x84, 0x72, 0x61, 0xd6, 0x88, 0xa2, 0x89, 0x42, 0x2d, 0x90, 0x03, 0x5b, 0x20, 0x21,
	0x24, 0x86, 0x66, 0x41, 0x19, 0x44, 0x5d, 0x12, 0x1b, 0xd8, 0xbb, 0xc6, 0x80, 0x00, 0x00, 0x00,
	0xff, 0xff, 0xab, 0x4a, 0xa5, 0x20, 0x36, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MruVCharactersServiceClient is the client API for MruVCharactersService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MruVCharactersServiceClient interface {
	GetServiceStatus(ctx context.Context, in *ServiceStatusRequest, opts ...grpc.CallOption) (*ServiceStatusResponse, error)
	GetServiceVersion(ctx context.Context, in *VersionRequest, opts ...grpc.CallOption) (*VersionResponse, error)
}

type mruVCharactersServiceClient struct {
	cc *grpc.ClientConn
}

func NewMruVCharactersServiceClient(cc *grpc.ClientConn) MruVCharactersServiceClient {
	return &mruVCharactersServiceClient{cc}
}

func (c *mruVCharactersServiceClient) GetServiceStatus(ctx context.Context, in *ServiceStatusRequest, opts ...grpc.CallOption) (*ServiceStatusResponse, error) {
	out := new(ServiceStatusResponse)
	err := c.cc.Invoke(ctx, "/mruv.MruVCharactersService/GetServiceStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mruVCharactersServiceClient) GetServiceVersion(ctx context.Context, in *VersionRequest, opts ...grpc.CallOption) (*VersionResponse, error) {
	out := new(VersionResponse)
	err := c.cc.Invoke(ctx, "/mruv.MruVCharactersService/GetServiceVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MruVCharactersServiceServer is the server API for MruVCharactersService service.
type MruVCharactersServiceServer interface {
	GetServiceStatus(context.Context, *ServiceStatusRequest) (*ServiceStatusResponse, error)
	GetServiceVersion(context.Context, *VersionRequest) (*VersionResponse, error)
}

// UnimplementedMruVCharactersServiceServer can be embedded to have forward compatible implementations.
type UnimplementedMruVCharactersServiceServer struct {
}

func (*UnimplementedMruVCharactersServiceServer) GetServiceStatus(ctx context.Context, req *ServiceStatusRequest) (*ServiceStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetServiceStatus not implemented")
}
func (*UnimplementedMruVCharactersServiceServer) GetServiceVersion(ctx context.Context, req *VersionRequest) (*VersionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetServiceVersion not implemented")
}

func RegisterMruVCharactersServiceServer(s *grpc.Server, srv MruVCharactersServiceServer) {
	s.RegisterService(&_MruVCharactersService_serviceDesc, srv)
}

func _MruVCharactersService_GetServiceStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ServiceStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MruVCharactersServiceServer).GetServiceStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/mruv.MruVCharactersService/GetServiceStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MruVCharactersServiceServer).GetServiceStatus(ctx, req.(*ServiceStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MruVCharactersService_GetServiceVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VersionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MruVCharactersServiceServer).GetServiceVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/mruv.MruVCharactersService/GetServiceVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MruVCharactersServiceServer).GetServiceVersion(ctx, req.(*VersionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _MruVCharactersService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "mruv.MruVCharactersService",
	HandlerType: (*MruVCharactersServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetServiceStatus",
			Handler:    _MruVCharactersService_GetServiceStatus_Handler,
		},
		{
			MethodName: "GetServiceVersion",
			Handler:    _MruVCharactersService_GetServiceVersion_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "characters.proto",
}
