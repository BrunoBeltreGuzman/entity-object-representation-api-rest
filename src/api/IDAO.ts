/*
       Data Access Object (DAO)
*/

export default interface IDAO<Entity, Id> {
       findAll(): Entity[];

       findById(id: Id): Entity[];
}
