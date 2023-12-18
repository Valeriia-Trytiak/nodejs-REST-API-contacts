import Joi from "joi";

export const contactAddSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .pattern(/^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/)
    .required()
    .messages({
      "any.required": "missing required name field",
      "any.pattern":
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),
  email: Joi.string()
    .trim()
    .min(10)
    .pattern(/^\+?\d{1,4}?[ .\-s]?(\(\d{1,3}?\))?([ .\-s]?\d{1,4}){1,4}$/)
    .required()
    .messages({
      "any.required": "missing required email field",
      "any.pattern": "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
    }),
  phone: Joi.string().required().messages({
    "any.required": "missing required phone field",
  }),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});
