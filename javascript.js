const container = document.querySelector('.container');
resetGrid(16);

const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {resetGrid(prompt('Enter how many squares each side will have. (max 100)'))});


function resetGrid(squaresPerSide) {
    if (squaresPerSide > 100) squaresPerSide = 100;
    container.innerHTML = '';
    for (i=0; i<squaresPerSide; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j=0; j<squaresPerSide; j++) {
            const square = document.createElement('div');
            square.classList.add('square', 'unhovered');
            row.appendChild(square);
        }
    }
    const squares = document.querySelectorAll('.unhovered');
    squares.forEach(square => square.addEventListener('mouseover', toggleHovered));
}


function toggleHovered(e) {
    this.setAttribute("style", "background-color: black;");
    this.classList.remove('unhovered');
}   