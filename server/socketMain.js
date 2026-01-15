const socketMain = (io, pid) => {
  io.on('connection', (socket) => {
    let machineMacA;
    const auth = socket.handshake.auth;
    console.log(auth.token);
    if (auth.token === '239rfaiskdfvq243EGa4q3wefsdad') {
      //valid nodeClient
      socket.join('nodeClient');
    } else if (auth.token === '23jrtiheriufyqwidsf') {
      //valid reactClient
      socket.join('reactClient');
    } else {
      socket.disconnect();
      console.log('YOU HAVE BEEN DISCONNECTED!!!');
    }
    console.log(`Someone connected on worker ${process.pid}`);
    socket.emit('welcome', 'Welcome to our cluster driven socket.io server!');

    socket.on('perfData', (data) => {
      console.log('Tick...', pid, data.macA);

      if (!machineMacA) {
        machineMacA = data.macA;
        io.to('reactClient').emit('connectedOrNot', {
          machineMacA,
          isAlive: true,
        });
      }
      io.to('reactClient').emit('perfData', data);
    });

    socket.on('testConnection', (data) => {
      console.log(data);
    });
    socket.on('welcomeButton', (data) => {
      console.log(data);
    });

    socket.on('disconnect', (reason) => {
      //a nodeClient just disconnected. Let the front end know!
      io.to('reactClient').emit('connectedOrNot', {
        machineMacA,
        isAlive: false,
      });
    });
  });
};

module.exports = socketMain;
