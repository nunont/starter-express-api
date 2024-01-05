

const fs = require('fs');
let toys = JSON.parse(fs.readFileSync('./data/toys.json', 'utf8'));

exports.getAllToys = function(req, res) {
  res.status(200).json(toys);
};

exports.createToy = function(req, res) {
    let id = toys[toys.length - 1].id + 1;
    
    
    let newToy = Object.assign({id : id}, req.body);
    toys.push(newToy);
    
    fs.writeFileSync('./data/toys.json', JSON.stringify(toys));
    
    res.status(201).json(newToy);
};

exports.getToyById = function(req, res) {
    let id = Number(req.params.id);
    let toy = toys.find(toy => toy.id == id);
    
    res.status(200).json(toy);
};

exports.updateToy = function(req, res) {
    let id = Number(req.params.id);
    let updatedToy = req.body;
    
    let toy = toys.find(toy => toy.id == id);
    
    Object.assign(toy, updatedToy);
    
    fs.writeFileSync('./data/toys.json', JSON.stringify(toys));
    
    res.status(200).json(toy);
}

exports.deleteToy = function(req, res) {
    let id = Number(req.params.id);
        
    toys = toys.filter(toy => toy.id != id);
    
    fs.writeFileSync('./data/toys.json', JSON.stringify(toys));
    
    res.status(200).json(true);
}