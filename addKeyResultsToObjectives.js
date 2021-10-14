async function addKeyResultsToObjectives(keyResultsData, allGoalsData, allUsersData) {

    //Init.
    let createdKeyResultsData = [];
    let initialValue;
    let targetValue;
    let ownerId;
    let goalId;
    let keyResultName;
    
    // Iterates each line from the given "OKRs" excel sheet
    for (const keyResult of keyResultsData){

        initialValue = keyResult.initialValue;
        targetValue = keyResult.targetValue;
        keyResultName = keyResult.keyResultName;
        
        // Iterates all of the users that we added and if their email matches the Key Result's owner, it gets the user's id.
        for (const user of allUsersData){
            if (user.email === keyResult.owner){
                ownerId = user.id;
            }
        }

        // Iterates all of the objectives that we added and if their name matches the Key Result's Objective name, it gets the Objective's id.
        for (const goal of allGoalsData){
            if (goal.name === keyResult.objective){
                goalId = goal.id;
            }
        }

        // Creates a Key Result obj. with all values collected thus far.
        let keyResultObject = {
            "ownerId": ownerId,
            "goalId": goalId,
            "targetOperator": "at_least",
            "initialValue": parseFloat(initialValue),
            "target": parseFloat(targetValue),
            "name": keyResultName,
            "manualType": "double",
            "dueDate": "0001-01-01T00:00:00Z",
            "softDueDate": "0001-01-01T00:00:00Z"
        }

        // Pushes object through API, saves response.
        createdKeyResultsData.push(await makeApiPOSTRequest('metrics',keyResultObject));

    }

    console.log("Key Results have been added to Objectives.");

    return createdKeyResultsData;
}