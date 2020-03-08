var service = require('../server/protos/greet_grpc_pb');
var greets = require('../server/protos/greet_pb');

var sumService = require('../server/protos/sum_grpc_pb');
var sums = require('../server/protos/sum_pb');

var primeService = require('../server/protos/prime_grpc_pb');
var prime = require('../server/protos/prime_pb');

var grpc = require('grpc');

let unsafCreds = grpc.credentials.createInsecure();

function main() {
  console.log('Hello from client');

  let client = new service.GreetServiceClient('localhost:50051', unsafCreds);
  // create our request
  let request = new greets.GreetRequest();

  //create our protocol buffer
  let greeting = new greets.Greeting();
  greeting.setFirstName('Miller');
  greeting.setLastName('Oliveira');

  request.setGreeting(greeting);

  //  console.log(client);

  client.greet(request, (error, response) => {
    if (!error) {
      console.log('Greeting Response: ', response.getResult());
    } else {
      console.error(error);
    }
  });

  sum();
  greetManyTimes();
  calculatePrime();
}

function sum() {
  let client = new sumService.SumServiceClient('localhost:50051', unsafCreds);

  let request = new sums.SumRequest();

  let suming = new sums.Sum();

  suming.setFirstNumber(32.0);
  suming.setSecondNumber(4.0);

  request.setSum(suming);

  client.sum(request, (error, response) => {
    if (!error) {
      console.log('Sum response: ', response.getResult());
    } else {
      console.error(error);
    }
  });
}

function calculatePrime() {
  let client = new primeService.PrimeServiceClient(
    'localhost:50051',
    unsafCreds
  );

  // let number = new prime.Number();

  let request = new prime.PrimeRequest();
  request.setNumber(15);

  let call = client.prime(request, () => {});

  call.on('data', response => {
    console.log('Client stream response: ', response.getResult());
  });

  //control the call
  call.on('status', status => {
    console.log('Status: ', status);
  });

  call.on('error', error => {
    console.error(error);
  });

  call.on('end', () => {
    console.log('Streaming ended');
  });
}

function greetManyTimes() {
  let client = new service.GreetServiceClient('localhost:50051', unsafCreds);

  //create request

  let request = new greets.GreetManyTimesRequest();

  //create the protocol buffer
  var greeting = new greets.Greeting();
  greeting.setFirstName('Miller');
  greeting.setLastName('Oliveira');

  request.setGreeting(greeting);

  //crate a call
  let call = client.greetManyTimes(request, () => {});
  call.on('data', response => {
    console.log('Client stream response: ', response.getResult());
  });

  //control the call
  call.on('status', status => {
    console.log('Status: ', status);
  });

  call.on('error', error => {
    console.error(error);
  });

  call.on('end', () => {
    console.log('Streaming ended');
  });
}

main();
