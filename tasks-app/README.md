# tasks-app

This is the homework app for AvantLink done by Kimanzi Mati.

# Findings:

1. GET, POST and PUT requests worked successfully.
2. DELETE yielded an error:

```
HTTP 500

{"errors":[{"message":"Something went wrong, please try again.","exception":"Decoding failed: Syntax error","status_code":500,"success":false}]}

```

I am unclear as to what the issue is because the request is: *DELETE http://homework.avantlink.com/tasks/{task_id}*

# Install

```
npm install
```

# Run it 

```
npm start
```

Then navigate to *http://localhost:4200/*

# Test it 

You can run the unit tests with:

```
npm test
```

You should use the task-server app that emulates the actual API.
Modify the *serviceBaseUrl* property in the
[src/app/services/config.service.ts](src/app/services/config.service.ts)
if you want to use the task-server app.

```
    // serviceBaseUrl: 'http://localhost:4001/v1',
    serviceBaseUrl: 'http://homework.avantlink.com',
```
