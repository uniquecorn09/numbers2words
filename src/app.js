

document.addEventListener("DOMContentLoaded",function(){
    let button = document.getElementById("submit")
    console.log(button)
    button.addEventListener("click", (event) => {
        let number = document.getElementById('number').value;
        let body = {number: number};
        const headers = new Headers({
            "Content-Type": "application/json",
            "Content-Length": JSON.stringify(body).length
        })
        console.log(JSON.stringify(body))
        fetch('/convert', {
            method: 'POST',
            headers : headers,
            body:JSON.stringify(body)
        }).then((res) => {
            res.json().then((data) =>  {
                let res = document.getElementById("result");
                res.innerHTML = data.response;
            });
        });
    })
});