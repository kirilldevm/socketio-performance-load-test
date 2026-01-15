import io from 'socket.io-client';

const options = {
  auth: { token: '23jrtiheriufyqwidsf' },
};

const VITE_SERVER_URL =
  import.meta.env.VITE_SERVER_URL ||
  'https://socketio-performance-load-test.onrender.com';

console.log(VITE_SERVER_URL);

const socket = io(VITE_SERVER_URL, options);

socket.on('connect', () => {
  // console.log(data);
});

export default socket;
