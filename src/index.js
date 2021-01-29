import { Project, projectsArray, currentProject } from './project';
import Task from './task';

const $projectForm = document.getElementById('form-project');

$projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const $title = document.getElementById('project-name');
  if ($title.value === '') {
    alert('The project must have a name');
    return;
  }
  const project = new Project($title.value);
  projectsArray.push(project);
  $title.value = '';
  Project.renderProjects();
  Project.setCurrentProject(project);
  const projects = document.querySelectorAll('.project');
  projects[projects.length - 1].classList.add('active');
  projects[projects.length - 1].lastChild.src = './img/delete-white.svg';
});

const $taskForm = document.getElementById('form-task');

$taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const $title = document.getElementById('task-name');
  if ($title.value === '') {
    alert('The task must have a name');
    return;
  }
  const $date = document.getElementById('task-date');
  if ($date.value === '') {
    alert('Please choose a deadline');
    return;
  }
  const $priority = document.getElementById('task-priority');

  const task = new Task($title.value, $date.value, $priority.value);
  currentProject.tasks.push(task);
  localStorage.setItem('list', JSON.stringify(task));
  task.render();
});

Project.renderProjects();
const user = prompt('what\'s your first name?');
document.querySelector('.user-name').innerText = user || 'User';
