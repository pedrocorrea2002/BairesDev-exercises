/*
! ELES CONSEGUIRAM SEGUIR UM LADRÃO ATÉ O DEPÓSITO ONDE ELE ESCONDE SEU ROUBO
! NOSSO ESPIÃO NÃO CONSEGUIU VER DIREITO QUAL ERA O PIN
! PARA DIGITO QUE O ESPIÃO PENSA QUE VIU, O DIGITO PODE SER UM ADJACENTE SEU DA HORIZONTAL OU DA VERTICAL
! O ESPIÃO PRECISA PODER DAR UM INPUT DO PIN QUE PENSA QUE VIU E RECEBER UMA LISTA DE TODOS OS PINS POSSÍVEIS ORDENADOS EM ORDEM CRESCENTE CONSIDERANDO O ERRO HORIZONTAL E VERTICAL
* A ÚNICA COISA QUE EU NÃO CONSEGUI FOI CONSIDERAR QUE O PIN PODE TER INFINITAS CASAS, FIZ UMA SOLUÇÃO QUE SÓ TRABALHA COM PINS DE ATÉ 4 CASAS
*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function (data) {
    input_ += data.toString().trim();
    input_ += '\n';
});

function solution(pin) {
    // You must complete the logic for the function that is provided
    // before compiling or submitting to avoid an error.

    // Write your code here


    possibities = [
        [0,8],
        [1,2,4],
        [2,1,3,5],
        [3,2,6],
        [4,1,5,7],
        [5,2,4,6,8],
        [6,3,5,9],
        [7,4,8],
        [8,0,7,5,9],
        [9,8,6]
    ]

    pins = []

    if(pin.length == 1){
        possibities[Number(pin)].forEach(a1 => {
            pins.push(a1.toString())
        })

    }else if(pin.length == 2){
        possibities[Number(pin[0])].forEach(b1 => {
            possibities[Number(pin[1])].forEach(b2 => {
                pins.push(`${b1}${b2}`)
            })
        })

    }else if(pin.length == 3){
        possibities[Number(pin[0])].forEach(c1 => {
            possibities[Number(pin[1])].forEach(c2 => {
                possibities[Number(pin[2])].forEach(c3 => {
                    pins.push(`${c1}${c2}${c3}`)
                })
            })
        })

    }else if(pin.length == 4){
        possibities[Number(pin[0])].forEach(d1 => {
            possibities[Number(pin[1])].forEach(d2 => {
                possibities[Number(pin[2])].forEach(d3 => {
                    possibities[Number(pin[3])].forEach(d4 => {
                        pins.push(`${d1}${d2}${d3}${d4}`)
                    })
                })
            })
        })
    }

    pins.sort()

    return pins
}

process.stdin.on('end', function () {
    input_ = input_.replace(/\n$/, "");
    input_ = input_.split("\n");

    var idx_ = 0;
    var pin = input_[idx_++].trim();

    var out_ = solution( pin);
    process.stdout.write(out_.join('\n'));

    process.exit();

});