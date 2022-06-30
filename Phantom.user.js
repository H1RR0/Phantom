// ==UserScript==
// @name         Phantom
// @version      1.8
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @description  jut.su, autoskip, autoplay, hiro autoskip, hiro autoplay, jutsu autoplay, jutsu autoskip, Phantom
// @author       hiro
// @updateURL    https://github.com/H1RR0/Phantom/raw/main/Phantom.user.js
// @downloadURL  https://github.com/H1RR0/Phantom/raw/main/Phantom.user.js
// @match        https://jut.su/*
// @icon         https://gen.jut.su/safari_152.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

        GM_addStyle (`

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

       .phantomx_jutsu_panel_extension {
         user-select: none;
         display: flex;
         flex-direction: column;
         font-family: 'Inter', sans-serif;
         padding: 1rem;
         font-size:12px;
         background:#3f3f3f;
         margin-top:10px;
         border-radius:.3rem;
         font-weight:500;
       }
       .phantomx_jutsu_panel_extension .phantomx_title {
         margin-bottom: 10px;
         }
       .phantomx_jutsu_panel_extension .phantomx_middle {
         opacity: .5;
        }
       .phantomx_jutsu_panel_extension .phantomx_footer {
         margin-top: 10px;
         font-size: 10px;
       }
       .phantomx_jutsu_panel_extension .phantomx_footer a {
         display: flex;
	 flex-direction: column;
         opacity: .5;
         transition: opacity 250ms ease-in-out;
       }
       .phantomx_jutsu_panel_extension .phantomx_footer a:hover {
         opacity: 1;
       }

    `)

    let name = "Phantom "
    let version = "1.8"

    $(".post_media.pm_videojs").append(
        " <div class='phantomx_jutsu_panel_extension'></div>"
    )

    $(".phantomx_jutsu_panel_extension").prepend(
        " <div class='phantomx_title'>"+ name +"<span style='color:#bee6c3;'>"+ version +"</span></div> ",
        ' <div class="phantomx_footer"> <a target="_blank" href="https://github.com/H1RR0" class="phantomx_author">https://github.com/H1RR0</a> <a target="_blank" href="https://vk.com/h1rr0" class="phantomx_author">https://vk.com/h1rr0</a> </div> '
    )


    setInterval(() => {
		try{
			var elLeft = document.querySelector(".vjs-overlay.vjs-overlay-bottom-left.vjs-overlay-skip-intro.vjs-overlay-background")
			if(elLeft.className.split(/\s+/).indexOf("vjs-hidden") == -1) elLeft.onclick()

			var elRight = document.querySelector(".vjs-overlay.vjs-overlay-bottom-right.vjs-overlay-skip-intro.vjs-overlay-background")
			if(elRight.className.split(/\s+/).indexOf("vjs-hidden") == -1) elRight.onclick()

			if(document.querySelector(".draggable-mtz").textContent != "1.80"){
				document.querySelector(".controls-mtz").children[2].dispatchEvent(new MouseEvent('click', {
					'view': window,
					'bubbles': true,
					'cancelable': true
				}))
			}
		}
		finally{
           // fuck this shit
		}
	}, 1000)


})();
