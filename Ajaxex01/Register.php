<php?
$n[] = 'John';
$n[] = 'Doe';
$n[] = 'Smith';
$n[] = 'Alex';
$n[] = 'Tom';
$n[] = 'Jerry';
$c[] = '654.460.540-91';
$c[] = '654.460.540-92';
$c[] = '654.460.540-93';
$c[] = '654.460.540-94';
$c[] = '654.460.540-95';
$c[] = '654.460.540-96';
$R[] = '40.346.274-5';
$R[] = '40.346.274-6';
$R[] = '40.346.274-7';
$R[] = '40.346.274-8';
$R[] = '40.346.274-9';
$R[] = '40.346.274-1';


$q = $_REQUEST='q';

$hint = "";

if($q !== ""){
    $q = strtolower($q);
    $len = strlen($q);

    foreach($n as $name ){
        if(stristr($q, substr($name, 0, $len))){

            if($hint === ""){
                $hint = $name;
            }else{
                $hint .= ", $name";
            }
        }
    }
}
echo $hint === "" ? "no suggestion" : $hint;
?>