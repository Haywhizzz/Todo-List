import { createHtmlElement, setId } from "./dom";

const $project = document.querySelector("#projects .card");

class Project {
  constructor(title) {
    this.title = title;
    this.id = setId();
    this.tasks = [];
  }

  render() {
    const $div = createHtmlElement("div", this.id, ["project"], null);
    const $title = createHtmlElement("p", null, null, this.title);
    const $delete = createHtmlElement("img", null, ["delete"], null);
    $delete.src = "./img/delete.svg";
    $delete.addEventListener("click", () => {
      this.delete();
    });

    $div.appendChild($title);
    $div.appendChild($delete);

    $project.appendChild($div);
    $div.addEventListener("click", () => {
      currentProject = this;
      currentProject.active = false;
      this.renderTasks();
      let projectsClass = document.querySelectorAll(".project");
      projectsClass.forEach((f) => (f.classList.value = "project"));
      let delButtons = document.querySelectorAll(".delete");
      delButtons.forEach((button) => (button.src = "./img/delete.svg"));
      if (!$div.classList.value.includes("active")) {
        $div.classList.add("active");
        $delete.src = "./img/delete-white.svg";
      } else return;
    });
  }

  delete() {
    projectsArray = projectsArray.filter((project) => project.id !== this.id);
    Project.renderProjects();
  }

  renderTasks() {
    const $tasks = document.querySelector("#task-container");
    $tasks.innerHTML = ``;
    this.tasks.forEach((task) => task.render());
  }

  static renderProjects() {
    $project.innerHTML = "";
    projectsArray.forEach((project) => project.render());
  }
  static setCurrentProject(project) {
    currentProject = project;
  }
}

let projectsArray = [new Project("Test Project")];
let currentProject = projectsArray[0];

export { Project, projectsArray, currentProject };
