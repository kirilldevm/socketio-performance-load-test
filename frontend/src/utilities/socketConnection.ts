import io from 'socket.io-client';

const options = {
  auth: { token: '23jrtiheriufyqwidsf' },
};
const socket = io('http://localhost:3000', options);

socket.on('connect', (data: any) => {
  console.log(data);
});

export default socket;
