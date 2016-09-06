define('evolver/field',[],function(){

	var Field = function(name, type, referenceValue, changeRatePercent, changeProbabilityPercent, mutation) {

		this.name = name;
		this.type = type;
		this.ceil = 0;
		this.floor = 0;
		this.isFloat = false;
		this.isSigned = false;
		this.isNumeric = true;
		this.changeRatePercent = changeRatePercent || 0;
		this.changeProbabilityPercent = changeProbabilityPercent || 0;
		this.value = 0;

		/**
		 * Define behaviors for this field based on our parameters
		 */
		switch(type){

			default:
			throw('Unknown field Type ' + type);
			break;

			case 'boolean':
			this.isNumeric = true;
			this.isFloat = false;
			this.isSigned = false;
			this.ceil = 127;
			this.floor = 0;
			break;

			case 'uint7':
			this.isNumeric = true;
			this.isFloat = false;
			this.isSigned = false;
			this.ceil = 127;
			this.floor = 0;
			break;

			case 'uint8':
			this.isNumeric = true;
			this.isFloat = false;
			this.isSigned = false;
			this.ceil = 255;
			this.floor = 0;
			break;

			case 'uint16':
			this.isNumeric = true;
			this.isFloat = false;
			this.isSigned = false;
			this.ceil = 65536;
			this.floor = 0;
			break;

		}

		if (mutation) {
			this.setWithRandomizedValue(referenceValue);
		} else {
			this.setValue(referenceValue);
		}

	};

	Field.prototype.getValue = function() {
		return this.value;
	};

	Field.prototype.setValue = function(value) {

		// Flatten out remainer for integers
		if (!this.isFloat && this.isNumeric)
			value = parseInt(value);

		if (this.isFloat && this.isNumeric)
			value = parseFloat(value);

		// set our value to a boolean based on JS truthiness rules
		if (this.isBoolean)
			value = !!value;

		this.value = value;
	};

	Field.prototype.cloneWithRandomizedValue = function() {
		return new Field(this.name, this.type, this.value, this.changeRatePercent, this.changeProbabilityPercent);
	};

	Field.prototype.setWithRandomizedValue = function(referenceValue) {

		// generate a value within initial parameters
		if (!referenceValue) {
			var representitiveValue = Math.random() * (this.ceil - this.floor) + this.floor;
			this.setValue(representitiveValue);
		}

		// use reference and settings to apply a new value
		else {

			// decide if we will change at all
			var willChange = (Math.random() * 100) > this.changeProbabilityPercent;

			if (willChange) {
				// get a random variance which is a random value relative to the max changeRatePercent allowed
				// multipled by the reference value
				var changeAmount = (this.changeRatePercent / 100) * (this.ceil + this.floor);
				console.log( willChange, changeAmount, referenceValue );
				var newValue = changeAmount *= referenceValue;
				console.log( "to", newValue );
				this.setValue(newValue);
			}

		}

	};

	return Field;

});
