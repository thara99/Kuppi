var fs = require('fs');

var htmlContent = '<html>Whatever</html>';

fs.writeFile('/my-page.html', htmlContent, (error) => { /* handle error */ });