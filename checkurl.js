// 获取所有的 a 标签
const links = document.getElementsByTagName("a");

// 遍历每个 a 标签
for (let i = 0; i < links.length; i++) {
  // 获取当前标签的链接
  const url = links[i].href;
  
  // 建立新的 AJAX 请求
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function() {
    // 如果请求成功，但状态码为 404 或以上，表示网址无法访问
    if (xhr.status >= 404) {
      // 在当前标签中添加⛔️
      links[i].innerHTML += " ⛔️";
    }
  }
  xhr.send();
}
