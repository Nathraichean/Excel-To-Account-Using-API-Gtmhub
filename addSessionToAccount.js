async function addSessionToAccount(){

    // Hard coded session object as only one is needed, but this can have its own function like the others
    const sessionObject = {     
      "title": "Q4 2021",      
      "access": null,               
      "parentId": "",          
      "status": "open", 
      "cadenceType": "MONTHLY", 
      "cadenceStart": {
          "periodOfMonth": "firstDay"
      },
      "workflow": null,
      "cadenceTimeZone": "Europe/Kiev",
      "start": "2021-09-30T21:00:00.000Z",
      "end": "2021-12-31T21:59:59.999Z"
    }

    console.log("Session has been created.");
    
    return await makeApiPOSTRequest('sessions',sessionObject);
}