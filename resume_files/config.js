	seajs.config({
		// 基础路径
        base: 'http://fc02.chrstatic.com/campus/festatic.chinahr.com/js',
		// 路径配置
		paths: {
			'common': 'common',
			'm': 'ats/m',
			'pc':'ats/pc',
			'en':'ats/enterprise'
		},
		// 别名配置
        alias: {
            'jquery': 'ats/common/jquery'
        },
		// 文件编码
		charset: 'utf-8'
		//map: [[/^(.*\.(?:css|js))(.*)$/i, '$1?v=20160601']]
	});

