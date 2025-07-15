const container = document.getElementById('container');
// const gridSize = 16;

// 2d grids
const base = 8
const height = 8
const gridItemSize = 45

container.style.maxWidth = `${base * gridItemSize}px`;

container.innerHTML = '';

for (let i = 0; i < base * height; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.innerHTML = i
    container.appendChild(gridItem);
}

/*
make it work with every base height etc
16 times 1 = 16
16 times 2 = 32
16 times 3 = 48
...
16 times 16 = 256

base times height = area
b * h = a

*/

/*

const line = [0, 1, 2]
const grid = [
    [0, 1, 2], [0, 1, 2], [0, 1, 2]
]
grid[0][0] -> 0, 0
grid[2][2] -> 2, 2
const cube = [
    [[0, 1, 2], [0, 1, 2], [0, 1, 2]],
    [[0, 1, 2], [0, 1, 2], [0, 1, 2]], 
    [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
]
cube[0][0][0] -> 0, 0, 0
cube[1][0][2] -> 1, 0, 2

*/ 


// 3d objects
// const base_3d = 16
// const height_3d = 16
// const legnth_3d = 16
// const cube = []