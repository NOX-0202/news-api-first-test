function render(articles) {
    $('#result').html('')
    articles.forEach(element => {
        if (element.description != null) {
            $('#result').append(`<article><header><h2>${element.title}</h2><img src="${element.urlToImage}" width="250"/></header><p>${element.description}</p><a href="${element.url}" target="_blank">Leia mais >>></a></article>`)     
        }
    })
}

function save(search) {
    
}

function search() {

    $.ajax({
        url: './api/search.php',
        type: 'POST',
        data: {
            words: $('#search').val()
        }, 
        success: response => {
            render(JSON.parse(response))
            save($('#search').val())
            $('#search').val('')
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
