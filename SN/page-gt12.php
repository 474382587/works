<?php /* Template Name: GT12 Template */ ?>
<?php 
// get stuff for hero 
$heroImage = get_field('hero_image');
$heroVideo = get_field('hero_video');
$heroTitle = get_field('hero_title');
$heroDescription = get_field('hero_description');

echo $heroImage;
