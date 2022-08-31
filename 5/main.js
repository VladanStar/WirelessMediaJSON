console.log(fetch('https://jsonkeeper.com/b/LUH3')
.then((response) => response.json())
.then((data) => console.log(data))
)