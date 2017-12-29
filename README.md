# Lightbulb

This C# code is only used to trigger TeamCity build.  
TeamCity needs to be set up with Web Hook plugin (See https://netwolfuk.wordpress.com/teamcity-plugins/, https://github.com/tcplugins/tcWebHooks/wiki/Installing)  
webserver.js is used to run a web server to receive web request from TeamCity.  


### How to run web server using Node js
- Install Node js
- Download webserver.js
- Open command prompt and move to the download directory
- Run "node webserver.js"
Open a web browser and send a POST request to http://127.0.0.1:8080 and see the prompt window. If the request is received on the server, then you will receive json response.
