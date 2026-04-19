//Set up playspace
    const banner = document.getElementById('banner');
    const newGrid = banner.appendChild(document.createElement('button'));
        newGrid.id = 'newGrid';
        newGrid.textContent = 'Custom Grid';
    const cont = document.getElementById('container');
//

//Color within the lines
    if (window.innerHeight > window.innerWidth) {
        cont.className = 'skinny';
        newGrid.className = 'skinny';
    } else if (window.innerWidth > window.innerHeight) {
        cont.className = 'fat';
        newGrid.className = 'fat';
    }

    addEventListener('resize', function() {
        if (this.window.innerHeight > this.window.innerWidth) {
            cont.className = 'skinny';
            newGrid.className = 'skinny';
        } else if (this.window.innerWidth > this.window.innerHeight) {
            cont.className = 'fat';
            newGrid.className = 'fat';
        }
    })
//

//Colorizer
    function getRandomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
//

//Make Tron's home
    for (i=0; i<16; i++) {
        const rows = cont.appendChild(document.createElement('div'));
        rows.className = 'rows';
        for (j=0; j<16; j++) {
            const tile = rows.appendChild(document.createElement('div'));
            tile.className = 'tiles';
//
//Change the vibe
            tile.addEventListener('mouseenter', function() {
                this.style.backgroundColor = getRandomColor();
                this.style.opacity = '1';
                this.id = 'on';
                this.addEventListener('mouseleave', function() {
                    this.addEventListener('mouseenter', function(){
                        this.style.opacity -= '0.1';
                    }, {once: true})
                })
            }, {once: true})
        }
    }
//

//Renovate Tron's home
    newGrid.addEventListener('click', function() {
        let factor = prompt("How many rows of tiles should there be? Please make it less than 100", "");
            
        if (factor <= 100) {
            cont.innerHTML = "";
            for (i=0; i<factor; i++) {
                const rows = cont.appendChild(document.createElement('div'));
                rows.className = 'rows';
                for (j=0; j<factor; j++) {
                    const tile = rows.appendChild(document.createElement('div'));
                    tile.className = 'tiles';
                    tile.id = 'custom';
//
//Change the changed vibe
                    tile.addEventListener('mouseenter', function() {
                        this.style.backgroundColor = getRandomColor();
                        this.style.opacity = '1';
                        this.id = 'on';
                        this.addEventListener('mouseleave', function() {
                            this.addEventListener('mouseenter', function(){
                                this.style.opacity -= '0.1';
                            }, {once: true})
                        })
                    }, {once: true})
                }
            }
//
//Deal with the cheeky lads n lasses
        } else if (factor > 100) {
            alert("Please don't crash the browser");
            let factor = prompt("How many rows of tiles should there be?", "");
            if (factor > 100) {
                alert("Are you even listening to me?");
                let factor = prompt("How many rows of tiles should there be?", "");
                if (factor > 100) {
                    alert("Fine, customization is a privilege");
                    newGrid.innerText = "Look what you've done";
                    newGrid.style.backgroundColor = 'red';
                    newGrid.disabled = true;
                }
            }
        }
    })
//