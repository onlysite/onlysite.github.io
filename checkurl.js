var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {

  var link = links[i];

  var url = link.href;

  var xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onload = function() {

    if (this.status != 200) {

      link.innerHTML += " ⛔️";

    }

  };

  xhr.send();

}
