import io from 'socket.io-client';

const options = {
  auth: { token: '23jrtiheriufyqwidsf' },
};

const VITE_SERVER_URL =
  import.meta.env.VITE_SERVER_URL || 'http://localhost:3000';

const socket = io(VITE_SERVER_URL, options);

socket.on('connect', () => {
  // console.log(data);
});

export default socket;
