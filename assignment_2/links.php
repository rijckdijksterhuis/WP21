<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => '/WP21/assignment_2/index.php',
        'Links' => '/WP21/assignment_2/links.php',
        'News' => '/WP21/assignment_2/news.php',
        'Future' => '/WP21/assignment_2/future.php'
    )
);
include __DIR__ . '/php/head.php';
/* Body */
include __DIR__ . '/php/body-start.php';
?>
<div class="col-md-12">
    <h1>Welcome to the links page</h1>
</div>
<?php
include __DIR__ . '/php/body-end.php';
/* Footer */
include __DIR__ . '/php/footer.php';
?>
