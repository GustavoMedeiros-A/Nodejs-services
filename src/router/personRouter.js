const express = require('express');

const router = express.Router();

const Person = require('../model/personModel')

const { calculateSalary } = require('../service/personService');

router.get('/person/getAll', async (req, res) => {
    try {
        let allPerson = await Person.find()
        res.status(200).json({allPerson})
    } catch (error) {
        console.log(error)
    }
})



router.get('/person/:id', async (req, res) => {
    try{
        let person = await Person.findById(req.params.id);
        // res.status(200).json(`Name of the person: ${name}`)
        res.status(200).json({person})
    } catch (error) {
        console.log(error)
    }
})

router.post('/people', async (req, res) => {
    let { name, payCheck, nightWorker, childrenNumber } = req.body
    let person = new Person({name, payCheck, nightWorker, childrenNumber})

    try {
        await person.save()
        res.status(200).json(`person ${name} saved successfully`);
    } catch (error) {
        console.log(error)
    }
})

router.delete('/people/:id', async (req, res) => {
    try {
        let name = await Person.findByIdAndRemove(req.params.id)
        res.status(200).json(`Person ${name} removed`)
    } catch (error) {
        console.log(error)
    }
});
router.get('/salaries/getSalary', async (req, res) => {
    try {
        let person =  await Person.find()
        let allSalaries = 0
        person.forEach(person => {
            let salary = calculateSalary(person.nightWorker, person.payCheck, person.childrenNumber)
            allSalaries = allSalaries + salary
        })
        res.status(200).json(allSalaries)
    } catch (error) {
        console.log(error)
    }
})

router.get('/salaries/:id', async (req, res) => {
    try {
        let person = await Person.findById(req.params.id);
        let salary = calculateSalary(person.nightWorker, person.payCheck, person.childrenNumber)
        res.status(200).json(salary)
        
    } catch (error) {
        console.log(error)
    }
});



    //usar o mongoose pra pegar todos os funcionarios
    //fazer um loop por cada funcionario chamando a funcao que calcula seu salario
    //e por fim ir adicionando o valor calculado pela função na variavel que sera retornada
    // return salarioDeTodosFuncionarios;

module.exports = router