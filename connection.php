<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "mysqli";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);


?>