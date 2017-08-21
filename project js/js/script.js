var i=0;
var j=0;
var dot=100;

function defaultSpace(dot) {
	w = 400/dot;
	var space = document.createElement('div');
		square.appendChild(space);
		space.setAttribute("id", "space");
		/*alert(12);*/
	for (j=0;j<dot;j++) {
		var cont = document.createElement('div');
		space.appendChild(cont);
		cont.setAttribute("id", "cont");
		cont.style.height = w + 'px';		;
		for (i=0;i<dot;i++) {
			var block = document.createElement('div');
			cont.appendChild(block);
			block.setAttribute("id", "block"); 
			block.style.width = w + 'px';
		};
	}; 
	
	
	$('div#block').hover(function(){
        $(this).css('background-color','#F5BF83');
	});
}
defaultSpace(dot);
function clearSpace() {
    var dot = prompt('Длина стороны сетки (в клетках)', 100);
	$('#space').remove();
	defaultSpace(dot);
}
