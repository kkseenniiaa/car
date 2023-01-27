let cells = document.querySelectorAll('#field td');
console.log(cells);
let winner = document.querySelector('#winner');
let close = document.querySelector('#close');
let text = document.querySelector('#text');

let i = 0;
function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            if (i % 2 == 0) {
                this.textContent = 'х';
            } else {
                this.textContent = 'о';
            }

            this.removeEventListener('click', step);
            if (isWinner(cells) == true) {
                winner.style.display = 'flex';
                text.textContent = `Победитель ${this.textContent}`;
            } else if (i == 8) {
                winner.style.display = 'flex';
                text.textContent = `Ничья`;
            };
            i++;
        })
    }
}

start(cells);

function isWinner(cells) {
    let combs = [
        [0, 1, 2], // comb
        [3, 4, 5], // comb
        [6, 7, 8], // comb
        [0, 3, 6], // comb
        [1, 4, 7], // comb
        [2, 5, 8], // comb
        [0, 4, 8], // comb
        [2, 4, 6]  // comb

    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent && cells[comb[1]].textContent ==
            cells[comb[2]].textContent && cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}

close.addEventListener('click', function (event) {
    location.reload();
})