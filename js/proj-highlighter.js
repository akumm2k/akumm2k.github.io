const projNodes = document.querySelectorAll('ol.proj-list > li > a');

let projStack = {
    // check projStack ids from index.html
    // terminal is omitted
    'sudoku-solver' : [ 'cpp', 'git', 'gitlab' ],
    'crud-app' : ['php', 'javascript', 'css3', 'html5', 'git'],
    'rbTree' : [ 'c-sharp', 'git', 'gitlab' ],
    'gauss' : [ 'python', 'gitlab' ],
    'diceRoller' : [ 'cpp', 'gitlab' ],
    'portfolio' : [ 'javascript', 'html5', 'css3', 'git', 'github' ],
    'web-studio' : [ 'javascript', 'html5', 'css3', 'git', 'github' ],
}

Object.keys(projStack).forEach(project => {
    const projElement = document.getElementById(project);
    console.assert(
        projElement !== undefined, 
        `${project} is not present in html`
    );
});

projNodes.forEach(proj => {
    proj.addEventListener('mouseover', () => {
        for (let tech of projStack[proj.id]) 
            document.getElementById(tech).classList.add('hover');
    });
    proj.addEventListener('mouseout', () => {
        for (let tech of projStack[proj.id]) 
            document.getElementById(tech).classList.remove('hover');
    });
});