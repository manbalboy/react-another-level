// sync version
const fs = require('fs');
const path = require('path');
function walkSync(currentDirPath, callback) {

    fs.readdirSync(currentDirPath).forEach(function (name) {
        const filePath = path.join(currentDirPath, name);
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

fs.open('fileList.txt','w',function(err,fd){ if (err) throw err; console.log('file open complete'); });

walkSync('.', function(filePath, stat) {
    console.log(filePath)

    filePath = filePath + '\n';

    fs.exists('fileList.txt', function (exists) {
        if(exists) {
            fs.appendFile('fileList.txt', filePath, function (err) {
                if (err) throw err;
            });
        }
    });
});