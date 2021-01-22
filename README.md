# entity-object-representation-api-rest

**This is a simple rest api with entity object representation and datatypes with some data in json, using express.**

- **Entity**

```typescript
interface Users {
       id: number;
       name: string;
       email: string;
       password: string;
       role: Roles;
}
```

and

```typescript
interface Roles {
       id: number;
       role: string;
}
```

**Data Access Object (DAO)**

```typescript
interface IDAO<Entity, Id> {
       findAll(): Entity[];

       findById(id: Id): Entity[];
}
```

**Implements (Users)**

```typescript
class ModelUsers implements IDAO<Users, number> {
       constructor() {}
       findAll(): Users[] {
              throw new Error("Method not implemented.");
       }
       findById(id: number): Users[] {
              throw new Error("Method not implemented.");
       }
}
```

- Steps to run this project:

1. Run `npm install` command

```console
$ npm install
```

Dependencies:

```json
"devDependencies": {
       "@types/express": "^4.17.11",
       "@types/node": "^14.14.20",
       "typescript": "^4.1.3"
},
"dependencies": {
       "express": "^4.17.1"
}
```

2. Run `npm run build` command

```console
$ npm run build
```

3. Run `npm run start` command

```console
$ npm run start
```
