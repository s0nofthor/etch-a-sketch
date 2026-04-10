//Make Tron's home
for (i=0; i<256; i++) {
    const tile = document.createElement('div');
    tile.className = "tiles";
    document.getElementById('container').appendChild(tile);
    
    tile.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'green';
    })
}