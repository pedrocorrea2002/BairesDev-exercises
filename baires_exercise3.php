<?php

/*
! A IDEIA ERA RECEBER A LISTA $ratings QUE POSSUI ["id_produto","nota"] E RETORNAR O PRODUTO MAIS BEM AVALIADO, CONSIDERANDO QUE O MESMO id_produto PODE REPETIR
! TORNANDO-SE NECESSÁRIO CALCULAR A MÉDIA DELE PARA SE ELE É OU NÃO O MAIS BEM AVALIADO
*/

function solution ($N, $ratings)
{
    // You must complete the logic for the function that is provided
    // before compiling or submitting to avoid an error.
    // Write your code here
    
    $dish_map = array();

    //ISTO É UM GROUP BY
    foreach($ratings as $rating){
        $dish_map[$rating[0]][] = $rating[1];
    }

    //ISTO QUASE FOI UM GROUP BY, MAIS FOI CONSIDERADO MAIS LENTO PELO TESTE
    /*foreach($ratings as $rating){
        if(array_key_exists($rating[0],$dish_map)){
            $array_push($dish_map[$rating[0]],$rating[1]);
        }else{
            $dish_map[$rating[0]] = [$rating[1]];
        }
    }*/

    $higher = [0,0];

    foreach($dish_map as $dish => $rating_list){
        $average = array_sum($rating_list)/count($rating_list);

        if($average > $higher[1]){ //média maior que a vigente
            $higher = [$dish,$average];
        }else if($average == $higher[1] && $dish < $higher[0]){
            $higher = [$dish,$average];
        }
    }

    return $higher[0];
}

$N = readline();
$ratings = array();
for($i_ratings=0; $i_ratings < $N; $i_ratings++)
{
	array_push($ratings, explode(" ", readline()));
}

$out_ = solution($N, $ratings);
echo $out_;
echo "
";
?>