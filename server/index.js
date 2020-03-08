var service = require('../server/protos/greet_grpc_pb');
var greets = require('../server/protos/greet_pb');

var sumService = require('../server/protos/sum_grpc_pb');
var sum = require('../server/protos/sum_pb');

var grpc = require('grpc');

function greet(call, callback) {
  var greeting = new greets.GreetResponse();

  greeting.setResult(
    'Hello '
      .concat(call.request.getGreeting().getFirstName())
      .concat(' ')
      .concat(call.request.getGreeting().getLastName())
  );

  callback(null, greeting);
}

function doSum(call, callback) {
  var sumResult = new sum.SumResponse();

  sumResult.setResult(
    call.request.getSum().getFirstNumber() +
      call.request.getSum().getSecondNumber()
  );

  callback(null, sumResult);
}

function main() {
  let unsafeCreds = grpc.ServerCredentials.createInsecure();

  var server = new grpc.Server();

  server.addService(service.GreetServiceService, {
    greet: greet
  });

  server.addService(sumService.SumServiceService, {
    sum: doSum
  });

  server.bind('127.0.0.1:50051', unsafeCreds);
  server.start();

  console.log('Server running on port 127.0.0.1:50051');
}

main();
