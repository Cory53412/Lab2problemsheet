let taskArrays: Array<string> = []

//part 2 of lab2, add task function
function addTask(task: string): number {
    taskArrays.push(task);//adding task to array
    console.log(" item " + task + " has been added to the array");
    return taskArrays.length;//returning number of items in array
}

let numberOftasks: number = addTask("Eat Breakfast");
console.log(" The number of tasks to do today is " + numberOftasks)



function listAllTasks(task: string) {
    for (let i = 0; i < taskArrays.length; i++) {
        console.log("Following item has been added to the array " + taskArrays[i]);
    }
}

function deleteTask(task: string): number {
    let index: number = taskArrays.indexOf(task);
    if (index > -1) {
        taskArrays.splice(index, 1)//deletes certain position from array
        console.log("Item " + task + " deleted from array");
    }

    else {
        console.log("Item " + task + "Not in Array");
    }
    return taskArrays.length;
}



