function sendRequest(){
    var id = $('.input-id').val();
    $.ajax({
        url: 'https://swapi.dev/api/planets/' + id,
        type: 'GET',
        success: function(response) {
            $('#name').text(response.name);
            $('#gravity').text(parseInt(response.gravity));
            $('#population').text(response.population);
            $('#rotation-period').text(response.rotation_period);
            $('#error-container').text('');
        },
        error: function() {
            $('#error-container').text('Data not found!');
            $('#name').text('');
            $('#gravity').text('');
            $('#population').text('');
            $('#rotation-period').text('');
        }
    });
}