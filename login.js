const handleLogin = (event) => {
    event.preventDefault();  
    const username = getValue("username");
    const password = getValue("password");
    const info = {
        username,
        password,
    };
    fetch("https://golpokuri-api.onrender.com/login/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
    })
    .then((res) => res.json().then(data => ({status: res.status, body: data})))
    .then(({status, body}) => {
        if (status === 200) { 
            const token = body.token;
            const user_type = body.user_type;
            localStorage.setItem("token",token);
            localStorage.setItem("user_type",user_type);
            if(user_type == 'writer'){
                localStorage.setItem("writer",body.user_id);
            }
            alert("login successfully");
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500);
        } else {
            document.getElementById("error").innerText = body.detail || "Login failed! Please check your username and password.";
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        document.getElementById("error").innerText = "An error occurred. Please try again.";
    });
};
const getValue = (id) => {
    return document.getElementById(id).value;
};
