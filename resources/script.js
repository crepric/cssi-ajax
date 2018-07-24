window.onload = document_ready;

function display_data(data) {
    console.log(data);
    let element = document.getElementById("frame");
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

function button_clicked() {
    send_request();
}

function document_ready() {
    let button = document.getElementById("send_button");
    button.onclick = button_clicked;
}
