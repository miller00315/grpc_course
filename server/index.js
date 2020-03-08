var service = require('../server/protos/greet_grpc_pb');
var greets = require('../server/protos/greet_pb');

var sumService = require('../server/protos/sum_grpc_pb');
var sum = require('../server/protos/sum_pb');

var primeService = require('../server/protos/prime_grpc_pb');
var prime = require('../server/protos/prime_pb');

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

function calculatePrime(call, callback) {
  let number = call.request.getNumber();

  let factor = 2;

  while (number > 1) {
    if (number % factor === 0) {
      let primeFactor = new prime.PrimeResponse();
      primeFactor.setResult(number);

      call.write(primeFactor);
      //  console.log(primeFactor);

      number = number / factor;
    } else {
      factor++;
    }
  }

  call.end();
}

function greetManyTimes(call, callback) {
  var firstName = call.request.getGreeting().getFirstName();
  //  var lastName = call.request.getGreeting().getLastName();

  let count = 0,
    intervalID = setInterval(() => {
      var greetManyTimesResponse = new greets.GreetManyTimesResponse();
      greetManyTimesResponse.setResult(firstName);

      call.write(greetManyTimesResponse);

      if (++count > 9) {
        clearInterval(intervalID);
        call.end(); //We are send all message
      }
    }, 1000);
}

function main() {
  let unsafeCreds = grpc.ServerCredentials.createInsecure();

  var server = new grpc.Server();

  server.addService(service.GreetServiceService, {
    greet: greet,
    greetManyTimes: greetManyTimes
  });

  server.addService(sumService.SumServiceService, {
    sum: doSum
  });

  server.addService(primeService.PrimeServiceService, {
    prime: calculatePrime
  });

  server.bind('127.0.0.1:50051', unsafeCreds);
  server.start();

  console.log('Server running on port 127.0.0.1:50051');
}

main();
