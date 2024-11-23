let targetNode = document.querySelector('.caption-window.ytp-caption-window-bottom');

const observerCallback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes') {
      console.log('Attributes changed:', mutation);
    } else if (mutation.type === 'childList') {
      console.log('Child elements changed:', mutation);
    }
  }
};

const observerConfig = {
  childList: true,
  attributes: true,
  subtree: true,
};

const startObserving = () => {
  targetNode = document.querySelector('.caption-window.ytp-caption-window-bottom');

  if (targetNode) {
    const observer = new MutationObserver(observerCallback);
    observer.observe(targetNode, observerConfig);
    console.log('Observer started on caption window.');
    clearInterval(observerCheck);  // Stop checking once we have the element
  }
};

// Check every 100ms for the element
const observerCheck = setInterval(startObserving, 100);