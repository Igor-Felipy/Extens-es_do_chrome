document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#btn').addEventListener('click',function(){
        chrome.tabs.update(sender.tab.id, {"https://youtube.com":request.redirect});
    });
});