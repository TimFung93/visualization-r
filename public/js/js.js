document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	console.log('this works')
        window.location.href = '/chorddiag'
    }
}