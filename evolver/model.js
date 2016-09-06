define('evolver/model',['evolver/field'],function(Field){

	/**
	 * Model defines the properties and behaviors of our individual
	 * An instance of the
	 *
	 */
	var Model = function(parent) {

		// as stack
		this.fields = [];

		// as object keyed against names
		this.fieldMap = {};

		// if (parent.prototype.className = Model) // something like this
		if (parent) {
			this.initFieldsAndEvolveFromParentValues(parent);
			this.generation = parent.generation++;
		} else {
			this.generation = 0;
		}

	};

	Model.prototype.printSummary = function() {
		return this.fields;
	};

	/**
	 *
	 */
	Model.prototype.generateChild = function() {
		return new Model(this);
	};

	Model.prototype.evolveFromParent = function() {

	};

	/**
	 * @param String type uint7|uint8|uint16|boolean
	 *
	 */
	Model.prototype.addField = function(name, type, defaultValue, changeRatePercent, changeProbability) {
		var fieldInstance = new Field(name, type, defaultValue, changeRatePercent, changeProbability);
		if (this.fieldMap.hasOwnProperty(name))
			throw 'Re-used field name!';
		this.fieldMap[name] = fieldInstance;
		this.fields.push(fieldInstance);
	};

	/*
	Model.prototype.removeField = function(name) {
	};
	*/

	Model.prototype.initFieldsAndEvolveFromParentValues = function(parent) {

		for(var i = 0; i < parent.fields.length; i++) {
			this.addField(
				parent.fields[i].name,
				parent.fields[i].type,
				parent.fields[i].defaultValue,
				parent.fields[i].changeRatePercent,
				parent.fields[i].changeProbability);
		}

	};

	return Model;

});
