# TestApp

This is the homework app for AvantLink done by Kimanzi Mati.

# Findings:

1. GET, POST and PUT requests worked successfully.
2. DELETE yielded an error:

```
HTTP 500

{"errors":[{"message":"Something went wrong, please try again.","exception":"Decoding failed: Syntax error","status_code":500,"success":false}]}

```

I am unclear as to what the issue is because the request is: *DELETE http://homework.avantlink.com/tasks/{task_id}*
