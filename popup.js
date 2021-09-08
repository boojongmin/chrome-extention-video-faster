let changeSpeed = document.getElementsByName("changeSpeed");

changeSpeed.forEach(x => {
  console.log(x);
  x.addEventListener("click", async (ev) => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    let v = parseInt(ev.target.value);
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: setChangeSpeed,
      args: [v],
    });
  })
});

function setChangeSpeed(rate) {
  document.querySelectorAll('video').forEach(x => {
    x.playbackRate = rate;
  });
}
