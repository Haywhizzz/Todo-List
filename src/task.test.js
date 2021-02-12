import { setId } from './dom';
import Task from './task';

describe('Task', () => {
  let task;
  beforeEach(() => {
    task = new Task(
      'title',
      'description',
      'dueDate',
      'priority',
      'status',
    //   'note',
    );
  });

  test('create task', () => {
    expect(task instanceof Task).toBe(true);
    expect(task).toEqual({
      title: 'title',
      description: 'description',
      date: 'dueDate',
      // setId: id,
      priority: 'priority',
      status: 'status',
      // _note: 'note',
      
    });
  });

  test('setter of title', () => {
    task.title = 'new title';
    expect(task.title).toBe('new title');
  });

  test('setter of description', () => {
    task.description = 'new description';
    expect(task.description).toBe('new description');
  });

  test('setter of dueDate', () => {
    task.dueDate = 'new dueDate';
    expect(task.dueDate).toBe('new dueDate');
  });

  test('setter of priority', () => {
    task.priority = 'new priority';
    expect(task.priority).toBe('new priority');
  });

  test('setter of status', () => {
    task.status = 'new status';
    expect(task.status).toBe('new status');
  });

  // test('setter of note', () => {
  //   task.note = 'new note';
  //   expect(task.note).toBe('new note');
  // });
});