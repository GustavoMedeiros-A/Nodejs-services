
const calculateSalary = async () => {
    let inss = 0.13
    let discountVoucher = 0.06
    if(nightWorker === true) {
        let finalSalary = salary - (salary * inss) - (salary * discountVoucher) + (salary * 0.05) + calculateNumberChildren
    } else {
        let finalSalary = salary - (salary * inss) - (salary * discountVoucher) + calculateNumberChildren
    }
    return finalSalary
}

const calculateNumberChildren = async (person) => {
    return (person.childrenNumber >= 3) ? 150 : person.childrenNumber  * 50
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