// Function to hide the Job menu option
function hideJobMenuOption() {
    const jobTabLink = document.querySelector('a[href$="tab=job"]');
    if (jobTabLink) {
      jobTabLink.style.display = 'none';
    }
  }
  
  // Function to show the Job menu option
  function showJobMenuOption() {
    const jobTabLink = document.querySelector('a[href$="tab=job"]');
    if (jobTabLink) {
      jobTabLink.style.display = 'block';
    }
  }
  
  // Check for the hide job option setting
  chrome.storage.sync.get(['hideJobOption'], (result) => {
    if (result.hideJobOption) {
      hideJobMenuOption();
    }
  });
  
  // Initial check
  const currentUrl = window.location.href;
  if (currentUrl.includes('tab=job') && !document.querySelector('.job-tab-wrap')) {
    hideJobMenuOption();
  }
  