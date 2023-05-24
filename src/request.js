function makeRequest(method, url, data = null) {
    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
    };

    return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json();
        });
}

const url = 'http://shimmer-mint-laborer.glitch.me/test/';

/* 
    Get an array of all the players existing
*/
async function getAllPlayers () {
    try {
      const resp = await makeRequest('GET', url);
      return resp;
    } catch (error) {
      console.error('GET Error:', error);
      throw error;
    }
  }
/* 
    Get the player by their name
*/
async function getProperPlayer (name) {
    try {
        const resp = await makeRequest('GET', url+name);
        return resp;
    }
    catch (error) {
        console.error('GET Error:', error);
    }
}
/*
    Post player with "postData" attributes
    NOTE : postData = {"nickname" : "nicknameInserted", "password" : "pswdInserted"}
    No other arguments are processed
*/
async function postPlayer (postData) {
    try {
        const resp = await makeRequest('POST', url, postData);
        return resp;
    }
    catch (error) {
        console.error('POST Error:', error);
    }
}
/* 
    Delete the player by their id
*/
async function deletePlayer (id) {
    try {
        const resp = await makeRequest('DELETE', url+id);
        return resp;
    }
    catch (error) {
        console.error('DELETE Error:', error);
    }
}

/* Change the existing player's data
NOTE : In PATCH (a.k.a UPDATE) request,
patchData = {
    "nickname" : "newNickname" (string, changes prev nickname to given, optional)

    "gamePlayed" : true (boolean, tells if you either need to change the player's statistics
                            and increment the amount of games played or not, mandatory)

    "gameWon" : true (boolean, tells to increment the amount of games won, mandatory if "gamePlayed" is true)

    "gameWonAsMafia" : true (boolean, set true if player was playing as mafia during the round he won, mandatory if "gameWon" is true)
}
*/
async function patchPlayer (id, patchData) {
    try {
        const resp = await makeRequest('PATCH', url+id, patchData);
        return resp
    }
    catch (error) {
        console.error('PATCH Error:', error);
        return null
    }
}

export {getAllPlayers, getProperPlayer, postPlayer, deletePlayer, patchPlayer}
