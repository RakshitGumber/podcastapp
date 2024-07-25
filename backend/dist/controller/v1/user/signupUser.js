import Users from "../../../model/user/index.js";
import bcryptjs from "bcryptjs";
export default async function signupUser({ username, email, password, subscribed, }) {
    try {
        const usernameExists = await Users.findOne({ username });
        if (usernameExists)
            return { success: false, message: "username already exists" };
        const emailExists = await Users.findOne({ email });
        if (emailExists)
            return { success: false, message: "email already exists" };
        const hashedPassword = await hashPassword(password);
        await Users.create({
            username,
            email,
            password: hashedPassword,
            subscribed,
        });
        return {
            success: true,
            user: {
                username,
                email,
            },
        };
    }
    catch (error) {
        console.error("Error while signing up:", error);
        return {
            success: false,
            message: "Error while signing up",
        };
    }
}
function hashPassword(password) {
    return new Promise((resolve, reject) => {
        bcryptjs.hash(password, 10, (err, hash) => {
            if (err)
                reject(err);
            resolve(hash);
        });
    });
}
