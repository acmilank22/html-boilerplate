fetch('http://139.199.112.161/qfappmall_order/order_trade.do', {
    method: 'POST'
})
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
