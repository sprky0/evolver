var Field = function(name, type, defaultValue, changeRange, changeProbability) {

	this.type = type;
	this.value = this.setWithRandomizedValue(referenceValue);
	this.ceil = 0;
	this.floor = 0;
	this.isFloat = false;
	this.this.isSigned = false;
	this.isNumeric = true;

	/**
	 * Define behaviors for this field based on our parameters
	 */
	switch(type){

		default:
		throw Exception('Unknown field Type');
		break;

		case 'boolean':
		isNumeric = true;
		isFloat = false;
		isSigned = false;
		ceil = 127;
		floor = 0;
		break;

		case 'uint7':
		isNumeric = true;
		isFloat = false;
		isSigned = false;
		ceil = 127;
		floor = 0;
		break;

		case 'uint8':
		isNumeric = true;
		isFloat = false;
		isSigned = false;
		ceil = 255;
		floor = 0;
		break;

		case 'uint16':
		isNumeric = true;
		isFloat = false;
		isSigned = false;
		ceil = 255;
		floor = 0;
		break;

	}

	this.setWithRandomizedValue(defaultValue);

};

Field.prototype.getValue = function() {
	return this.value;
};

Field.prototype.setValue = function(value) {

	// Flatten out remainer for integers
	if (!isFloat && isNumeric)
		value = Math.floor();

	// set our value to a boolean based on JS truthiness rules
	if (isBoolean)
		value = !!value;

	this.value = value;
};

Field.prototype.setWithRandomizedValue = function(reference) {

	if (!reference) {
		var representitiveValue = (Math.random() * this.ceil + this.floor) - this.floor;
		this.setValue(representitiveValue);
	} else {


		// get a random variance which is a random value relative to the max change allowed
		// multipled by the reference value

		var newValue = (Math.random() * this.ceil + this.floor) - this.floor;
		this.setValue(newValue);

	}

};

return Field;
