$(document).ready(function () {

    $.extend($.expr[":"], {
        "containsIN": function (elem, i, match, array) {
            return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });

    var tabIdArray = {};     
    $('#myTab li a:first').addClass("active show");
    $('#myTabContent div:first').addClass("active show");
    $('#mixedSlider-2 .tabBox:first .card').removeClass("bg-white");
    $('#mixedSlider-2 .tabBox:first .card').addClass("bg-blue");
    setTabId();

    /* multislider js starts */
    var mixedSliderCheck = document.getElementById('mixedSlider-1');
    if (mixedSliderCheck != null) {
        $('#mixedSlider-1').multislider({
            duration: 150000,
            interval: 500000
        });
    }
    var mixedSliderCheck = document.getElementById('mixedSlider-2');
    if (mixedSliderCheck != null) {
        $('#mixedSlider-2').multislider({
            duration: 1500,
            interval: 5000
        });
    }
    /* multislider js ends */



    $(".expandCollapse").click(function () {
        if ($('#collapseContentDiv').hasClass('hide')) {
            var el = $('#collapseContentDiv'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            $('#collapseContentDiv').animate({
                height: autoHeight
            }, 500).removeClass('hide');
            $('.expandCollapse').html("<i class='fa fa-chevron-up news-carousel-icon'></i>");
        } else {
            $('#collapseContentDiv').animate({
                height: 50
            }, 500).addClass('hide');
            $('.expandCollapse').html("<i class='fa fa-chevron-down news-carousel-icon'></i>");
        }
    });

    $(".tabBox").click(function () {
        var divId = $(this).attr('id');
        var tabId = $(this).closest(".tab-pane").attr('id');
        var selectedCard = "#" + tabId + " #" + divId + " .card";
        var selectedTabName = $("#" + tabId + "-tab").text();
        //console.log("selectedTabName : " + selectedTabName);

        var selectedCardTitle = $(selectedCard + " .card-title").text();
        //console.log("selectedCardTitle : " + selectedCardTitle);

        $('.tabBox .card').removeClass("bg-blue");
        $(selectedCard).removeClass("bg-white");
        $(selectedCard).addClass("bg-blue");

        var textDivID = "#" + tabId + " #" + divId + '-text';
        //console.log("textDivID : " + textDivID);

        $("#popular #tabBox-1-text .bcumb-tab-name").text();
        $("#popular #tabBox-1-text .bcumb-form-title").text();

        $(textDivID + " .bcumb-tab-name").text(selectedTabName);
        $(textDivID + " .bcumb-form-title").text(selectedCardTitle);

        $('.tabBox-text').hide();
        $(textDivID).show();
    });

    function search() {
        var searchText = $('.search-input-text').val();
        if (searchText.length > 0) {
            var searchResult = $(".card-title:containsIN(" + searchText + ")");
            if (searchResult.length >= 1) {
                $(".card").removeClass("bg-blue");
                $(".card").removeClass("bg-white");
                $(".card").hide();
                var searchResultCard = searchResult.closest(".card");
                searchResultCard.addClass("highlight-search-result-card").show();

				$("html, body").animate({
                    scrollTop: $(
                        'html, body').get(0).scrollHeight
                }, 3000);                
                
                $(".nav-link.form-category-tab-link").removeClass("active").removeClass("show").addClass("hide");
                $(".nav-link.form-category-tab-link").hide();
                
                $(searchResultCard.closest(".tab-pane")).each(function (index) {                    
                    var searchResultTabId = $(this).attr('id');                   
                    $("#" + searchResultTabId + "-tab").addClass("highlight-search-result-tab").show();
                });                
            }
        }
    }

    $("input").change(function () {
        $(".nav-link.form-category-tab-link").removeClass("highlight-search-result-tab");
        $(".nav-link.form-category-tab-link").show();
        $(".card").removeClass("highlight-search-result-card");
        $(".card").show();
    });

    $("#searchTextBox").keyup(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);        
        if (keycode == '13') {
            search();
        }
        event.stopPropagation();
    });

    $(".input-group-append").click(function () {
        search();
    });

    $("#myTab").click(function () {
        setTabId();
    });

    $(".topSliderButton").click(function () {

        $header = $(this);
        //getting the next element
        $content = $header.next();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            $header.text(function () {
                //change text based on condition
                return $content.is(":visible") ? "Collapse" : "Expand";
            });
        });

    });

    function setTabId() {
        $("#myTab .nav-item .nav-link").each(function (index) {
            var tabLink = $(this).attr("href");
            var tabId = tabLink.substring(1, tabLink.length);
            tabIdArray[index] = tabId;
        });

        //console.log(tabIdArray);

        $("#myTabContent .tab-pane").each(function (index) {
            var tabId = tabIdArray[index];
            $(this).attr("id", tabId);
            $(this).attr("aria-labelledby", tabId + "-tab");
        });
    }
});
