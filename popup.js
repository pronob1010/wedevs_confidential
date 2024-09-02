document.getElementById('hide-job-option').addEventListener('change', (event) => {
    chrome.storage.sync.set({ hideJobOption: event.target.checked });
});

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['hideJobOption'], (result) => {
        document.getElementById('hide-job-option').checked = result.hideJobOption || false;
    });
});
