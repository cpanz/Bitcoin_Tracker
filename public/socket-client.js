var socket = io("https://websocket.btcc.com");

socket.emit("subscribe", "marketdata_cnybtc");

socket.on("connect", function() {
    socket.on("ticker", function(data) {
        console.log(data);
        
        $("#market").text(data.ticker.market);
        $("#high-count").text(data.ticker.high)
        $("#low-count").text(data.ticker.low)
        $("#buy").text(data.ticker.buy);
        $("#sell").text(data.ticker.sell)
        $("#volume").text(data.ticker.vol)
    });
});