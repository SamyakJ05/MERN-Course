// a = document.getElementsByTagName('li');
// console.log(a)

//Fetch

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    return response.json()
})
.then(data => console.log(data))
.catch(error => console.log('error'));