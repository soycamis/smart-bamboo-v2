let scrolleableWrapperID = "sbscrolleable", childElementClass = "sbslide", thumbs = "auto", prevNext = "yes", width = 320, gap = "25"
let boxScrolleable
let prev = [], more = [], thisBoxScrolleable = [], countElements = []


function thumbFunction(j, scrolleable){
    let varx = width * j
    thisBoxScrolleable[scrolleable] = document.getElementById(scrolleable)
    thisBoxScrolleable[scrolleable].scroll(varx, 0)
    more[scrolleableWrapperID] = width * (j + 1);
    prev[scrolleableWrapperID] = width * j;
}


function createSlide(scrolleableWrapperID = "sbscrolleable", childElementClass = "sbslide", thumbs = "auto", prevNext = "yes", width = 320, gap = "25"){

    
    boxScrolleable = document.getElementById(scrolleableWrapperID)
    countElements[scrolleableWrapperID] = document.querySelectorAll('#'+scrolleableWrapperID + ' .' + childElementClass).length;
    console.log(scrolleableWrapperID + countElements[scrolleableWrapperID]) 
    
    more[scrolleableWrapperID] = width //Prev and More (next) buttons
    prev[scrolleableWrapperID] = 0

    if(thumbs == 'auto' || thumbs == 'yes'){
        let thumbsHtml = ''
        for(i = 0; i < countElements[scrolleableWrapperID]; i++){
            if(countElements[scrolleableWrapperID] > 3){
                thumbsHtml += '<button onclick="thumbFunction(' + i + ', \'' + scrolleableWrapperID + '\')" id="' + scrolleableWrapperID + '_thumb' + i + '" class="tw-rounded-full tw-min-w-[20px] tw-min-h-[20px] tw-border-solid tw-border-[2px] tw-border-[#292929] active:tw-bg-[#292929] tw-mx-2"></button>'
            }
            else {
                thumbsHtml += '<button onclick="thumbFunction(' + i + ', \'' + scrolleableWrapperID + '\')" id="' + scrolleableWrapperID + '_thumb' + i + '" class="tw-rounded-full tw-min-w-[20px] tw-min-h-[20px] tw-border-solid tw-border-[2px] tw-border-[#292929] active:tw-bg-[#292929] tw-mx-2 md:tw-hidden"></button>'
            }
        }
        //console.log(thumbsHtml)
        document.getElementById(scrolleableWrapperID + "_thumbContainer").innerHTML = thumbsHtml; 
    }

    if(prevNext != 'no'){
        document.getElementById(scrolleableWrapperID + "_moreButton").addEventListener("click", function(){
            document.getElementById(scrolleableWrapperID).scroll(more[scrolleableWrapperID], 0)
            if(more[scrolleableWrapperID] < (width * countElements[scrolleableWrapperID])){ //Reset buttons
                console.log(more[scrolleableWrapperID] + " # " + countElements[scrolleableWrapperID])

            more[scrolleableWrapperID] += width;
            prev[scrolleableWrapperID] += width;
            }
            else { more[scrolleableWrapperID] = 0;
                prev[scrolleableWrapperID] = 0;}
        })

        document.getElementById(scrolleableWrapperID + "_prevButton").addEventListener("click", function(){
            document.getElementById(scrolleableWrapperID).scroll(prev[scrolleableWrapperID], 0)
            if(prev[scrolleableWrapperID] == 0){  //Minimun values for buttons
                more[scrolleableWrapperID] = width;
                prev[scrolleableWrapperID] = 0; 
            }
            else { 
                more[scrolleableWrapperID] -= width;
                prev[scrolleableWrapperID] -= width;
                }
        })
    }
}