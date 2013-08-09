<?php
 $id=$_POST["userid"];
    $info = array('count'=>'1', 'user'=>'xiao', 'ai'=>$id);
    $userinfo = json_encode($info);
    echo $userinfo;
?>