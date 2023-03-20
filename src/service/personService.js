export const calculateSalary = async () => {
    let inss = 0.13
    let discountVoucher = 0.06
    if(nightWorker === true) {
        let finalSalary = salary - (salary * inss) - (salary * discountVoucher) + (salary * 0.05) + calculateNumberChildren
    } else {
        let finalSalary = salary - (salary * inss) - (salary * discountVoucher) + calculateNumberChildren
    }
    return finalSalary
}

const calculateNumberChildren = async () => {
    return (childrenNumber >= 3) ? 150 : childrenNumber  * 50
}

export default calculateNumberChildren;