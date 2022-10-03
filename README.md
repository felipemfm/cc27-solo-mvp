# FireChat - Client
The backend for this project can be find [here](https://github.com/felipemfm/cc27-solo-mvp-server).
## About

FireChat is a chat room application designed to offer anonymous confirmation between various user. 

Project was deployed through Heroku and can be seen at [FireChat](https://cc27-chat-room.herokuapp.com/).

### Installation
Is recommended that both Server and Client folder to be placed inside the same directory folder. 

 - Create a .env file inside the root folder and add the following:
```
	NODE_ENV=development  
	REACT_APP_LOCAL_SERVER=http://localhost:[Server localhost PORT]/api/
	REACT_APP_DEPLOY_SERVER=/api/  
	BUILD_PATH=[Server directory folder path]\server\build
```
 - Install modules with yarn and run the build script
```
	yarn install
	yarn run build
```
## Technologies
 - JavaScript
 - React
 - TypeScript
