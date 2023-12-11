<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>UMLProject</title>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="js/script.js">

      </script>

    <link rel="stylesheet" href="static/css/chat.css">
    <link rel="stylesheet" href="static/css/home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
    <form method="POST">
        <label for="rollNo">
            Roll Number
        </label><br>
        <input type="text" id="rollNo" name="rollNo"><br>
        <label for="passWord">Password</label><br>
        <input type="password" id="passWord" name="passWord"><br>
        <button type="submit" id="submitButton" name="submitButton">Submit</button>
    </form>
    <?php
     if(isset($_POST['submitButton']))
     {
        $rollNumber = $_POST["rollNo"];
        $password = $_POST["passWord"];
        $con=mysqli_connect("localhost","root","","prasad");
        $sql1="select * from login where id='$rollNumber' and password='$password'";
        $result=mysqli_query($con,$sql1);
        if (mysqli_num_rows($result) > 0) 
        {
            echo "successfuly logged";
            $username=$rollNumber;
            header("Location:home.html");
        }
        else{
            echo '<script> alert("Incorrect Username and Password")</script>';
        }

     }

    ?>
    <div class="chat-bar-collapsible">
        <button id="chat-button" type="button" class="collapsible">Chat with Counsellor
            <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
        </button>

        <div class="content">
            <div class="full-chat-block">

                <div class="outer-container">
                    <div class="chat-container">
                        <div id="chatbox">
                            <h5 id="chat-timestamp"></h5>
                            <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                        </div>

                        <div class="chat-bar-input-block">
                            <div id="userInput">
                                <input id="textInput" class="input-box" type="text" name="msg"
                                    placeholder="Tap 'Enter' to send a message">
                                <p></p>
                            </div>

                            <div class="chat-bar-icons">
                                
                                <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                                    onclick="sendButton()"></i>
                            </div>
                        </div>

                        <div id="chat-bar-bottom">
                            <p></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="static/scripts/responses.js"></script>
<script src="static/scripts/chat.js"></script>
</html>