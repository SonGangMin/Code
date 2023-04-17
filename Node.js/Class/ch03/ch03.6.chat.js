const EventEmitter = require("events");

// Define a custom event emitter class for the chat room
class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }

  leave(user) {
    this.users.delete(user);
    this.emit("leave", user);
  }

  send(user, message) {
    if (!this.users.has(user)) {
      throw new Error("User not in chat room");
    }
    this.emit("message", { user, message });
  }
}

// Create a chat room instance
const chatRoom = new ChatRoom();

// Add event listeners for the chat room events
chatRoom.on("join", (user) => {
  console.log(`${user} joined the chat`);
});

chatRoom.on("leave", (user) => {
  console.log(`${user} left the chat`);
});

chatRoom.on("message", ({ user, message }) => {
  console.log(`${user}: ${message}`);
});

// Join the chat room with two users
chatRoom.join("Alice");
chatRoom.join("Bob");

// Send messages in the chat room
chatRoom.send("Alice", "Hello everyone!");
chatRoom.send("Bob", "Hey Alice!");
chatRoom.send("Charlie", "Hi guys!"); // Throws an error

// Leave the chat room
chatRoom.leave("Bob");
