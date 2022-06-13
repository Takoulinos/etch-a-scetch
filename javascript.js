function resetGrid(squaresPerSide) {
    const container = document.querySelector('.container');
    if (squaresPerSide > 100) squaresPerSide = 100;
    container.innerHTML = '';
    for (i=0; i<squaresPerSide; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j=0; j<squaresPerSide; j++) {
            const square = document.createElement('div');
            square.classList.add('square',);
            square.setAttribute('data-timeshovered' , '0');
            row.appendChild(square);
        }
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', hover));
}

function hover(e) {
    this.dataset.timeshovered = parseInt(this.dataset.timeshovered) + 1 ;
    if (this.dataset.timeshovered === '1') {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        this.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b});`);
        const redStep = Math.ceil(r/10);
        const greenStep = Math.ceil(g/10);
        const blueStep = Math.ceil(b/10);
        this.setAttribute("data-stepred", `${redStep}`);
        this.setAttribute("data-stepgreen", `${greenStep}`);
        this.setAttribute("data-stepblue", `${blueStep}`);
    }
    else {
        const initialColor = this.style.backgroundColor;
        let r = initialColor.slice(initialColor.indexOf('(') + 1, initialColor.indexOf(','));
        let g = initialColor.slice(initialColor.indexOf(' ') + 1, initialColor.lastIndexOf(','));
        let b = initialColor.slice(initialColor.lastIndexOf(' ') + 1, initialColor.indexOf(')'));
        r = parseInt(r) - parseInt(this.dataset.stepred);
        g = parseInt(g) - parseInt(this.dataset.stepgreen);
        b = parseInt(b) - parseInt(this.dataset.stepblue);
        this.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b});`);
    }
}   



resetGrid(16);
const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {resetGrid(prompt('Enter how many squares each side will have. (max 100)'))});