window.onload = document_ready;

function display_data(data) {
    console.log(data);
    element = document.getElementById("frame");
    element.style.backgroundColor = data.color;
    element.textContent = data.text;
}

function send_request() {
    let xmlHttp = new XMLHttpRequest();
    console.log("sendind_request");
    xmlHttp.onreadystatechange = 
        function() {
            if (xmlHttp.readyState === 4) {
                let responseObject = JSON.parse(xmlHttp.responseText);
                display_data(responseObject);
            }
        };
    xmlHttp.open("GET", "/get_data?id=1", true);
    xmlHttp.send();

}

function document_ready() {
    send_request();
}
