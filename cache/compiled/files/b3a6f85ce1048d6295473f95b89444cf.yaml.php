<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => 'C:/Users/EmilSmith/Documents/dev/emil-smith-2018/user/config/site.yaml',
    'modified' => 1540385587,
    'data' => [
        'title' => 'Some website',
        'default_lang' => 'en',
        'author' => [
            'name' => 'Emil',
            'email' => 'drkrepz@gmail.com'
        ],
        'taxonomies' => [
            0 => 'category',
            1 => 'tag'
        ],
        'metadata' => [
            'description' => 'Emil Smith is a Digital Designer and Front End Developer from London, UK'
        ],
        'summary' => [
            'enabled' => true,
            'format' => 'short',
            'size' => 300,
            'delimiter' => '==='
        ],
        'blog' => [
            'route' => '/blog'
        ]
    ]
];
