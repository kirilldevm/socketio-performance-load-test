import io from 'socket.io-client';

const options = {
  auth: { token: '23jrtiheriufyqwidsf' },
};

const NODE_URL = import.meta.env.NODE_URL || 'http://localhost:3000';
console.log(NODE_URL);

const socket = io(NODE_URL, options);

socket.on('connect', () => {
  // console.log(data);
});

export default socket;
