fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log("data recurred:", data);
    })
    .catch(error => {
        console.error("error while getting data :", error);
    });