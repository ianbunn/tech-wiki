module.exports = function(request,response,next){
    // Plus sign converts date Object to milliseconds using start date 01/01/1970
    var start = +new Date();
    var stream = process.stdout;
    var url = request.url;
    var method = request.method;

    response.on("finish",function(){
        var duration = +new Date() - start;
        var message = `${method} to ${url}\n
            Took ${duration} ms\n`
        stream.write(message);
    });

    // Moves to the next Middleware in the stack
    next();
}