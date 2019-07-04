<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body style="background-color:orange; text-align: center;" >

	<?php
	$c=mysqli_connect('localhost','root','');
	$d=mysqli_select_db($c,'amir');
	$m=$_GET['moviename'];
	if(!$d)
	{
		echo "Database not found";
	}
	else
	{
		$fetch=mysqli_query($c,"SELECT * FROM movie_name where movie='$m'");
		$z=mysqli_fetch_assoc($fetch);
		if($z==0)
		{
			$message="No such movie found";
			echo "<script type='text/javascript'>alert('$message');</script>";
		}
		else
		{
			echo "<br>";
			echo "<h1>movie name=".$z['movie']."<br><br>";
			echo "Director = ".$z['director']." Director of movie<br><br>";
			echo "Actor =".$z['actor']." Actor of the movie <br><br>";
			echo "Actoress".$z['actoress']." Actoress of the movie<br><br>";
			echo "Actoress".$z['year']." Published in the year</h1>";
			
		}
	}
	?>

</body>
</html>