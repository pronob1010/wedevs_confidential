function checkJobMenuVisibility() {
    chrome.storage.sync.get(['hideJobMenu'], function (result) {
        const hideJobMenu = result.hideJobMenu;
        if (hideJobMenu) {
            const jobTabElement = document.querySelector('.nav-tab[href*="tab=job"]');
            if (jobTabElement) {
                jobTabElement.style.display = 'none';
            }
        }
    });
}

checkJobMenuVisibility();
