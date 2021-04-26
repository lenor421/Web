<?php
$tek=$_GET["tek"];
$jsonString = file_get_contents("test.json");
$rrow = json_decode($jsonString);
$schiotchik=0;
foreach ($rrow->news->new as $number => $item) {
    $schiotchik++;
    $zag = $item->zag;
    $text = $item->text;
    $img = $item->img;
    echo "<div style='width: 600px; border: 3px solid #000; padding:10px' >";
    echo 'Новость №'.$number.'<br><p style="font-weight: bold; font-size: 30px">'.$zag.'</p>'.$text.'<br><img src="'.$img.'" width=400px><br>';  
    echo "</div><br>";
    if($schiotchik==$tek)break;
}
?>