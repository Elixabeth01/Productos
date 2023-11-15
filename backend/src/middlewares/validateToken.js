import { TOKEN_SECRET } from "../config.js";
import jwt from 'jsonwebtoken';

export const authRequired = (req, res, next) =>{
        const {token} = req.cookies;
        if(!token)
            return res.status(401).json({message: 'No token, utorizacion denegada'})
    
        jwt.verify(token, TOKEN_SECRET, (err, user) =>{
            if (err)
                return res.status(403).json({message: 'Token invalido'})
       
            //Guardamos los datos del usuario en el onjeto req
            req.user = user;
        
        next();
        }) 
    //console.log('Validando token');

    //Imprimimos a console los headers de la peticion
    //console.log(req.headers);

    //Obtenemos las cookies
    //const cookies = req.cookies
    //console.log(cookies);
}
