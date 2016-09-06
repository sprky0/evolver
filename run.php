<?php

if (!isset($argv[1]))
	throw new Exception('Missing test arg');

if (!is_file($argv[1]))
	throw new Exception("Missing test file requested ({$argv[1]})");

if (substr($argv[1],-3) !== '.js')
	throw new Exception("Wrong format for test file ({$argv[1]})");

while(true) {
	echo "\n";
	`node {$argv[1]}`;
	for($i=0;$i<2;$i++) {
		echo ".";
		sleep(1);
	}
	echo "\n\n";
}
