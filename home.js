
        const username = localStorage.getItem("username");

        // Make an AJAX request to the server for authentication
        fetch('home.php')
        .then(response => response.json())
        .then(data => {

        })
        .catch(error => {
            console.error('Error:', error);
        });

        