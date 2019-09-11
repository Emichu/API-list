var request = new XMLHttpRequest()

//get request
request.open('GET', 'https://api.github.com/users/Emichu/repos', true);


request.onload = function() {
    if(request.status !== 200){
        console.log('error');
        return;
    }

    var data = JSON.parse(this.response);
    var listNode = document.getElementById("list")

    innerHTML = ''
    data.forEach(function(repo){
        console.log(repo)
        var content = "<li class='list_item'>" + repo.name + "</li>"
        innerHTML = innerHTML + content
    });

    listNode.innerHTML = innerHTML
}

request.send()