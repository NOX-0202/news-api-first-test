<?php

    $words = str_replace(' ', '%20',$_POST["words"]);

    define('BASE_URL', 'https://newsapi.org/v2');

    $endpoint = "/everything?q={$words}&apiKey=d484934f136d4a6d91ced68942e52880";


    $req = curl_init();
    curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($req, CURLOPT_URL, BASE_URL.$endpoint);
    $response = json_decode(curl_exec($req));
    curl_close($req);

    echo json_encode($response->articles);

