
const calculateSalary = (nightWorker, salary, childrenNumber) => {
    let inss = 0.13
    let discountVoucher = 0.06
    let finalSalary = 0
    if(nightWorker === true) {
        return finalSalary = salary - (salary * inss) - (salary * discountVoucher) + (salary * 0.05) + calculateNumberChildren(childrenNumber)
    } else {
        return finalSalary = salary - (salary * inss) - (salary * discountVoucher) + calculateNumberChildren(childrenNumber)
    }
}

const calculateNumberChildren = (childrenNumber) => {
    return (childrenNumber >= 3) ? 150 : childrenNumber  * 50
}
// const Person = require('../model/personModel')


// const calculateNumberChildren = async (res, req) => {
//     try {
//         let person = await Person.findById(req.params.id);
//         let childrenValue = 0
//         if (person.childrenNumber >= 3) {
//             childrenValue = 150
//         } else {
//             childrenValue = person.childrenNumber * 50
//         }
//         res.status(200).json(childrenValue)
        
//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = { calculateSalary, calculateNumberChildren };