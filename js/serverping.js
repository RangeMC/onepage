var url = "https://ping.alexeylesin.me/api/v1/minecraft/ping/?address=play.rangemc.ovh&port=25565";
   
   $.getJSON(url, function(r) {
       //data is the JSON string
    if(r.error){
       $('#status').html('Не удалось получить данные о сервере.');
      return false;
    } 
     $('#status').html('Игроков на сервере: '+r.players.online+' из '+r.players.max+', текущая версия - '+r.version.name);
   });