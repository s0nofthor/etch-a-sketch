//Set up playspace
    const banner = document.getElementById('banner');
    const cont = document.getElementById('container');
    const newGrid = document.createElement('button');
    newGrid.id = 'newGrid';
    newGrid.textContent = 'Custom Grid';
    banner.appendChild(newGrid);
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

//Make Tron's home
    for (i=0; i<16; i++) {
        const rows = cont.appendChild(document.createElement('div'));
        rows.className = 'rows';
        for (j=0; j<16; j++) {
            const tile = document.createElement('div');
            tile.className = 'tiles';
            tile.id = 'custom';
            rows.appendChild(tile);

            tile.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'green';
            })
        }
    }
//

//Renovate Tron's home
    newGrid.addEventListener('click', function() {
        let factor = prompt("How many rows of tiles should there be?", "");
            
        if (factor <= 100) {
            cont.innerHTML = "";
            for (i=0; i<factor; i++) {
                const rows = cont.appendChild(document.createElement('div'));
                rows.className = 'rows';
                for (j=0; j<factor; j++) {
                    const tile = document.createElement('div');
                    tile.className = 'tiles';
                    tile.id = 'custom';
                    rows.appendChild(tile);

                    tile.addEventListener('mouseenter', function() {
                        this.style.backgroundColor = 'green';
                    })
                }
        
            }
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