<!DOCTYPE html>
<html>
<head>
    <title>ShortURL Parser</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        
        .container {
            margin-top: 50px;
        }

        input[type="text"], input[type="password"] {
            padding: 10px;
            margin-bottom: 10px;
            width: 300px;
        }
        
        input[type="submit"] {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        
        #result {
            margin-top: 20px;
            padding: 10px;
            background-color: #f2f2f2;
            font-size: 14px;
            word-break: break-all;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>ShortURL Parser</h1>
        <form id="urlForm">
            <input type="text" id="urlInput" placeholder="百度网盘链接">
            <br>
            <input type="password" id="pwdInput" placeholder="分享密码">
            <br>
            <input type="submit" value="Parse">
        </form>
        <div id="result"></div>
    </div>

    <script>
        document.getElementById("urlForm").addEventListener("submit", function(event) {
            event.preventDefault();

            var urlInput = document.getElementById("urlInput").value;
            var pwdInput = document.getElementById("pwdInput").value;

            var request = new XMLHttpRequest();
            request.open("POST", "https://pan.baidu.com.qsbaidu.com/wxlist?web=1", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.setRequestHeader("Cookie", "12345678");
            request.onreadystatechange = function() {
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                    var response = request.responseText;
                    document.getElementById("result").textContent = response;
                    parseShortURL(response);
                }
            };

            var requestBody = "clienttype=25&root=1&shorturl=" + urlInput + "&pwd=" + pwdInput;
            request.send(requestBody);
        });

        function parseShortURL(response) {
            var request = new XMLHttpRequest();
            request.open("POST", "https://api.qsbaidu.com/parse.php", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.onreadystatechange = function() {
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                    var response = request.responseText;
                    document.getElementById("result").textContent = response;
                }
            };

            request.send("result=" + response);
        }
    </script>
</body>
</html>