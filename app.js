const express = require('express');
const router=express.Router();
const app = express();
require('./coneccion');
const port = 3000;
//importamos nuestro modelo
const Molienda = require('./Modelos/moliendas');

//levantamos servidor 
app.listen(port, () => {
  console.log(`Servidor montadoen el puerto ${port}`);
});
//definimos middleware
app.use(express.json());
app.use(router);
//definimos rutas
router.get('/', (req, res) => {
  res.send('Hello World!');
});
//rutas para molinedas
router.get('/moliendas', async(req,res)=>{
    const respuesta=await Molienda.find()
    res.json(respuesta);
})
//ruta para insertar una molienda
router.post('/moliendas', async(req,res)=>{
    const body=req.body
    try{
        const respuesta=await Molienda.create(body);
        res.json(respuesta);
    }catch(error){
        res.json(error);
    }
})