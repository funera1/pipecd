// source: pkg/model/logblock.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();



goog.exportSymbol('proto.model.LogBlock', null, global);
goog.exportSymbol('proto.model.LogSeverity', null, global);
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
proto.model.LogBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.LogBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.LogBlock.displayName = 'proto.model.LogBlock';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.LogBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.model.LogBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.LogBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.LogBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    log: jspb.Message.getFieldWithDefault(msg, 2, ""),
    severity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.model.LogBlock}
 */
proto.model.LogBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.LogBlock;
  return proto.model.LogBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.LogBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.LogBlock}
 */
proto.model.LogBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLog(value);
      break;
    case 3:
      var value = /** @type {!proto.model.LogSeverity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.LogBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.LogBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.LogBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.LogBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLog();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
};


/**
 * optional int64 index = 1;
 * @return {number}
 */
proto.model.LogBlock.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.LogBlock} returns this
 */
proto.model.LogBlock.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string log = 2;
 * @return {string}
 */
proto.model.LogBlock.prototype.getLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.LogBlock} returns this
 */
proto.model.LogBlock.prototype.setLog = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LogSeverity severity = 3;
 * @return {!proto.model.LogSeverity}
 */
proto.model.LogBlock.prototype.getSeverity = function() {
  return /** @type {!proto.model.LogSeverity} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.model.LogSeverity} value
 * @return {!proto.model.LogBlock} returns this
 */
proto.model.LogBlock.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 created_at = 14;
 * @return {number}
 */
proto.model.LogBlock.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.LogBlock} returns this
 */
proto.model.LogBlock.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * @enum {number}
 */
proto.model.LogSeverity = {
  INFO: 0,
  SUCCESS: 1,
  ERROR: 2
};

goog.object.extend(exports, proto.model);