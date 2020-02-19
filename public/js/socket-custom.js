var socket = io();
socket.on('connect' , function(){
    console.log('conectado al servidor');
});

socket.on('disconnect' , function(){
    console.log(('Desconectado del servidor'));
})

//emitir mensajes al servidor
socket.emit('EnviarMensaje' , {
  usuario: 'Emerson',
    mensaje: 'Hola Mundo'
}, function(resp){
console.log('Respuesta', resp);
});
//escucar informacion del servidor
socket.on('EnviarMensaje' , function(mensaje){
    console.log('Servidor', mensaje );
})