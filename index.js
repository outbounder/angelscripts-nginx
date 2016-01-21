module.exports = function (angel) {
  require('angelabilities-exec')(angel)
  angel.on('nginx update :nginxCellPath', function (angel) {
    var path = require('path')
    var nginxCellPath = angel.cmdData.nginxCellPath
    var nginxCell = require(path.join(process.cwd(), nginxCellPath))
    var format = require('string-template')
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
    process.stdin.resume()
    process.stdin.pipe(child.stdin)
  })
  .example('nginx update ./dna/_staging/nginx.json')
}
