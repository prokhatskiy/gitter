const https = require('https');

const heartbeat = ' \n';

const requestOption = (roomId, token)  => ({
  hostname: 'stream.gitter.im',
  path: '/v1/rooms/' + roomId + '/chatMessages',
  method: 'GET',
  headers: { 'Authorization': 'Bearer ' + token }
});

class Stream {
  constructor(socket) {
    this.socket = socket;
    this.request = null;

    this.handleSubscribe();
    this.handleUnsubscribe();
  }

  handleSubscribe() {
    this.socket.on('subscribe', ({ roomId }) => {
      const { token } = this.socket.handshake.session;

      this.request = https.request(requestOption(roomId, token), res => {
        res.on('data', chunk => {
          const msg = chunk.toString();

          if (msg === heartbeat) {
            return;
          }

          this.socket.emit('message:' + roomId, msg);
        });
      });

      this.request.on('error', function({ message }) {
        this.socket.emit('error:' + roomId, { error: message })
      });

      this.request.end();
    });
  }


  handleUnsubscribe() {
    this.socket.on('unsubscribe', () => {
      if (this.request) {
        this.request.abort();
      }
    });
  }
}

module.exports = Stream;