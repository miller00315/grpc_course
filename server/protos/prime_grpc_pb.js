// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_prime_pb = require('../protos/prime_pb.js');

function serialize_prime_PrimeRequest(arg) {
  if (!(arg instanceof protos_prime_pb.PrimeRequest)) {
    throw new Error('Expected argument of type prime.PrimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_prime_PrimeRequest(buffer_arg) {
  return protos_prime_pb.PrimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_prime_PrimeResponse(arg) {
  if (!(arg instanceof protos_prime_pb.PrimeResponse)) {
    throw new Error('Expected argument of type prime.PrimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_prime_PrimeResponse(buffer_arg) {
  return protos_prime_pb.PrimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PrimeServiceService = exports.PrimeServiceService = {
  prime: {
    path: '/prime.PrimeService/Prime',
    requestStream: false,
    responseStream: true,
    requestType: protos_prime_pb.PrimeRequest,
    responseType: protos_prime_pb.PrimeResponse,
    requestSerialize: serialize_prime_PrimeRequest,
    requestDeserialize: deserialize_prime_PrimeRequest,
    responseSerialize: serialize_prime_PrimeResponse,
    responseDeserialize: deserialize_prime_PrimeResponse,
  },
};

exports.PrimeServiceClient = grpc.makeGenericClientConstructor(PrimeServiceService);
