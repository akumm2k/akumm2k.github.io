import { TOOLS } from './constants/tools.ts';
import { PROJECTS } from './constants/projects.ts';

const PROJ_NODES: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('ol.proj-list > li > a');

const PROJ_STACK: Record<string, string[]> = {
  [PROJECTS.REVERSI]: [TOOLS.JAVA, TOOLS.GITHUB],
  [PROJECTS.MAZE_RUNNER_PAGE_READER]: [TOOLS.PYTHON],
  [PROJECTS.SUDOKU_SOLVER]: [TOOLS.CPP, TOOLS.GIT, TOOLS.GITLAB],
  [PROJECTS.CRUD_APP]: [
    TOOLS.PHP,
    TOOLS.JAVASCRIPT,
    TOOLS.CSS3,
    TOOLS.HTML5,
    TOOLS.GIT,
  ],
  [PROJECTS.RB_TREE]: [TOOLS.C_SHARP, TOOLS.GIT, TOOLS.GITLAB],
  [PROJECTS.GAUSS]: [TOOLS.PYTHON, TOOLS.GITLAB],
  [PROJECTS.DICE_ROLLER]: [TOOLS.CPP, TOOLS.GITLAB],
  [PROJECTS.PORTFOLIO]: [
    TOOLS.JAVASCRIPT,
    TOOLS.HTML5,
    TOOLS.CSS3,
    TOOLS.GIT,
    TOOLS.GITHUB,
  ],
  [PROJECTS.WEB_STUDIO]: [
    TOOLS.JAVASCRIPT,
    TOOLS.HTML5,
    TOOLS.CSS3,
    TOOLS.GIT,
    TOOLS.GITHUB,
  ],
};

Object.keys(PROJ_STACK).forEach((project) => {
  const projElement = document.getElementById(project);
  console.assert(
    projElement !== undefined,
    `${project} is not present in html`
  );
});

PROJ_NODES.forEach((proj) => {
  proj.addEventListener('mouseover', () => {
    for (let tech of PROJ_STACK[proj.id]) {
      const techElement = document.getElementById(tech);
      if (techElement !== null) {
        techElement.classList.add('hover');
      }
    }
  });
  proj.addEventListener('mouseout', () => {
    for (let tech of PROJ_STACK[proj.id]) {
      const techElement = document.getElementById(tech);
      if (techElement !== null) {
        techElement.classList.remove('hover');
      }
    }
  });
});
