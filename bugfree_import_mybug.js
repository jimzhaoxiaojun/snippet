// ==UserScript==
// @name       My Fancy New Userscript
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://192.192.100.176/bugfree/QueryBug.php*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// @copyright  2012+, You
// ==/UserScript==

addImpBtn();

function addImpBtn() {
    $(document.body).append('<button type="button" id="imp_my_bug">导出我的bug</button>');
    $('#imp_my_bug').click(
        function() {
            var i = 0;
            var bugs = "";
            $('.BgRow').each(
                function() {
                    
                    var bgrow = $(this).html();
                    //alert(bgrow);
                    var bugIdBeginIndex = bgrow.indexOf('BugID=');
                    //alert(bugIdBeginIndex);
                    if (-1 < bugIdBeginIndex) {
                        var bugIdEndIndex = bugIdBeginIndex + 13;
                        var bugid = bgrow.substring(bugIdBeginIndex + 6, bugIdEndIndex);
                        
                        var titleBeginIndex = bgrow.indexOf('title="');
                        bgrow = bgrow.substring(titleBeginIndex + 6);
                        var titleEndIndex = bgrow.indexOf('">');
                        var title = bgrow.substring(1,titleEndIndex);
                        
                        i = i + 1;
                        bugs = bugs + i + "、【" + bugid + "】" + title + "\n";
                    }
                }
            );
            
            if (bugs!="")
                alert(bugs);
        }
    );    
}