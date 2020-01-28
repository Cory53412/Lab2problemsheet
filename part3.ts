import {taskInterface} from './interface';

class Todos implements taskInterface{
    taskArrays: Array<string>=[];

    addTask(task: string): number {
        this.taskArrays.push(task);//adding task to array
        console.log(" item " + task + " has been added to the array");
        return taskArrays.length;//returning number of items in array
    }

    listAllTasks(task: string) {
        for (let i = 0; i < taskArrays.length; i++) {
            console.log("Following item has been added to the array " + taskArrays[i]);
        }
    }
}

let todo = new Todos();
todo.addTask("complete Lab");
todo.listAllTasks()