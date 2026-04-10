const cont = document.getElementById('container');
if (window.innerHeight > window.innerWidth) {
    cont.className = 'skinny';
} else if (window.innerWidth > window.innerHeight) {
    cont.className = 'fat';
}
addEventListener('resize', function() {
    if (this.window.innerHeight > this.window.innerWidth) {
        cont.className = 'skinny';
    } else if (this.window.innerWidth > this.window.innerHeight) {
        cont.className = 'fat';
    }
})

//Make Tron's home
for (i=0; i<256; i++) {
    const tile = document.createElement('div');
    tile.className = "tiles";
    document.getElementById('container').appendChild(tile);
    
    tile.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'green';
    })
}