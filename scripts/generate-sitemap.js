const sitemap = require('nextjs-sitemap-generator');
const path = require('path');


sitemap({
    baseUrl: 'www.ferreteriasportales.com',
    pagesDirectory: path.resolve(__dirname, '../public'),
    targetDirectory: path.resolve(__dirname, '../public'),
    ignoredExtensions: ['js','map','json','xml','png','css','jpeg','jpg','icon'],
    ignoredPaths:[
        '404',
        'favicon',
        'index',
    ],
    extraPaths:[
        '/'
    ]
})