/* Using FileSystem module */

const fs = require('fs');

const userName = "Bhawana";

fs.writeFile('user-detail.txt', 'Name: '+ userName, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.log('Great Work!')
    }
})

/* Express */
