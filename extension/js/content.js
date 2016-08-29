(function() {

    "use strict" ;
    var pre = document.getElementsByTagName("pre")[0];
    document.body.removeChild(pre);

    var parser = new koara.Parser();
    var doc = parser.parse(pre.innerHTML.trim());
    var renderer = new koaraHtml.Html5Renderer();
    doc.accept(renderer);

    var content = document.createElement('div') ;
    content.innerHTML = renderer.getOutput();
    document.body.appendChild(content);
    
})();