const CoreDatamapper = require('./coreDatamappers');

module.exports = class user extends CoreDatamapper {
    static tableName = 'users';
};
