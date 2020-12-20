function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function copyServerIP() {
    copyToClipboard('play.rangemc.ovh');
    Swal.fire('IP-адрес скопирован!','Чтобы начать игру, скачайте клиент нужной версии. Инструкцию по началу игры можно посмотреть <a href="https://wiki.rangemc.ovh/docs/getting-started/">здесь</a>.','success');
}