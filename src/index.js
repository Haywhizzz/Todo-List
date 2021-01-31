import { Project, projectsArray, currentProject } from './project';
import Task from './task';

const $projectForm = document.getElementById('form-project');
const feedback = document.querySelector('.feedback');

const showFeedback = (text, action) => {
  feedback.classList.add('showItem', `alert-${action}`);
  feedback.innerHTML = `<p>${text}</p>`;

  setTimeout(() => {
    feedback.classList.remove('showItem', `alert-${action}`);
  }, 3000);
};

$projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const $title = document.getElementById('project-name');
  if ($title.value === '') {
    showFeedback('project title cannot be empty', 'danger');
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
    showFeedback('task-title cannot be empty', 'danger');
    return;
  }
  const $description = document.getElementById('task-description');
  if ($description.value === '') {
    showFeedback('task-description cannot be empty', 'danger');
    return;
  }
  const $date = document.getElementById('task-date');
  if ($date.value === '') {
    showFeedback('Please choose a deadline', 'danger');
    return;
  }
  const $priority = document.getElementById('task-priority');

  const task = new Task($title.value, $description.value, $date.value, $priority.value);
  currentProject.tasks.push(task);
  localStorage.setItem('list', JSON.stringify(task));
  task.render();
});

Project.renderProjects();
