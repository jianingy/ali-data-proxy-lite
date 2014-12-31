var app = require( 'express' )();
var ModelProxy = require( './../' );

// 初始化modelproxy接口文件
ModelProxy.init( './interface.json' );

// 配置拦截器，浏览器端可通过访问 127.0.0.1/model/[interfaceId]
app.use( '/model/', ModelProxy.Interceptor );

app.get( '/index', function( req, res ) {
    res.sendfile( 'modelproxy-client.html' );
} );

var model = ModelProxy.create( 'message.*' );
model.add( {"title":"sf","message":"000000000","messageType":0,"other":"xxxx","creator":"xxxxxx"} ).done( function( data ) {
    console.log( data );
    console.log( "kskskskk" + JSON.stringify(data) );
} );

/*
app.get( '/getCombinedData', function( req, res ) {
	var searchModel = ModelProxy.create( 'Search.*' );
    searchModel.list( { q: 'ihpone6' } )
        .list( { q: '冲锋衣' } )
        .suggest( { q: 'i' } )
        .getNav( { q: '滑板' } )
        .done( function( data1, data2, data3, data4 ) {
            res.send( {
            	"list_ihpone6": data1,
            	"list_冲锋衣": data2,
            	"suggest_i": data3,
            	"getNav_滑板": data4
            } );
        } );
} );

// 带cookie的代理请求与回写
app.get( '/getMycart', function( req, res ) {
    var cookie = req.headers.cookie;
    console.log( 'request cookie:\n', cookie );
    var cart = ModelProxy.create( 'Cart.*' );
    cart.getMyCart()
        .withCookie( cookie )
        .done( function( data , setCookies ) {
            console.log( 'response cookie:\n', setCookies );
            res.setHeader( 'Set-Cookie', setCookies );
            res.send( data );
        }, function( err ) {
            res.send( 500, err );
        } );
} );


// 配置资源路由
app.get( '/modelproxy-client.js', function( req, res ) {
	res.sendfile( './modelproxy-client.js' );
} );

app.listen( 3001 );

console.log( 'port: 3000' );*/
