function copyButton(yourIP) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(yourIP));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(yourIP));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    Swal.fire('Ваш IP-адрес скопирован!','Перед обращением к администрации, убедитесь что вы не используйте VPN, Proxy, анонимайзеры и подобные программы. Подробную инструкцию по привязке можно посмотреть <a href="https://wiki.rangemc.ovh/docs/security/protect/#%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D0%BA%D0%B0-%D0%BA-ip-%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D1%83" target="_blank">здесь</a>.','success');
  }
}