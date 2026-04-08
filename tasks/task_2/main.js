const SERVER_BASE_URL = 'http://localhost:3000/api/'

function loadData() {
    return fetch(`${SERVER_BASE_URL}users`)
}

async function apiWrapper(apiRequest) {
    const resposne = await apiRequest
    return resposne.json()
}

function postData(data) {
    return fetch(`${SERVER_BASE_URL}users`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function getCurrentTime() {

}

async function init() {
    console.time('users')
    const { data: users } = await apiWrapper(loadData())
    console.log(users);
    console.timeEnd('users')
    console.time('createUser')
    const { data: newUser } = await apiWrapper(postData({
        name: 'TEST',
        email: 'test@gmail.com'
    }))
    console.log(newUser);
    console.timeEnd('createUser')
}

init()
