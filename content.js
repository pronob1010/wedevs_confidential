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
  
  // Handle URL changes to ensure the job tab is hidden
  const observer = new MutationObserver(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('tab=job')) {
      const jobTabWrap = document.querySelector('.job-tab-wrap');
      if (jobTabWrap) {
        jobTabWrap.style.display = 'none';
        if (confirm("Are you sure you want to access the Job tab?")) {
          const messageDiv = showConfidentialMessage();
          setTimeout(() => {
            messageDiv.remove();
            jobTabWrap.style.display = 'block';
          }, 30000);  // 30 seconds
        } else {
          window.location.href = "https://lounge.wedevs.com/wp-admin/admin.php?page=erp-hr&section=my-profile&action=view&id=284&tab=general";
        }
      }
    }
  });
  
  // Start observing the document for changes
  observer.observe(document, { subtree: true, childList: true });
  
  // Initial check
  const currentUrl = window.location.href;
  if (currentUrl.includes('tab=job') && !document.querySelector('.job-tab-wrap')) {
    hideJobMenuOption();
  }
  