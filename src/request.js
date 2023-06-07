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
async function getAllPlayers () {
    try {
      const resp = await makeRequest('GET', url);
      return resp;
    } catch (error) {
      console.error('GET Error:', error);
      throw error;
    }
  }
async function getProperPlayer (name) {
    try {
        const resp = await makeRequest('GET', url+name);
        return resp;
    }
    catch (error) {
        console.error('GET Error:', error);
    }
}
async function postPlayer (postData) {
    try {
        const resp = await makeRequest('POST', url, postData);
        return resp;
    }
    catch (error) {
        console.error('POST Error:', error);
    }
}
async function deletePlayer (id) {
    try {
        const resp = await makeRequest('DELETE', url+id);
        return resp;
    }
    catch (error) {
        console.error('DELETE Error:', error);
    }
}
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
