const url = "https://jsonplaceholder.typicode.com/users";
    async function userInfo(){
        const response = await fetch(url);   // promise[fullfill, pending, reject]
        const data = await response.json();
        const table = document.querySelector('table');
        await data.forEach(element => {
            const {id, name, username, email} = element;
           table.innerHTML +=`
            <tr>
                <th>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${username}</td>
                    <td>${email}</td>
                </th>
            </tr>
           `
        });
    }
    userInfo();