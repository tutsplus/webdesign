<html>
<head>
    <title>Franky's Fav Five</title>
    <link href="styles.css" rel="stylesheet" />
    <link href="http://meyerweb.com/eric/tools/css/reset/reset.css" rel="stylesheet" />
</head>
<body>

<header class="header">
    <h1 class="header-title">Franky's Fav Five</h1>
</header>

<section class="wrapper">
    <?php for($i=1;$i<6;$i++) { ?>
        <article class="article">
            <img src="http://lorempixel.com/600/200/sports/<?php echo $i ?>" />
            <div class="content">
                <h2><a href="#" class="article-title faker-sentence">Article Title Here</a></h2>
                <ul class="article-meta">
                    <li><strong>author</strong>: <span class="faker-findName"></span></li>
                    <li><strong>source</strong>: <a href="#" class="faker-domainName">onlinesource.com</a></li>
                </ul>
                <p class="article-paragraph"><span class="faker-paragraphs"></span>&hellip; <a href="#">read more &raquo;</a></p>
            </div>
        </article>
    <?php } ?>
</section>

<script src="faker.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
var args = {
    'Lorem'         :   ['paragraphs', 'sentence'],
    'Name'          :   ['findName'],
    'Internet'      :   ['domainName']
}
// loop over these
for (var key in args) {
   var obj = args[key];

   for (var prop in obj) {

        $('.faker-'+obj[prop]).each(function(){
            // Faker.Lorem.paragraphs()
            // Faker.Internet.domainName()
            $(this).html( Faker[key][obj[prop]]() );
        });
   }
}
</script>
</body>
</html>