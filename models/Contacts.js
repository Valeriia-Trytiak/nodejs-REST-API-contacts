import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleSaveError } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleSaveError);

export const contactAddSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .pattern(/^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/)
    .required()
    .messages({
      "any.required": "missing required name field",
      "string.pattern.base":
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),
  email: Joi.string()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required()
    .messages({
      "any.required": "missing required email field",
      "string.pattern.base": "Invalid email address format",
    }),
  phone: Joi.string()
    .min(7)
    .pattern(/^[\d ()-]+$/)
    .required()
    .messages({
      "any.required": "missing required phone field",
      "string.pattern.base": "Phone number must be digits and can contain spaces, dashes, parentheses",
    }),
  favorite: Joi.boolean(),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .pattern(/^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/)
    .messages({
      "string.pattern.base":
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),
  email: Joi.string()
    .min(4)
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .messages({
      "string.pattern.base": "Invalid email address format",
    }),
  phone: Joi.string()
    .min(7)
    .pattern(/^[\d ()-]+$/)
    .messages({
      "string.pattern.base": "Phone number must be digits and can contain spaces, dashes, parentheses",
    }),
  favorite: Joi.boolean(),
});

const Contact = model("contact", contactSchema);

export default Contact;
