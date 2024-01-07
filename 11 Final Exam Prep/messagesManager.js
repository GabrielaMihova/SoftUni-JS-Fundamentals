function manageMessages(input) {
    let capacity = Number(input.shift());
    let users = {};
  
    for (let line of input) {
      if (line === 'Statistics') {
        break;
      }
  
      let [command, username, sent, received] = line.split('=');
  
      if (command === 'Add') {
        if (!users.hasOwnProperty(username)) {
          users[username] = {
            sent: Number(sent),
            received: Number(received)
          };
        }
      } else if (command === 'Message') {
        let sender = users[username];
        let receiver = users[received];
  
        if (sender && receiver) {
          sender.sent++;
          receiver.received++;
  
          if (sender.sent + sender.received === capacity) {
            delete users[username];
            console.log(`${username} reached the capacity!`);
          }
  
          if (receiver.sent + receiver.received === capacity) {
            delete users[received];
            console.log(`${received} reached the capacity!`);
          }
        }
      } else if (command === 'Empty') {
        if (username === 'ALL') {
          users = {};
        } else if (users.hasOwnProperty(username)) {
          delete users[username];
        }
      }
    }
  
    let sortedUsers = Object.keys(users).sort((a, b) => a.localeCompare(b));
    console.log(`Users count: ${sortedUsers.length}`);
  
    for (let user of sortedUsers) {
      let totalMessages = users[user].sent + users[user].received;
      console.log(`${user} - ${totalMessages}`);
    }
  }
  
  manageMessages([
    "20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"
  ]);
  