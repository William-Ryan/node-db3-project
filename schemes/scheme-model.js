const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find() {
 return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(id){
    return db('steps')
        .where({ id })
}

function add(data){
    return db('schemes')
    .insert(data)
}

function addStep(data, id){
    return db('steps')
    .insert(data)
    .where(id)
}

function update(changes, id){
    return db('schemes')
        .update(changes)
        .where({ id })
}

function remove(id){
    return db('schemes')
        .where({ id })
        .del()
}