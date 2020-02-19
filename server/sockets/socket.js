const {io} = require('../server')

io.on('connection' , (client)=>{

    console.log('Usuario conectado');

    client.emit('EnviarMensaje' , {
        usuario: 'Emerson',
        mensaje: 'Bienvenidos  a esta aplicacion'
    } );

    client.on('disconnect' , ()=>{
        console.log('Usuario desconectado');
    });

    //escuchar al cliente 

    client.on('EnviarMensaje' , (data , callback)=>{
        console.log(data);

        client.broadcast.emit('EnviarMensaje' , data);
       /* if(mensaje.usuario){
            callback({
                resp: 'TODO SALIO BIEB'
            });
        }else{
            callback({
                resp: 'TODO SALIO mal'
            });
        }*/
     
    });

});