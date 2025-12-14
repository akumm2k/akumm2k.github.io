import { TOOLS } from "./constants/tools.js";
import { PROJECTS } from "./constants/projects.js";
const PROJ_NODES = document.querySelectorAll('ol.proj-list > li > a');
const PROJ_STACK = {
    [PROJECTS.REVERSI]: [TOOLS.JAVA, TOOLS.GITHUB],
    [PROJECTS.MAZE_RUNNER_PAGE_READER]: [TOOLS.PYTHON],
    [PROJECTS.SUDOKU_SOLVER]: [TOOLS.CPP, TOOLS.GITLAB],
    [PROJECTS.CRUD_APP]: [
        TOOLS.PHP,
        TOOLS.JAVASCRIPT,
        TOOLS.CSS3,
        TOOLS.HTML5,
    ],
    [PROJECTS.RB_TREE]: [TOOLS.C_SHARP, TOOLS.GITLAB],
    [PROJECTS.GAUSS]: [TOOLS.PYTHON, TOOLS.GITLAB],
    [PROJECTS.DICE_ROLLER]: [TOOLS.CPP, TOOLS.GITLAB],
    [PROJECTS.PORTFOLIO]: [
        TOOLS.JAVASCRIPT,
        TOOLS.HTML5,
        TOOLS.CSS3,
        TOOLS.GITHUB,
    ],
    [PROJECTS.WEB_STUDIO]: [
        TOOLS.JAVASCRIPT,
        TOOLS.HTML5,
        TOOLS.CSS3,
        TOOLS.GITHUB,
    ],
    [PROJECTS.DOTFILES]: [TOOLS.BASH, TOOLS.ZSH, TOOLS.GITHUB],
};
Object.keys(PROJ_STACK).forEach((project) => {
    const projElement = document.getElementById(project);
    console.assert(projElement !== undefined, `${project} is not present in html`);
});
const DEFAULT_TOOLS = [TOOLS.GIT];
PROJ_NODES.forEach((proj) => {
    proj.addEventListener('mouseover', () => {
        for (const tech of PROJ_STACK[proj.id].concat(DEFAULT_TOOLS)) {
            const techElement = document.getElementById(tech);
            if (techElement !== null) {
                techElement.classList.add('hover');
            }
        }
    });
    proj.addEventListener('mouseout', () => {
        for (const tech of PROJ_STACK[proj.id].concat(DEFAULT_TOOLS)) {
            const techElement = document.getElementById(tech);
            if (techElement !== null) {
                techElement.classList.remove('hover');
            }
        }
    });
});
