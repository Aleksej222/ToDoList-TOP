import { Task } from "./Task";
import { Project } from "./Project";


let allTasks = new Project('All tasks', []);
// console.log(allTasks);

let task1 = new Task('Study','You have to study classes.', '18/08/23','high');
// console.log(task1);

let project1 = new Project('Learning', [task1]);
// console.log(project1);