<?php

require __DIR__.'/../api/vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as DB;

\API\Core\DB::initCapsule();

$authors = DB::table('author')->get();

foreach ($authors as $author) {
	$fromAuthor = false;
	$user = DB::table('user')->where('author_id', '=', $author->id)->first();
	if (!$user) {
		// $user = $DB::table('user')->insert([
		// 	'realname' => $author->name
		// ]);
		$fromAuthor = true;
	}

	
}