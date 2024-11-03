const update = document.querySelector('#update');

const manifestVersion = chrome.runtime.getManifest().version;

const url =
    'https://raw.githubusercontent.com/Lumm1t/anti-testportal/master/public/manifest.json';

fetch(url)
    .then(async (response) => response.json())
    .then((data) => {

        console.log(data)

        const version = data.version;

        update.textContent =
            manifestVersion === version
                ? `up to date (${manifestVersion})`
                : `update available (${version})`;
    });