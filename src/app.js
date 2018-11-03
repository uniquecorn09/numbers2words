const convert = () => {
    let number = document.getElementById('number').value;
    if(!parseInt(number)){
        printResult("Please insert a number")
        return;
    }
    let body = {number: number};
    const headers = new Headers({
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify(body).length
    })
    fetch('/convert', {
        method: 'POST',
        headers : headers,
        body:JSON.stringify(body)
    }).then((res) => {
        res.json().then((data) =>  {
            printResult(data.response)
        });
    });
}

const printResult = (string) => {
    let res = document.getElementById("result");
    res.innerHTML = string;
}

document.addEventListener("DOMContentLoaded",function(){
    let button = document.getElementById("submit")
    button.addEventListener("click", convert)
    let input = document.getElementById("number");
    input.addEventListener("keydown", (event) => {
        if(event.keyCode === 13){
            convert();
        }
    })
});