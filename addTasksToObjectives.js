async function addTasksToObjectives(tasksData,usersData,objectivesData){
    
    //Init
    let pushedTasksData = [];
    let ownerId;
    let objectiveId;
    
    // Iterates every "task" which is a single row from "taskData" which is the entire excel sheet
    for (const task of tasksData){

        // Iterates every returned user from our user import method and 
        // if the iterated user's email is the same as the "owner" email in the excel, 
        // we save their ID so we can make them the owner of the submitted task.
        for (const user of usersData){
            if (user.email === task.owner){
                ownerId = user.id;
            }
        }
        
        // Same as above, but we iterate the objectives previously created and match by name, not email.
        for (const objective of objectivesData){
            if (objective.name === task.objective){
                objectiveId = objective.id;
            }
        }

        
        // Creating object with all values collected
        let taskObject = {
            "name": task.taskName,
            "ownerId": ownerId,
            "status": "todo",
            "description": "Imported from Excel",
            "parentId": objectiveId,
            "parentType": "goal"
        }

        // Pushes object through API, saves response.
        pushedTasksData.push(await makeApiPOSTRequest('tasks',taskObject));
        
    }

    console.log("Tasks have been added to Objectives.");
    
    return pushedTasksData;
}