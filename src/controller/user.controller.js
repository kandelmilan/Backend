const User = require("../model/User.model")
const Joi = require("joi")


const signupSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.empty": "Username is required",
            "string.min": "Username must be at least 3 characters",
            "string.max": "Username cannot be longer than 30 characters"
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Invalid email format"
        }),

    password: Joi.string()
        .min(6)
        .max(100)
        // .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$"))
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters",
            "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        }),

    role: Joi.string()
        .valid("buyer", "seller", "superadmin")
        .default("buyer")
        .messages({
            "any.only": "Role must be either buyer, seller, or superadmin"
        }),
});


const login = async (req, res) => {
    console.log(req.body)
}


const signup = async (req, res) => {
    const data = req.body
    try {
        const { error, value } = signupSchema.validate(data,{
            allowUnknown:true,
            abortEarly:false
        })
        if (!error) {
            // do not store password in plain text
            const user = await User.create(value)
            res.status(200).send(user)// fix me: do not send user with password

        } else {
            throw error
        }
        res.status(200).send("User successfully created")
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    login, signup
}