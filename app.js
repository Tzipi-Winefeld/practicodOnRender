
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
// const cors=require('cors')

dotenv.config()

const app = express()

app.use(bodyParser.json())
// app.use(cors())

//endpoints
app.get('', (req, res) => {
    res.status(200).send(
        [
            {
              "cursor": "XhxFHSGWfkUyYnExaGJsczczODdlY29n",
              "service": {
                "autoDeploy": "yes",
                "branch": "main",
                "createdAt": "2024-03-13T15:07:28.326965Z",
                "id": "srv-cnos2bq1hbls7387ecog",
                "name": "server-todos-project",
                "notifyOnFail": "default",
                "ownerId": "usr-cnkrhndjm4es73bil6o0",
                "repo": "https://github.com/Tzipi-Winefeld/todos-project",
                "rootDir": "./TodoApi",
                "serviceDetails": {
                  "buildPlan": "starter",
                  "env": "docker",
                  "envSpecificDetails": {
                    "dockerCommand": "",
                    "dockerContext": ".",
                    "dockerfilePath": "./Dockerfile"
                  },
                  "healthCheckPath": "",
                  "numInstances": 1,
                  "openPorts": null,
                  "plan": "free",
                  "pullRequestPreviewsEnabled": "no",
                  "region": "singapore",
                  "url": "https://server-todos-project.onrender.com"
                },
                "slug": "server-todos-project",
                "suspended": "not_suspended",
                "suspenders": [],
                "type": "web_service",
                "updatedAt": "2024-03-27T09:45:09.565251Z"
              }
            },
            {
              "cursor": "LJqaVdW0HqI5am43OXQ4YzczOGsydG5n",
              "service": {
                "autoDeploy": "yes",
                "branch": "main",
                "createdAt": "2024-03-12T15:29:19.016849Z",
                "id": "srv-cno79jn79t8c738k2tng",
                "name": "todos-my-project",
                "notifyOnFail": "default",
                "ownerId": "usr-cnkrhndjm4es73bil6o0",
                "repo": "https://github.com/Tzipi-Winefeld/todos-project",
                "rootDir": "./client/ToDoListReact-master",
                "serviceDetails": {
                  "buildCommand": "npm run build",
                  "buildPlan": "starter",
                  "publishPath": "build",
                  "pullRequestPreviewsEnabled": "no",
                  "url": "https://todos-my-project.onrender.com"
                },
                "slug": "todos-my-project",
                "suspended": "not_suspended",
                "suspenders": [],
                "type": "static_site",
                "updatedAt": "2024-03-27T09:45:33.993792Z"
              }
            }
          ]
    )
})

//יצירת מאזין
app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})
// ==========================================================
// const ob=[
//                 {
//                   "cursor": "XhxFHSGWfkUyYnExaGJsczczODdlY29n",
//                   "service": {
//                     "autoDeploy": "yes",
//                     "branch": "main",
//                     "createdAt": "2024-03-13T15:07:28.326965Z",
//                     "id": "srv-cnos2bq1hbls7387ecog",
//                     "name": "server-todos-project",
//                     "notifyOnFail": "default",
//                     "ownerId": "usr-cnkrhndjm4es73bil6o0",
//                     "repo": "https://github.com/Tzipi-Winefeld/todos-project",
//                     "rootDir": "./TodoApi",
//                     "serviceDetails": {
//                       "buildPlan": "starter",
//                       "env": "docker",
//                       "envSpecificDetails": {
//                         "dockerCommand": "",
//                         "dockerContext": ".",
//                         "dockerfilePath": "./Dockerfile"
//                       },
//                       "healthCheckPath": "",
//                       "numInstances": 1,
//                       "openPorts": null,
//                       "plan": "free",
//                       "pullRequestPreviewsEnabled": "no",
//                       "region": "singapore",
//                       "url": "https://server-todos-project.onrender.com"
//                     },
//                     "slug": "server-todos-project",
//                     "suspended": "not_suspended",
//                     "suspenders": [],
//                     "type": "web_service",
//                     "updatedAt": "2024-03-27T09:45:09.565251Z"
//                   }
//                 },
//                 {
//                   "cursor": "LJqaVdW0HqI5am43OXQ4YzczOGsydG5n",
//                   "service": {
//                     "autoDeploy": "yes",
//                     "branch": "main",
//                     "createdAt": "2024-03-12T15:29:19.016849Z",
//                     "id": "srv-cno79jn79t8c738k2tng",
//                     "name": "todos-my-project",
//                     "notifyOnFail": "default",
//                     "ownerId": "usr-cnkrhndjm4es73bil6o0",
//                     "repo": "https://github.com/Tzipi-Winefeld/todos-project",
//                     "rootDir": "./client/ToDoListReact-master",
//                     "serviceDetails": {
//                       "buildCommand": "npm run build",
//                       "buildPlan": "starter",
//                       "publishPath": "build",
//                       "pullRequestPreviewsEnabled": "no",
//                       "url": "https://todos-my-project.onrender.com"
//                     },
//                     "slug": "todos-my-project",
//                     "suspended": "not_suspended",
//                     "suspenders": [],
//                     "type": "static_site",
//                     "updatedAt": "2024-03-27T09:45:33.993792Z"
//                   }
//                 }
//               ]
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<!DOCTYPE html>');
//     res.write('<html lang="en">');
//     res.write('<head>');
//     res.write('<meta charset="UTF-8">');
//     res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
//     res.write('<title>Objects List</title>');
//     res.write('</head>');
//     res.write('<body>');
//     res.write('<h1>Objects List</h1>');
//     res.write('<ul>');
//     res.write('<li>Object 1 - Description 1</li>');
//     res.write('<li>Object 2 - Description 2</li>');
//     res.write('<li>Object 3 - Description 3</li>');
//     ob.forEach(object => {
//         res.write(`<li>${object.service.repo} - ${object.cursor}</li>`);
//     });
//     res.write('</ul>');
//     res.write('</body>');
//     res.write('</html>');
//     res.end();
// });

// const PORT = 3001;
// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
