function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => {
        return res.json()
    }).then(body => {
        document.getElementById("json").innerHTML = JSON.stringify(body);
    })
}