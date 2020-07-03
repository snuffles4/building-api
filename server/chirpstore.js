const fs = require('fs');
let chirps = { nextid: 0 };

if (fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}
let getChirps = () => {
    return Object.assign({}, chirps);
}

let getChirp = id => {
    return Object.assign({}, chirps[id]);
}

let createChirp = (chirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};

let updateChirp = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = id => {
    delete chirps[id];
    writechirps();
}

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {
    createChirp: createChirp,
    deleteChirp: deleteChirp,
    getChirps: getChirps,
    getChirp: getChirp,
    updateChirp: updateChirp

}