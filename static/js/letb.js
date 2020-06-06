/*--INSTAFEED--*/

function buildPost(data){
    let $wrapper=$('<a>',{class:'post-insta', href: data.link, target:"_blank"});
    let $img=$('<img>', {src: data.images.low_resolution.url});
    $wrapper.append($img);
     $('.instafeed').append($wrapper);
 }

 function buildNext(url){
     $('.next-button').remove();
     let $button =$('<button>', {onclick:'buildPosts("'+url+'")', class:'next-button', text: 'Cargar más'});
         $('.instafeed').after($button);
 }

 function buildPosts(url){
     fetch(url)
         .then(function(response){
             return response.json()
         })
         .then(function(json){
             for (let data of json.data){
                 buildPost(data);
             }
         buildNext(json.pagination.next_url);            

         })
 }