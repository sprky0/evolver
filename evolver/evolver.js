define('evolver/evolver',['evolver/model'],function(Model){

	function getModel() {
		return new Model();
	}

	function getChild(model) {
		return model.generateChild();
	}

	function getGeneration(parent, count) {
		count = count || 5;
		var generation = [];
		for(var i = 0; i < count; i++){
			generation.push( parent.generateChild() );
		}
		return generation;
	}

	return {
		getModel : getModel,
		getChild : getChild,
		getGeneration : getGeneration
	};

});
