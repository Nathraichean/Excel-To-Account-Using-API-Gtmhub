async function addUsersToAccount(usersArray){
    
    //Init.
    let createdUsersArray = [];
    
    // Pushes user objects through API, saves response in array, array gets returned.
    // No mockup user has been created because I modified the excel table in a format where the Excel reader would return a User object in the correct format.
    for (const user of usersArray){
        createdUsersArray.push(await makeApiPOSTRequest('users',user));
    }

    console.log("Users have been created.");

    return createdUsersArray;
}