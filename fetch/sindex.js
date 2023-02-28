/* Por padrão o fetch faz um get.
fetch('https://reqres.in/api/users/1000')
 .then((res) => res.json())
 .then((data) => console.log(data))
 .catch((err) => console.log(err))
*/

fetch('https://reqres.in/api/users/1000', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: ' Jorge',
    }),
})
.then((res => res.json()))
.then((data) => {
    console.log(data);
})