const express = require('express');

const router = express.Router();

const Person = require('../model/personModel')

const { calculateSalary, calculateNumberChildren} = require('../service/personService');

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

// router.get('/salaries/:id', async (req, res) => {
//     try {
//         let person = await Person.findById(req.params.id);
//         let childrenValue = 0
//         let inss = 0.13
//         let discountVoucher = 0.06
//         let finalSalary = 0
//         if (person.childrenNumber >= 3) {
//             childrenValue = 150
//         } else {
//             childrenValue = person.childrenNumber * 50
//         }
//         if(person.nightWorker === true) {
//             finalSalary = person.payCheck - (person.payCheck * inss) - (person.payCheck * discountVoucher) + (person.payCheck * 0.05) + childrenValue
//         } else {
//             finalSalary = person.payCheck - (person.payCheck * inss) - (person.payCheck * discountVoucher) + childrenValue
//         }
//         res.status(200).json(finalSalary)
        
//     } catch (error) {
//         console.log(error)
//     }

// })

router.get('/salaries/:id', async (req, res) => {
    try {
        let person = await Person.findById(req.params.id);
        // let childrenValue = 0
        let childrenValue = calculateNumberChildren(person);
        console.log(childrenValue)
        res.status(200).json(childrenValue)
        
        
    } catch (error) {
        console.log(error)
    }

})

    //usar o mongoose pra pegar todos os funcionarios
    //fazer um loop por cada funcionario chamando a funcao que calcula seu salario
    //e por fim ir adicionando o valor calculado pela função na variavel que sera retornada
    // return salarioDeTodosFuncionarios;

module.exports = router