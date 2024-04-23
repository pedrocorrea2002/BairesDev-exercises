/* 
! A IDEIA ERA CONVERTER UMA DADA QUANTIDADE DE SEGUNDOS EM "x years, x days, x hours, x minutes and x seconds" 
*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function (data) {
    input_ += data.toString().trim();
    input_ += '\n';
});

function solution(seconds) {
    // You must complete the logic for the function that is provided
    // before compiling or submitting to avoid an error.

    // Write your code here
    let minutes = 0;
    let hours = 0;
    let days = 0;
    let years = 0;
    let retorno = ""

    if(seconds == 0){
        return "now"
    }

    while(seconds >= 60){
        seconds -= 60
        minutes += 1

        if(minutes == 60){
            minutes = 0
            hours += 1
        }

        if(hours == 24){
            hours = 0
            days += 1
        }

        if(days == 365){
            days = 0
            years += 1
        }
    }

    if(seconds > 0){
        if(seconds == 1){
            retorno = `${seconds} second`
        }else{
            retorno = `${seconds} seconds`
        }
        
    }
    if(minutes > 0){
        if(retorno != ""){
            retorno = `and ${retorno}`
        }

        if(minutes == 1){
            retorno = `1 minute ${retorno}`
        }else{
            retorno = `${minutes} minutes ${retorno}`
        }
    }

    if(hours > 0){
        if(retorno != ""){
            retorno = `, ${retorno}`
        }

        if(hours == 1){
            retorno = `1 hour${retorno}`
        }else{
            retorno = `${hours} hours${retorno}`
        }
    }

    if(days > 0){
        if(retorno != ""){
            retorno = `, ${retorno}`
        }

        if(days == 1){
            retorno = `1 day${retorno}`
        }else{
            retorno = `${days} days${retorno}`
        }
    }

    if(years > 0){
        if(retorno != ""){
            retorno = `, ${retorno}`
        }

        if(years == 1){
            retorno = `1 year${retorno}`
        }else{
            retorno = `${years} years${retorno}`
        }
    }

    return retorno
}

process.stdin.on('end', function () {
    input_ = input_.replace(/\n$/, "");
    input_ = input_.split("\n");

    var idx_ = 0;
    var seconds = parseInt(input_[idx_++].trim(), 10);

    var out_ = solution( seconds);
    process.stdout.write(out_.toString());

    process.exit();

});