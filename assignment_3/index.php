<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'News',
    'items' => Array(
        'News' => '/WP21/assignment_3/index.php',
        'Add news item' => '/WP21/assignment_3/news_add.php',
        'Leap Year' => '/WP21/assignment_3/leapyear.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
    <script type="application/javascript" src="scripts/main.js"></script> <div class="pd-40"></div> <div class="row">
    <div class="col-md-12" id="news_container">
    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';