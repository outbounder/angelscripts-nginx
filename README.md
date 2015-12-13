# angelscripts-nginx

Simple helper for updating remote nginx configurations

## how to use

1. create `dna/_staging/nginx.json`

    {
      "local": "./dna/_staging/nginx.conf",
      "dest": "/etc/nginx/sites-enabled/staging",
      "remote": "user@remote_address",
      "restartCmd": "sudo service nginx restart"
    }

2. `$ npm install angelscripts-nginx --save-dev`
3. `$ angel nginx update ./dna/_staging/nginx.json`
