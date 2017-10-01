var fs = require('fs');
var data = JSON.parse(fs.readFileSync('./app/data/data_api.json', 'utf8'));

function findAll() {
    return data;
}

function findById(id) {
    return data.filter(function(e) {
        return e.id === id;
    })[0];
}

function save(id, record) {
   var element = data.filter(function(e) { return e.id === id;})[0];
   element.text = record.text;
   fs.writeFileSync('./app/data/data_api.json', JSON.stringify(data), 'utf8')
}

 function add(record) {
    var arrayOfIds = data
        .filter(function(e) { return e.id; })
        .map(function(e) { return Number(e.id);});

    var maxIndex = Math.max.apply(null, arrayOfIds);

    record.id = String(maxIndex+1);
    data.push(record);
    fs.writeFileSync('./app/data/data_api.json', JSON.stringify(data), 'utf8');
    return record;
}

function remove(id){
    var deleteRow = data.filter(function(e) {return e.id !== id;});
    fs.writeFileSync('./app/data/data_api.json', JSON.stringify(deleteRow), 'utf8')
}

module.exports = {
    findAll: findAll,
    findById: findById,
    save: save,
    add: add,
    remove: remove
};
