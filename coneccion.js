const mongoose=require('mongoose');
//traigo mi ruta desde mis variables de entorno
require('dotenv').config();
const ruta= process.env.ruta;
//conectamos con la base de datos 
async function conectar(){
    try{
        await mongoose.connect(ruta);
        console.log('Conectado a la base de datos');
    }catch(error){
        console.log('Error al conectar a la base de datos');
    }
}
conectar();