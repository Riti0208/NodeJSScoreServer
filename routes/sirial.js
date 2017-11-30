var SerialPort = require('serialport');

console.log('シリアルポート準備完了');

var port = new SerialPort(
  '/dev/cu.wchusbserial1430',{
    parser: SerialPort.parsers.readline('\n'),
    baudrate: 9600
  }
);

port.on('open', function () {
  console.log('Serial open.');

  //topPlayer = 0;
  //setInterval(write, 1000, String(topPlayer));
});

port.on('data', function (data) {
  console.log('Data: ' + data);
});

exports.setData = function(data){
    port.write(new Buffer(data), function(err, results) {
      if(err) {
        console.log('Err: ' + err);
        console.log('Results: ' + results);
      }
  });
}
