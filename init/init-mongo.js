print('Start #################################################################');

db = db.getSiblingDB('tempdb');
db.createUser(
  {
    user: 'tempuser',
    pwd: 'temppass',
    roles: [{ role: 'readWrite', db: 'tempdb'}],
  },
);
// Add Mongo Shell Commands to import data to mongo.
print('END #################################################################');
