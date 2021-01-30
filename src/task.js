import { createHtmlElement, setId } from './dom';
import { currentProject } from './project';

const $project = document.querySelector('#task-container');

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.id = setId();
  }

  render() {
    const $div = createHtmlElement('div', this.id, ['task'], null);

    const $divTaskName = createHtmlElement('div', null, ['task-name'], null);
    const $divTaskDescription = createHtmlElement('div', null, ['task-descrption'], null);
    const $checkbox = createHtmlElement('input', null, ['checkbox'], null);
    $checkbox.type = 'checkbox';

    const $p = createHtmlElement('p', null, null, this.title);
    const $pi = createHtmlElement('p', null, null, this.description);

    const $divTaskInfo = createHtmlElement('div', null, ['task-info'], null);
    const $date = createHtmlElement('p', null, null, this.date);
    const $badge = createHtmlElement('div', null, ['badge'], this.priority);
    const $delete = createHtmlElement('img', null, ['delete'], null);
    $delete.src = './img/delete.svg';
    const $edit = createHtmlElement('img', null, ['edit'], null);
    $edit.src = './img/edit.svg';
    $edit.addEventListener('click', () => {
      this.edit();
    });

    $divTaskName.appendChild($checkbox);
    $divTaskName.appendChild($p);

    $divTaskDescription.appendChild($checkbox);
    $divTaskDescription.appendChild($pi);

    $divTaskInfo.appendChild($date);
    $divTaskInfo.appendChild($badge);
    $divTaskInfo.appendChild($delete);
    $divTaskInfo.appendChild($edit);

    $div.appendChild($divTaskName);
    $div.appendChild($divTaskDescription);
    $div.appendChild($divTaskInfo);

    $project.appendChild($div);
    $checkbox.addEventListener('change', () => {
      $p.classList.toggle('done');
    });
    $project.appendChild($div);
    $checkbox.addEventListener('change', () => {
      $pi.classList.toggle('done');
    });
    if (this.priority === 'urgent') {
      $badge.classList.add('urgent');
    }

    $delete.addEventListener('click', () => {
      this.delete();
    });
  }

  delete() {
    currentProject.tasks = currentProject.tasks.filter(
      (task) => task.id !== this.id,
    );
    currentProject.renderTasks();
  }

  edit() {
    const $modal = document.getElementById('myModal');
    $modal.style.display = 'flex';
    const $form = document.getElementById('form-task-edit');
    $form.addEventListener('submit', (e) => {
      e.preventDefault();
      const $title = document.getElementById('task-name-edit');

      const $description = document.getElementById('task-description-edit');
    
      const $date = document.getElementById('task-date-edit');
      
      const $priority = document.getElementById('task-priority-edit');

      this.title = $title.value;
      this.description = $description.value;
      this.date = $date.value;
      this.priority = $priority.value;
      $modal.style.display = 'none';
      currentProject.renderTasks();
    });
  }
}

export default Task;
