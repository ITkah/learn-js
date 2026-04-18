const SERVER_BASE_URL = "http://localhost:3000/api/";

// function loadData() {
//     return fetch(`${SERVER_BASE_URL}users`)
// }

// async function apiWrapper(apiRequest) {
//     const resposne = await apiRequest
//     return resposne.json()
// }

// function postData(data) {
//     return fetch(`${SERVER_BASE_URL}users`, {
//         body: JSON.stringify(data),
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }

// async function init() {
//     console.time('users')
//     const { data: users } = await apiWrapper(loadData())
//     console.log(users);
//     console.timeEnd('users')
//     console.time('createUser')
//     const { data: newUser } = await apiWrapper(postData({
//         name: 'TEST',
//         email: 'test@gmail.com'
//     }))
//     console.log(newUser);
//     console.timeEnd('createUser')
// }

// init()

// main(); с помощью функции запускаеться проект
// будут моковые данные юзеров будет 3 юзера
// написать функцию по выводу юзеров на страницу

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmail.com",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@gmail.com",
  },
  {
    id: 4,
    name: "Alice Smith",
    email: "alice@gmail.com",
  },
  {
    id: 5,
    name: "Ron Smith",
    email: "ron@gmail.com",
  },
];

let counter = 0;

//написать функцию которая будет отправлять юзеров методом Post на сервер по очереди

async function main() {
  //console.log("Starting to send users to server...");
  //await sendUsersParallel(users);
  //console.log("All users have been sent to server.");
  await postUser(users);
}

async function postUser(user) {
  if (Array.isArray(user)) {
    const results = [];
    for (const item of user) {
      results.push(await postUser(item));
    }
    return results;
  }

  try {
    const response = await fetch(`${SERVER_BASE_URL}users`, {
      body: JSON.stringify(user),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log(`User sent: ${user.name}`, data);
    return { ...data, status: response.status };
  } catch (error) {
    console.error(`Error occurred while sending user: ${user.name}`, error);
    return null;
  }
}

// async function fetchUserParallel(user) {
//   const response = await fetch(`${SERVER_BASE_URL}users`, {
//     body: JSON.stringify(user),
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(`Request failed ${response.status}: ${errorText}`);
//   }

//   const data = await response.json();
//   console.log(`User sent: ${user.name}`, data);
//   return { ...data, status: response.status };
// }

// async function sendUsersParallel(usersList = []) {
//   const promises = usersList.map(async (user) => {
//     try {
//       console.log(`Sending user: ${user.name} to server...`);
//       return await fetchUserParallel(user);
//     } catch (error) {
//       console.error(`Error occurred while sending user: ${user.name}`, error);
//       return null;
//     }
//   });

//   const results = await Promise.all(promises);
//   console.log("Parallel send completed", results);
//   return results;
// }

main();

/* Old sequential version:
function fetchUser(user) {
    counter++;
  return fetch(`${SERVER_BASE_URL}users`, {
    body: JSON.stringify(user),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(async response => {
    console.log('test' + counter);
    if (counter > 1) {
        return response;
    }
  })
  .then(async response => {  
        const data = await response.json();
        console.log(data);
        return {
            ...data,
            status: response.status
        }; 
    })
    .finally(() => {console.log(`Finished processing user: ${user.name}`);
    });
}

async function sendUsers(usersList = []) {
    //const usersPormises = usersList.map(user => fetchUser(user));
    //await Promise.all(usersPormises);
    for (const user of usersList) {
        try{
            console.log(`Sending user: ${user.name} to server...`);
            await fetchUser(user);
        }
        catch (error) {
            console.error(`Error occurred while sending user: ${user.name}`);
        }
    }
}
*/
