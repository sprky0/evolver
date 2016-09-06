/**
 * Model defines the properties and behaviors of our individual
 * An instance of the
 *
 */
var Model = function(parent) {
	this.fields = [];

	// if (parent.prototype.className = Model) // something like this
	if (parent) {
		this.evolveFromValues(parent);
		this.generation = parent.generation++;
	} else {
		this.generation = 0;
	}

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
Model.prototype.addField = function(name, type, defaultValue, changeRange, changeProbability) {
	var fieldInstance = new Field(name, type, defaultValue, changeRange, changeProbability);
	this.fields.push(fieldInstance);
};

Model.prototype.cloneField = function() {

};

return Model;
