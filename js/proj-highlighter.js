const proj_list = [ 
    'crud-app', 'sudoku-solver', 'rbTree', 
    'gauss', 'diceRoller', 'portfolio' 
];
const proj_nodes = [];
proj_list.forEach(proj => {
    proj_nodes.push(document.getElementById(proj));
});

const log = console.log;

let stack = {
    // check stack ids from index.html
    // terminal is omitted
    'sudoku-solver' : [ 'cpp', 'git', 'gitlab' ],
    'crud-app' : ['php', 'javascript', 'css3', 'html5', 'git'],
    'rbTree' : [ 'c-sharp', 'git', 'gitlab' ],
    'gauss' : [ 'python', 'gitlab' ],
    'diceRoller' : [ 'cpp', 'gitlab' ],
    'portfolio' : [ 'javascript', 'html5', 'css3', 'git', 'github' ]
}

proj_nodes.forEach(proj => {
    proj.addEventListener('mouseover', () => {
        for (let tech of stack[proj.id]) 
            document.getElementById(tech).classList.add('hover');
    });
    proj.addEventListener('mouseout', () => {
        for (let tech of stack[proj.id]) 
            document.getElementById(tech).classList.remove('hover');
    });
});