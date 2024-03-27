window.onload = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        code: `(() => {
            // You can write multiple lines of JavaScript here
            const buttons = document.querySelectorAll("button");
            const buttonCount = buttons.length;
             const links= document.querySelectorAll("link")
             const linkCount = links.length;
             return buttonCount
          })();`,
      },
      function (results) {
        if (results) {
          console.log(results);
          document.getElementById("buttonCount").innerText = results[0];
        }
      }
    );
  });
};
