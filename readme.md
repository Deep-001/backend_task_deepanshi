
WebSocket is a bidirectional communication protocol that can send the data from the client to the server or from the server to the client by reusing the established connection channel. The connection is kept alive until terminated by either the client or the server.

It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). After closing the connection by either of the client and server, the connection is terminated from both ends. 

Web Socket comes into the picture when the server in itself should be able to send information to the client or the browser( without getting polled(or requested) by the client ).

we need to install socket.io in order to use Socket in NodeJS.