fetch('https://jsonkeeper.com/b/LUH3', {
    method:"POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
name:"User 1"
    })
})
.then((res) => {
    if(res.ok){
        console.log("SUCCES")
    }
    else {
        console.log("NOT Succesful")
    }
    return res.json()}
)
.then(data => console.log(data))
.catch(error => console.log("ERROR"))
