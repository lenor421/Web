<?php

        $jsonString = file_get_contents("reviews.json", JSON_UNESCAPED_UNICODE);
        $rrow = json_decode($jsonString);
        $schiotchik=0;
        $count = count($rrow->review);
        foreach ($rrow->review as $number => $item) {
            $schiotchik++;
            $name = $item->name;
            $email = $item->email;
            $rev = $item->rev;
            echo "<div style='width: 600px; border: 3px solid #000; padding:10px' >";
            echo '<span style="font-weight: bold;">Имя: </span>'.$name.'<br><span style="font-weight: bold;">email: </span>'.$email.'<br><span style="font-weight: bold;">Отзыв: </span>'.$rev.'<br>';  
            echo "</div><br>";
            if($schiotchik==$count)break;
        }
?>