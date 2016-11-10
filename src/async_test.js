import request from 'request'

function getUrl() {
    return new Promise((resolve, reject) => {
        request('https://www.google.com', (err, res, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

(async() => {
    var body = await getUrl();
    console.log(`Body: ${body}`);
})();