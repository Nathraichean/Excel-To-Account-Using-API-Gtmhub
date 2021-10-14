async function addObjectivesToSession(goalNames, sessionId){

    // Init
    const accountId = "615ce221087f870001b95442";
    const pushedGoalsData = [];

    // Creates a goal for every row 
    for (const goalName of goalNames){

        let goal = {
            "ownerId": accountId,
            "description": "Imported from Excel",
            "name": goalName,
            "dateFrom": "2021-09-30T21:00:00Z",
            "dateTo": "2021-12-31T21:59:59.999Z",
            "sessionId": sessionId,
        }

        // Pushes object through API, saves response.
        pushedGoalsData.push(await makeApiPOSTRequest('goals',goal));
        
    }

    console.log("Objectives have been added.");

    return pushedGoalsData;
}