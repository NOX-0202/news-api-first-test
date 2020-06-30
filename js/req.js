function render(articles) {
    $('#result').html('')
    articles.forEach(element => {
        if (element.description != null) {
            $('#result').append(`<article><header><h2>${element.title}</h2><img src="${element.urlToImage}" width="250"/></header><p>${element.description}</p><a herf="${element.url}" target="_blank"></a></article>`)     
        }
    })
}

$.ajax({
    url: './api/Headlines.php',
    type: 'GET',
    data: {}, 
    success: response => {
        render(JSON.parse(response))
    }
})

function search() {

    $.ajax({
        url: './api/search.php',
        type: 'POST',
        data: {
            words: $('#search').val()
        }, 
        success: response => {
            render(JSON.parse(response))
        }
    })
    
}