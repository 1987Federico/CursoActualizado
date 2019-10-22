const Joi = require('@hapi/joi');

const empSchema = Joi.object({
  name: Joi
    .string()
    .min(3)
    .max(8)
    .required(),
  position: Joi
    .string()
    .required(),
  office: Joi
    .string()
    .required(),
  salary: Joi
    .number()
    .required()
})

const validation = () => {
  const scope = this;
  scope.Validate = (emp) => {
    const hasError = empSchema.validate(emp, { abortEarly: false }).error;
    const messasge = !hasError ? "" : hasError.details.map((err) => err.message).join(', ');
    return { success: !hasError, messasge };
  }
  return scope;
};

module.exports = validation();