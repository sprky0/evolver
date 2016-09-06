define('evolver/evolver',['evolver/model'],function(Model){

	function getModel() {
		return new Model();
	}

	function getIndividual(model) {
		return model.getChild();
	}

	function getGeneration(parent, count) {
		count = count || 5;
		var generation = [];
		for(var i = 0; i < count; i++){
			generation.push( parent.getChild() );
		}
		return generation;
	}

	return {
		getModel : getModel,
		getIndividual : getIndividual,
		getGeneration : getGeneration
	};

});
