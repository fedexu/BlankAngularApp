<?php
require_once dirname(__FILE__).'/lib/limonade.php';

# ============================================================================ #
#    CONFIG THE APP HERE                                                       #
# ============================================================================ #

// Static folder
// Must be a root folder
$STATIC_FOLDER = "dist/";
$MAIN_APP = '/routeManager.php';

# ============================================================================ #
#    CHANGE THE CODE BELOW IF YOU KNOW WHAT ARE YOU DOING                      #
# ============================================================================ #

function configure(){
  option('env', ENV_DEVELOPMENT);
  option('signature', 'MyApp');
  // Standard configuration, remove the comment to change that 
  // option('root_dir',           $root_dir); // this folder contains your main application file
  // option('base_path',          $base_path);
  // option('base_uri',           $base_uri); // set it manually if you use url_rewriting
  // option('limonade_dir',       dirname(__FILE__).'/'); // this fiolder contains the limonade.php main file
  // option('limonade_views_dir', dirname(__FILE__).'/limonade/views/');
  // option('limonade_public_dir',dirname(__FILE__).'/limonade/public/');
  // option('public_dir',         $root_dir.'/public/');
  // option('views_dir',          $root_dir.'/views/');
  // option('controllers_dir',    $root_dir.'/controllers/');
  // option('lib_dir',            $root_dir.'/lib/');
  // option('error_views_dir',    option('limonade_views_dir'));
  // option('env',                ENV_PRODUCTION);
  // option('debug',              true);
  // option('session',            LIM_SESSION_NAME); // true, false or the name of your session
  // option('encoding',           'utf-8');
  // option('x-sendfile',         0); // 0: disabled, 
  // X-SENDFILE: for Apache and Lighttpd v. >= 1.5,
  // X-LIGHTTPD-SEND-FILE: for Apache and Lighttpd v. < 1.5
}
  
function before($route){
  header("X-LIM-route-function: ".$route['callback']);
}
  
function after($output, $route){
  $time = number_format( microtime(true) - LIM_START_MICROTIME, 6);
  $output .= "\n<!-- page rendered in $time sec., on ".date(DATE_RFC822)." -->\n";
  $output .= "<!-- for route\n";
  $output .= print_r($route, true);
  $output .= "-->";
  return $output;
}

//Common error handling

error(E_LIM_HTTP, 'http_errors');
function http_errors($errno, $errstr, $errfile, $errline){
    status($errno);
    return html('<h1>'.http_response_status_code($errno).'</h1>');
}

error(E_LIM_PHP, 'php_errors');
function php_errors($errno, $errstr, $errfile, $errline){
    status($errno);
    return html('<h1>'.http_response_status_code($errno).'</h1>');
}

function serve_static_file(){
  
  global $STATIC_FOLDER;

  $url = $_SERVER['REQUEST_URI'];
  $env = env();

  if (strpos($url, $env['SERVER']['SCRIPT_NAME']) !== false){
    $url = str_replace($env['SERVER']['SCRIPT_NAME'],"", $url);
  }

  if ($url == '/'){
    include $STATIC_FOLDER . '/index.html';
    exit();
  }

  $path_parts = pathinfo($url);
  
  if ($path_parts['extension'] != "" ){
    if (file_exists($STATIC_FOLDER . $url)) {
      if ($path_parts['extension'] == 'css' )
        header("Content-type: text/css");
      if ($path_parts['extension'] == 'js' )
        header("Content-type: application/json");
        
      //TODO SET HEADER
      // header("Content-type: application/json");
      // readfile(realpath($STATIC_FOLDER . $url));
      // exit();
      include $STATIC_FOLDER . $url;
      exit();
    }
  }

}

require_once dirname(__FILE__).$MAIN_APP;

// Run application
serve_static_file();
run();