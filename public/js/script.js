const list = document.querySelector("#list")

// axios.get('/users').then((response) => {
//     const users = response.data

//     users.forEach(element => {
//         list.insertAdjacentHTML('beforeend',`<li>${element}</li>`)
//     });
// })
async function getUsers() {
    const response = await axios.get('/users')
    console.log(response);
}

getUsers().then((data)=>{
    console.log(data);
})