var fs = require('fs');
var data = JSON.parse(fs.readFileSync('./app/data/data_api.json', 'utf8'));

function findAll() {
    return data;
}

function findById(id) {
    return data.filter(function(e) {
        return e.id === id;
    });
}

function save(id, text) {
   var element = data.filter(function(e) { return e.id === id;})[0];
   element.text = text;
   fs.writeFileSync('./app/data/data_api.json', JSON.stringify(data), 'utf8')
}

 function add(text) {
    var arrayOfIds = data.map(function(item){ return Number(item.id);});
    var maxIndex = Math.max.apply(null, arrayOfIds);
    var newRecord = {
        id: String(maxIndex+1),
        text: text
    }
    data.push(newRecord);
    fs.writeFileSync('./app/data/data_api.json', JSON.stringify(data), 'utf8');
    return newRecord;
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
