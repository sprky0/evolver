require(['js/evolver'],function(evolver)) {

	var greyscale = evolver.getModel();
	var brightness = evolver.getField('uint8', 0, 255, .1);
	greyscale.addField('integer')




}