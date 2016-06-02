'use strict';

const AclKnex = require('acl-knex/lib/databaseTasks');

/*
 * ACL Database Setup
 *
 * @param {object} db - Knex Database Object
 *
 * @returns {object} - Knex Database Object
 */
const aclDB = db => {
  return new Promise((res, rej) => {
    AclKnex.createTables([
      null,
      null,
      null,
      'acl_',
      null,
      null,
      null,
      db,
      {}
    ], (err, db) => {
      if (err) {
        rej(err);
      }
      else {
        res(db);
      }
    });
  });
};

module.exports = aclDB;
