import joi from "joi"


const registerValidation =  joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    // phone: joi.string().regex(/^[0-9]{10}$/).required(),
    // number: joi.number().integer().min(0).required(),
   
        
})
export {registerValidation}