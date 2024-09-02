function hideJobMenuOption() {
    const jobTabLink = document.querySelector('a[href$="tab=job"]');
    if (jobTabLink) {
      jobTabLink.style.display = 'none';
    }
  
    // Hide the Job tab wrap and show a confidential message
    const jobTabWrap = document.querySelector('.job-tab-wrap');
    if (jobTabWrap) {
      jobTabWrap.style.display = 'none';
  
      // Create and style the confidential message
      const erpSingleContainerWrap = document.getElementById('erp-single-container-wrap');
      if (erpSingleContainerWrap) {
        const confidentialMessage = document.createElement('div');
        confidentialMessage.className = 'confidential-message';
        confidentialMessage.textContent = 'This section is confidential!';
        erpSingleContainerWrap.appendChild(confidentialMessage);
      }
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
  