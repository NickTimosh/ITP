function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		for (var i = 0; i< spectrum.length; i++){

			// mapping the indix to the vertical position
			var y = map(i, 0, spectrum.length, 0, height);

			// maping the amp to the width of the bar
			var w = map(spectrum[i], 0, 255, 0, width)

				// determine the color based on the amp
			var r = spectrum[i];
			var g = 255 - spectrum[i] // inverse of red
			var b = 0

			fill(r,g,b);
			rect(0, y, w, height/spectrum.length)

			// var x = map(i, 0, spectrum.length, 0, width);
		    // var h = -height + map(spectrum[i], 0, 255, height, 0);
		    // rect(x, height, width / spectrum.length, h );
  		}
	
		pop();
	};
}
