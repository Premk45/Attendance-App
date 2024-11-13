const Joi = require('joi');
const students = require('./models/students');

module.exports = studentSchema = Joi.object({
    students : Joi.object({
        image : Joi.string().required(),
        name : Joi.string().required(),
        last_name : Joi.string().required(),
        DOB : Joi.date().required(),
        father_name : Joi.string().required(),
        mother_name : Joi.string().required(),
        s_phone : Joi.number().required(),
        p_phone : Joi.number().required(),
        
    }).required()
})