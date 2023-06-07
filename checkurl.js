const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  if (link.href) {
    fetch(link.href, { method: 'HEAD' }).then(response => {
      if (!response.ok) {
        link.innerText += " ⛔️";
      }
    });
  }
}