<?php

    define('BASE_URL', 'https://newsapi.org/v2');

    define('HEADLINES', '/top-headlines?country=us&apiKey=d484934f136d4a6d91ced68942e52880');

   
    $req = curl_init();
    curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($req, CURLOPT_URL, BASE_URL.HEADLINES);
    $response = json_decode(curl_exec($req));
    curl_close($req);

    echo json_encode($response->articles);
    

