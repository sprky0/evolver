define([],function(){

	/**
	 * Model defines the properties and behaviors of our individual
	 *
	 */
	function Model() {
	}
	Model.prototype.getInstance = function() {
		var object = this.getObject();

	}

	/**
	 * @param String type uint7|uint8|uint16|boolean
	 *
	 */
	function getField(type, defaultValue, changeRange, changeProbability) {

		var
			value = defaultValue, // what is the current value of this field
			ceil = 0,
			floor = 0,
//			type,
			isFloat,
			isSigned,
			isNumeric,
			changeRange,
			changeProbability;

		function getValue() {
			return value;
		}

		function setValue() {
			value = Math.floor(Math.random() * ceil, floor);

			// Flatten out remainer for integers
			if (!isFloat && isNumeric)
				value = Math.floor()

			// set our value to a boolean based on JS truthiness rules
			if (isBoolean)
				value = !!value;
		}

		function setRandomValue() {
			// this isn't quite right
			setValue(Math.random() * ceil + floor);
		}

		/**
		 * Define behaviors for this field based on our parameters
		 */
		switch(type){

			default:
			throw Exception('Unknown field Type');
			break;

			case 'uint7':
			value = defaultValue;
			isNumeric = true;
			isFloat = false;
			isSigned = false;
			ceil = 127;
			floor = 0;
			break;

			case 'uint8':
			value = 0;
			isNumeric = true;
			isFloat = false;
			isSigned = false;
			ceil = 255;
			floor = 0;
			break;

			case 'uint16':
			value = 0;
			isNumeric = true;
			isFloat = false;
			isSigned = false;
			ceil = 255;
			floor = 0;
			break;

		}

		return {
			getValue : getValue,
			setValue : setValue,
			setVariation : setVariation,
			setRandomValue : setRandomValue
		};

	}

	function getModel() {
		return new Model();
	}


	function getIndividual(model) {
		return model.getInstance();
	}

	/**
	 * @param object Individual
	 */
	function getGeneration(seed, count) {
		count = count || 5;
		var generation = [];
		for(var i = 0; i < count; i++)
			generation.push( seed.getChild() );

	}

	return {
		getModel : getModel,
		getIndividual : getIndividual,
		getGeneration : getGeneration
	};

});
