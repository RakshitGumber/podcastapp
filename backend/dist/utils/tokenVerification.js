import jwt from "jsonwebtoken";
export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SecretKey ?? "OurSecretKey", (err, decoded) => {
            if (err)
                return resolve(false);
            return resolve(true);
        });
    });
};
