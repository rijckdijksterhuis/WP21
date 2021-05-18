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
        <h1>Welcome,
        <?php
        echo($_POST)["name"]
        ?></h1>
        <p>The next five leap years this will be your age:</p>


        <form action="leapyear.php" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name"
                       name="name" placeholder="Donald Trump" required>
                <div class="invalid-feedback">
                    Please enter your correct name
                </div>
                <div class="valid-feedback">
                    Correct name, thank you
                </div>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" class="form-control" id="age"
                       name="age" placeholder="69" required>
                <div class="invalid-feedback">
                    Please enter your age in numbers
                </div>
                <div class="valid-feedback">
                    Valid age, thank you
                </div>
            </div>
            <div class="form-group">
                <label for="email">Mail Adress</label>
                <input type="text" class="form-control" id="email"
                       name="email" placeholder="...@....com" required>
                <div class="invalid-feedback">
                    Enter a valid mail address
                </div>
                <div class="valid-feedback">
                    Valid mail address, thank you
                </div>
            </div>
            <div class="form-group">
                <label for="email">Mail Adress</label>
                <input type="text" class="form-control" id="email"
                       name="email" placeholder="...@....com" required>
                <div class="invalid-feedback">
                    Enter a valid mail address
                </div>
                <div class="valid-feedback">
                    Valid mail address, thank you
                </div>
            </div>
            <div class="form-group">
                <label for="residence">Residence</label>
                <input type="text" class="form-control" id="residence"
                       name="residence" placeholder="Groningen" required>
                <div class="invalid-feedback">
                    Enter a valid residence
                </div>
                <div class="valid-feedback">
                    Valid residence thank you
                </div>
            </div>
            <button type="submit" id="submit" class="btn btn-primary">SUBMIT</button>
        </form>
    </div>
</div>


<?php
include __DIR__ . '/tpl/body_end.php';
?>