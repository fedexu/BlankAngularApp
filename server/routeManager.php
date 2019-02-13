<?php

dispatch('/', 'hello_world');
    function hello_world(){
        return "Hello world!";
}

dispatch('/hello/:who', 'hello');
    function hello(){
        set_or_default('name', params('who'), "everybody");
        return html("Hello %s!");
}