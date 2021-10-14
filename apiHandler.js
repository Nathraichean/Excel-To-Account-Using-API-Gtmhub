function makeApiPOSTRequest(methodPath, data){

    const url = 'https://app.gtmhub.com/api/v1/' + methodPath; // Base API Url + API Method
    const http = new XMLHttpRequest();
    const accountId = '615ce221087f870001b95442'; // This is your ID from GtmHub > Settings > API Tokens > Account ID
    const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2d0bWh1Yi5jb20vYXBwX21ldGFkYXRhL2FjY291bnRJZCI6IjYxNWNlMjIxMDg3Zjg3MDAwMWI5NTQ0MiIsImlhdCI6MTYzMzQ3NzkzOSwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDYzOTI3NDY0MjQ0NzU0MzMyMzIifQ.1JW10ejgK3-SX43b_3DCAHqFaO1eVY65VQWNpnM1BEA`; 
    // This is your token from GtmHub > Settings > API Tokens > Copy the token from there


    // Creates a promise so that we can await the response and store it.
    return new Promise(function (resolve, reject) {
        const http = new XMLHttpRequest();
        http.onreadystatechange = function(e) {
          if (http.readyState === 4) {
            if (http.status === 201) {
              resolve(JSON.parse(http.response));
            } else {
              reject(http.status);
            }
          }
        }
        http.ontimeout = function () {
          reject('timeout')
        }
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/json');
        http.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        http.setRequestHeader('gtmhub-accountId', accountId);
        http.send(JSON.stringify(data));
      })
};