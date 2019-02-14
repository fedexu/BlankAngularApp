<?php

dispatch('/hello/:who', 'hello');
function hello(){
    set_or_default('name', params('who'), "everybody");
    return html("Hello %s!");
}

dispatch_post('/hello/:who', 'hello_post');
function hello_post(){
    set_or_default('name', params('who'), "everybody");
    return html("Hello %s from post call!!!");
}