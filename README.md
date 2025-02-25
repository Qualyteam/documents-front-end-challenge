# Documents front-end challenge

This project consists in a sample react app and a [JSON-SERVER][1] to implement Qualyteam's front-end challenge.

To run this project you should
1. Install the project

```
    npm install
```

2. You can start the app and server concurrently

```
    npm run dev
```

## Server Endpoints

|  METHOD | ENDPOINT  | DESCRIPTION  |
| ------------ | ------------ | ------------ |
| GET  |  /documents | get all documents  |
|  POST | /documents  |  create a document |
| GET  |  /documents/:id | get a specific document  |
|  PUT |  /documents/:id |  update a document |
|  DELETE |  /documents/:id | delete a document  |
| GET  |  /processes | get all processes  |
|  POST | /processes  |  create a process |
| GET  |  /processes/:id | get a specific process  |
|  PUT |  /processes/:id |  update a process |
|  DELETE |  /processes/:id | delete a process  |


With Json Server you can [filter][2], [paginate][3] and [sort][4] your queries.

## App Dependencies

[Axios][5]

[Ant Design][6]

[React router][7]

[1]: https://github.com/typicode/json-server "json-server"
[2]: https://github.com/typicode/json-server#filter "json-server filter"
[3]: https://github.com/typicode/json-server#paginate "json-server paginate"
[4]: https://github.com/typicode/json-server#sort "json-server sort"
[5]: https://github.com/axios/axios "axios"
[6]: https://ant.design/components/overview/ "ant design"
[7]: https://reactrouter.com/home "react router"
