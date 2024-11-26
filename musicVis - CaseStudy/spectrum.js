function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		for (var i = 0; i< spectrum.length; i++){
			var r = spectrum[i];
			var g = map(spectrum[i], 0, 255,255,0);
			var b = 0;

			fill(r,g,b);
			var y = map(i, 0, spectrum.length, 50, height);
		    var w = map(spectrum[i], 0, 255, 0, width)
		    rect(0, y, w, height / spectrum.length);
  		}
	
		pop();
	};
}
