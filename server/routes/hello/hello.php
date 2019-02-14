<?php

dispatch('/hello/:who', 'hello');
function hello(){
    return json("Hello  " . ( params('who') ? params('who') : "everybody" ) . "!");
}

dispatch_post('/hello/post/:who', 'hello_post');
function hello_post(){
    return json("Hello " . ( params('who') ? params('who') : "everybody" ) . " from post call!!!");
}

dispatch_post('/hello/body/post', 'hello_post_body');
function hello_post_body(){

    $input = get_post_body();

    return json("Hello " . ( ($input["name"] ?? null) ? $input["name"] : "everybody" ) . " from post call!!! .... But with body");
}