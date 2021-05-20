<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP21/assignment_3/index.php',
        'Add news item' => '/WP21/assignment_3/news_add.php',
        'Leap Year' => '/WP21/assignment_3/leapyear.php',
        'Simple Form' => '/WP21/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
<div class="row">
    <div class="col-md-12">
        <h1>Welcome <?php
            echo($_GET["name"]);
        ?>!</h1>
        <?php
        if (strtoupper($_GET["residence"]) === "AMSTERDAM"){
            echo("You're from the capital of the Netherlands!");
        }
        else {
            echo("You're from " . $_GET["residence"] .  "!");
        }
        ?>
        <form action="simple_form.php" method="get">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name"
                       name="name" placeholder="Donald Trump"
            </div>
            <div class="form-group">
                <label for="residence">Residence</label>
                <input type="text" class="form-control" id="residence"
                       name="residence" placeholder="Groningen"
            </div>
            <button type="submit" class="btn btn-default"> SUBMIT</button>
        </form>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>
