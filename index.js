module.exports = function (angel) {
  require('angelabilities-exec')(angel)
  angel.on('nginx update :nginxCellPath', function (angel) {
    var nginxCellPath = angel.cmdData.nginxCellPath
    var nginxCell = require(nginxCellPath)
    var cmd = format("scp {local} {remote}:{dest} && ssh {remote} '{restartCmd}'", nginxCell)
    console.info(cmd)
    var child = angel.sh(cmd, function (err) {
      if (err) {
        console.error(err)
        return process.exit(1)
      } else {
        process.exit(0)
      }
    })
  })
}
