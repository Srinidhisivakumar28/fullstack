
const result = fetch("http://127.0.0.1:800/greet");
const x = result.then(response => response.json())
x.then(response =>
    window.alert(response.greetMessage+ " "+ response.token)
);