
console.log("CONTENT SCRIPT ACTIVATED, NOW INFILTRATING CURRENT PAGE!");

$( document ).ready(function() {

 retrieveAndFilter();
 // unstyleClick();

});

//functions for page load retrieval
function retrieveAndFilter(){
chrome.storage.sync.get("savedKeywords", function(data){
    console.log("FETCHING: ", data["savedKeywords"]);
        var savedKeywords = data["savedKeywords"];
            $.each(savedKeywords, filterKeyword);
            });
}



function resetStyle(){
    $( "h1" ).removeAttr( 'style' );
    $( "h1 > a" ).removeAttr( 'style' );
    $( "h2" ).removeAttr( 'style' );
    $( "h2 > a" ).removeAttr( 'style' );
    $( "h3" ).removeAttr( 'style' );
    $( "h3 > a" ).removeAttr( 'style' );
    $( "p" ).removeAttr( 'style' );
    $( "p > a" ).removeAttr( 'style' );
    $( "li" ).removeAttr( 'style' );
    $( "li > a" ).removeAttr( 'style' );
    $( "div" ).css("background", "");
    $( "div" ).css("color", "")
    $( "div > a" ).removeAttr( 'style' );
    $( ".userContent" ).css("background", "");
    $( ".userContent" ).css("color", "");
    $( ".UFICommentBody").css("background", "");
    $( ".UFICommentBody").css("color", "");
    $( ".UFICommentContent").css("background", "");
    $( ".UFICommentContent").css("color", "");
    $( "._5r--").css("background", "");
    $( "._5r--").css("color", "");
    $( ".ha").css("background", "");
    $( ".ha").css("color", "");
    $( ".a3s").css("background", "");
    $( ".a3s").css("color", "");
    $( "tr").css("background", "");
    $( "tr").css("color", "");
    $(".zA yO").css("background", "");
    $(".zA yO").css("color", "");
    $(".zA zE").css("background", "");
    $(".zA zE").css("color", "");
    $( "div._IV.live_result-sports-schedule__lr_sns_ovo_hima.vk_bk").css("background", "");
}

function filterKeyword(keyword, value) {
    total=0;
    console.log('value:'+ value);

        o = $(`:contains(${value}):not(:has(:contains(${value})))`)
        //iterate all the html document file conataining list and headers
        for(var i = 0; i < o.length; i++)
        {
            if (!o[i].parentNode || o[i].parentNode.nodeName === "BODY") {
            continue;
            }
            hideSpoiler(o[i]);
            total++;
        }

    if(total >= 10) {
        headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        for(var i = 0; i < headings.length; i++) hideNode(headings[i]);
    }

}

function hideSpoiler(node) {
	ancestor = node.parentNode;
	if(ancestor != null) {
		if (ancestor.parentNode != null 
				&& ancestor.tagName != 'BODY')
				ancestor = ancestor.parentNode;
		//image blur all image blur if any keywords detected
		imgs = ancestor.getElementsByTagName('img');
		for(var i = 0; i < imgs.length; i++) 
			imgs[i].style.webkitFilter = "blur(5px)"
		//list containing all got keywords call hidenode function
		lists = ancestor.getElementsByTagName('li');
		for(var i = 0; i < lists.length; i++) hideNode(lists[i]);
	}

	if (node == null || node.parentNode == null) return;
	all_child = node.parentNode.children;
	for(var i = 0; i < all_child; i++) {
		var type = all_child[i].tagName;
		if (tags.match(type) != null) hideNode(all_child[i]);
	}
	hideNode(node);
}


function hideNode(node) {
	node.textContent = '[TEXT BLOCKED: SPOILER DETECTED]';
	node.style.color = 'red'
}

//function to listen to checkbox and send keywords to storage
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("received message", message);
    console.log("from", sender);

    if (message.method === 'runFilter') {
        resetStyle();
        $.each(message.allKeywords, filterKeyword);

        chrome.storage.sync.set({'savedKeywords': message.allKeywords}, function() {
            chrome.storage.sync.get("savedKeywords", function(data) {
                console.log("NOW IN CHROME STORAGE: ", data);
                });
            });
        }
    });
