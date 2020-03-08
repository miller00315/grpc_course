/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.sum.Sum', null, global);
goog.exportSymbol('proto.sum.SumRequest', null, global);
goog.exportSymbol('proto.sum.SumResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sum.Sum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sum.Sum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sum.Sum.displayName = 'proto.sum.Sum';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sum.Sum.prototype.toObject = function(opt_includeInstance) {
  return proto.sum.Sum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sum.Sum} msg The msg instance to transform.
 * @return {!Object}
 */
proto.sum.Sum.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstNumber: msg.getFirstNumber(),
    secondNumber: msg.getSecondNumber()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sum.Sum}
 */
proto.sum.Sum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sum.Sum;
  return proto.sum.Sum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sum.Sum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sum.Sum}
 */
proto.sum.Sum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFirstNumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSecondNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.sum.Sum} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.sum.Sum.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sum.Sum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.sum.Sum.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFirstNumber();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = this.getSecondNumber();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.sum.Sum} The clone.
 */
proto.sum.Sum.prototype.cloneMessage = function() {
  return /** @type {!proto.sum.Sum} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional double first_number = 1;
 * @return {number}
 */
proto.sum.Sum.prototype.getFirstNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.sum.Sum.prototype.setFirstNumber = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double second_number = 2;
 * @return {number}
 */
proto.sum.Sum.prototype.getSecondNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.sum.Sum.prototype.setSecondNumber = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sum.SumRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sum.SumRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sum.SumRequest.displayName = 'proto.sum.SumRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sum.SumRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sum.SumRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sum.SumRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.sum.SumRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sum: (f = msg.getSum()) && proto.sum.Sum.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sum.SumRequest}
 */
proto.sum.SumRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sum.SumRequest;
  return proto.sum.SumRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sum.SumRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sum.SumRequest}
 */
proto.sum.SumRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sum.Sum;
      reader.readMessage(value,proto.sum.Sum.deserializeBinaryFromReader);
      msg.setSum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.sum.SumRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.sum.SumRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sum.SumRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.sum.SumRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSum();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sum.Sum.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.sum.SumRequest} The clone.
 */
proto.sum.SumRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.sum.SumRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Sum sum = 1;
 * @return {proto.sum.Sum}
 */
proto.sum.SumRequest.prototype.getSum = function() {
  return /** @type{proto.sum.Sum} */ (
    jspb.Message.getWrapperField(this, proto.sum.Sum, 1));
};


/** @param {proto.sum.Sum|undefined} value  */
proto.sum.SumRequest.prototype.setSum = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.sum.SumRequest.prototype.clearSum = function() {
  this.setSum(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.sum.SumRequest.prototype.hasSum = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sum.SumResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sum.SumResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sum.SumResponse.displayName = 'proto.sum.SumResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sum.SumResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sum.SumResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sum.SumResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.sum.SumResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: msg.getResult()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sum.SumResponse}
 */
proto.sum.SumResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sum.SumResponse;
  return proto.sum.SumResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sum.SumResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sum.SumResponse}
 */
proto.sum.SumResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.sum.SumResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.sum.SumResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sum.SumResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.sum.SumResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getResult();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.sum.SumResponse} The clone.
 */
proto.sum.SumResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.sum.SumResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional double result = 1;
 * @return {number}
 */
proto.sum.SumResponse.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.sum.SumResponse.prototype.setResult = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.sum);