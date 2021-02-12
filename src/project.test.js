import { Project } from './project';

describe('Project', () => {
  let project;
  beforeEach(() => {
    project = new Project('Test Project');
  });

  test('create project', () => {
    expect(project instanceof Project).toBe(true);
    expect(project.title).toBe('Test Project');
    expect(project.tasks.length).toBe(0);
    expect(Array.isArray(project.tasks)).toBe(true);
  });

  test('setter of title', () => {
    project.title = 'Real project';
    expect(project.title).toBe('Real project');
  });

  test('setter of tasks', () => {
    project.tasks = ['added task'];
    expect(project.tasks[0]).toBe('added task');
  });

  test('render tasks to project', () => {
    project.addTask();
    expect(project.tasks.length).not.toBe(0);
  });

  test('delete tasks from project', () => {
    const task = 'first task';
    const task2 = 'second task';
    project.addTask(task);
    project.addTask(task2);
    project.deleteTask(0);
    expect(project.tasks.length).toBe(1);
    expect(project.tasks[0]).toBe('second task');
  });
});