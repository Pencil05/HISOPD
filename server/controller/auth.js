const bcrypt = require('bcryptjs')
const prisma = require("../prisma/prisma")

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) {
            return res.status(400).json({ message: "email is invalid ;-;" })
        }

        if (!password) {
            return res.status(400).json({ message: "password is invalid ;-;" })
        }

        const checkuser = await prisma.user.findFirst({
            where: { email }
        })

        if (checkuser) {
            return res.status(400).json({ message: "this user already exists ;-;" })
        }

        const hashPass = await bcrypt.hash(password, 10)

        const createUser = await prisma.user.create({
            data: {
                email,
                password: hashPass
            }
        })

        return res.status(200).json({ CreatedUser: createUser })
    } catch (error) {
        res.json({ haveError: error })
    }

}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Enter Your email/password! :(" });
        }

        const user = await prisma.user.findFirst({
            where: { email }
        });

        if (!user) {
            return res.status(404).json({ message: "Not Have that user :(" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Password is not correct :)" });
        }

        return res.status(200).json({
            message: "logined ☻",
            user: {
                id: user.id,
                email: user.email
            }
        });
    } catch (error) {
        res.json({ haveError: error })
    }

};

exports.checkrole = async (req,res)=>{
    try {
        const { email, password, role } = req.body
        res.send(role)
    } catch (error) {
        res.json({ErrorMessage:error})
    }
}