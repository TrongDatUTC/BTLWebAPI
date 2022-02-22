//breaking news
var settings = {
    "url": "https://newsdata.io/api/1/news?apikey=pub_4721691fd6f15f5f7eab70111e0499bd53b4&q=Soccer&country=gb&category=sports ",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var i = 1;
    $.each(response.results, function(index, item){

        $('#breaking-new' + i).append(item.title);
        i=i+1;
        if(i>4){
            return false;
        }
    });
    
    console.log(response);
    
  });