// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var H, Q, D, N, P ;
    var Coin = {};

    if (currency > 10000){
        Coin.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    
    else {
    
        if (currency >= 50 && currency <=10000){
        H = Math.floor(currency / 50);
        Coin.H = H;
        currency -= Coin.H * 50;
        
    }
        if (currency >= 25 && currency < 50){
        Q = Math.floor(currency / 25);
        Coin.Q = Q;
        currency -= Coin.Q * 25;
        
    }
        if (currency >= 10 && currency < 25){
        D = Math.floor(currency / 10);
        Coin.D = D;
        currency -= Coin.D * 10;
    }
        if (currency >= 5 && currency < 10){
        N = Math.floor(currency / 5);
        Coin.N = N;
        currency -= Coin.N * 5;

    }
        if (currency >= 1 && currency < 5){
        P = Math.floor(currency / 1);
        Coin.P = P;
    }
   
}


   return Coin;

}
