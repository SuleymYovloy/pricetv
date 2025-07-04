/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.gapi.Product');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.gapi.PriceHistory');


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
proto.gapi.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gapi.Product.repeatedFields_, null);
};
goog.inherits(proto.gapi.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gapi.Product.displayName = 'proto.gapi.Product';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gapi.Product.repeatedFields_ = [19];



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
proto.gapi.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.gapi.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gapi.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gapi.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    sku: jspb.Message.getFieldWithDefault(msg, 1, ""),
    article: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    category: jspb.Message.getFieldWithDefault(msg, 4, ""),
    shortCategory: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    url: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    image: jspb.Message.getFieldWithDefault(msg, 9, ""),
    isActive: jspb.Message.getFieldWithDefault(msg, 10, false),
    isLast: jspb.Message.getFieldWithDefault(msg, 11, false),
    rate: jspb.Message.getFieldWithDefault(msg, 12, 0),
    longLiver: jspb.Message.getFieldWithDefault(msg, 13, 0),
    highVolatility: jspb.Message.getFieldWithDefault(msg, 14, 0),
    priceIncrease: +jspb.Message.getFieldWithDefault(msg, 15, 0.0),
    priceIncreasePerDay: +jspb.Message.getFieldWithDefault(msg, 16, 0.0),
    percentagePriceIncrease: +jspb.Message.getFieldWithDefault(msg, 17, 0.0),
    highestPriceIncreaseDate: jspb.Message.getFieldWithDefault(msg, 18, ""),
    priceHistoryList: jspb.Message.toObjectList(msg.getPriceHistoryList(),
    proto.gapi.PriceHistory.toObject, includeInstance)
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
 * @return {!proto.gapi.Product}
 */
proto.gapi.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gapi.Product;
  return proto.gapi.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gapi.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gapi.Product}
 */
proto.gapi.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSku(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArticle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortCategory(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLast(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRate(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLongLiver(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHighVolatility(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPriceIncrease(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPriceIncreasePerDay(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercentagePriceIncrease(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setHighestPriceIncreaseDate(value);
      break;
    case 19:
      var value = new proto.gapi.PriceHistory;
      reader.readMessage(value,proto.gapi.PriceHistory.deserializeBinaryFromReader);
      msg.addPriceHistory(value);
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
proto.gapi.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gapi.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gapi.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gapi.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSku();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArticle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getShortCategory();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreateAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIsLast();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getRate();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getLongLiver();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getHighVolatility();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getPriceIncrease();
  if (f !== 0.0) {
    writer.writeFloat(
      15,
      f
    );
  }
  f = message.getPriceIncreasePerDay();
  if (f !== 0.0) {
    writer.writeFloat(
      16,
      f
    );
  }
  f = message.getPercentagePriceIncrease();
  if (f !== 0.0) {
    writer.writeFloat(
      17,
      f
    );
  }
  f = message.getHighestPriceIncreaseDate();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPriceHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.gapi.PriceHistory.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sku = 1;
 * @return {string}
 */
proto.gapi.Product.prototype.getSku = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setSku = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string article = 2;
 * @return {string}
 */
proto.gapi.Product.prototype.getArticle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setArticle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.gapi.Product.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string category = 4;
 * @return {string}
 */
proto.gapi.Product.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string short_category = 5;
 * @return {string}
 */
proto.gapi.Product.prototype.getShortCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setShortCategory = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.gapi.Product.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string url = 7;
 * @return {string}
 */
proto.gapi.Product.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string create_at = 8;
 * @return {string}
 */
proto.gapi.Product.prototype.getCreateAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setCreateAt = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string image = 9;
 * @return {string}
 */
proto.gapi.Product.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setImage = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool is_active = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gapi.Product.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.gapi.Product.prototype.setIsActive = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool is_last = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.gapi.Product.prototype.getIsLast = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.gapi.Product.prototype.setIsLast = function(value) {
  jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional int32 rate = 12;
 * @return {number}
 */
proto.gapi.Product.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.gapi.Product.prototype.setRate = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 long_liver = 13;
 * @return {number}
 */
proto.gapi.Product.prototype.getLongLiver = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.gapi.Product.prototype.setLongLiver = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 high_volatility = 14;
 * @return {number}
 */
proto.gapi.Product.prototype.getHighVolatility = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.gapi.Product.prototype.setHighVolatility = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional float price_increase = 15;
 * @return {number}
 */
proto.gapi.Product.prototype.getPriceIncrease = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.gapi.Product.prototype.setPriceIncrease = function(value) {
  jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional float price_increase_per_day = 16;
 * @return {number}
 */
proto.gapi.Product.prototype.getPriceIncreasePerDay = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 16, 0.0));
};


/** @param {number} value */
proto.gapi.Product.prototype.setPriceIncreasePerDay = function(value) {
  jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional float percentage_price_increase = 17;
 * @return {number}
 */
proto.gapi.Product.prototype.getPercentagePriceIncrease = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 17, 0.0));
};


/** @param {number} value */
proto.gapi.Product.prototype.setPercentagePriceIncrease = function(value) {
  jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional string highest_price_increase_date = 18;
 * @return {string}
 */
proto.gapi.Product.prototype.getHighestPriceIncreaseDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/** @param {string} value */
proto.gapi.Product.prototype.setHighestPriceIncreaseDate = function(value) {
  jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * repeated PriceHistory price_history = 19;
 * @return {!Array.<!proto.gapi.PriceHistory>}
 */
proto.gapi.Product.prototype.getPriceHistoryList = function() {
  return /** @type{!Array.<!proto.gapi.PriceHistory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gapi.PriceHistory, 19));
};


/** @param {!Array.<!proto.gapi.PriceHistory>} value */
proto.gapi.Product.prototype.setPriceHistoryList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.gapi.PriceHistory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gapi.PriceHistory}
 */
proto.gapi.Product.prototype.addPriceHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.gapi.PriceHistory, opt_index);
};


proto.gapi.Product.prototype.clearPriceHistoryList = function() {
  this.setPriceHistoryList([]);
};


