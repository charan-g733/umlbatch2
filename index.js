document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('rollNo').value;
        const password = document.getElementById('passWord').value;

        fetch('index.php', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // This line will throw an error if the response is not valid JSON
          })
        .then(data => {
            if (data.success) {
                console.log(username);
                localStorage.setItem("username",username);
                document.getElementById('message').textContent = 'Login successful. Redirecting...';
                window.location.href = "home.html";
            } else {
                console.log("hello");
                document.getElementById('message').textContent = 'Login failed. Please check your credentials.';
            }
        })
        
    });
});
