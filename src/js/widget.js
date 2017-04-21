
/**
 * 1. Document ready used to ensure the page has fully loaded
 *
 * 2. Each button is accessed via their unique id named after their material
 *
 * 3. All buttons are children of the .add-button-style class which applies
 * the button style
 *
 * 4. Each click function initiates their own slideToggle which displays a
 * new section, this section is targeted via the class 'add-x-info' where
 * x denotes the unique material names
 *
 * 5. The rotate-button class is used in the toggleClass method to enable the
 * rotation animation applied to each '+' button
 *
 *
 */
jQuery(function($) {
    /**
     * addInputClickEvent
     * @param  {string} materialName [Add the material name as a string,
     *                               this completes the id identifier in the
     *                               first selector, and class identifier in
     *                               the second selector
     *                               e.g for addInputClickEvent(paper), the result is
     *                               #paper and .add-paper-info]
     *
     * @return [void]                [explained above]
     */
    var addInputClickEvent = function(materialName) {
        $(".add-button-style > #" + materialName + "1").click(function() {
            $(".add-" + materialName + "-info").slideToggle(400);
            $(".add-" + materialName + "-info").html('<form id="'+ materialName +'send" class="input-form" action=""> <p id="'+ materialName +'put">Please enter the new measurement:</p> <input id="'+ materialName +'" class="input-measurement-area" type="number" name="'+ materialName +'"> <input class="form-submit-button" type="submit" value="Add">');
            $(this).toggleClass('rotate-button'); // for button
            var res = ["paper", "metal", "compost", "glass", "plastic", "general"];
			for (i = 0; i < res.length; i++) {
				ajaxres(res, i);
			}
        });
    };

    // Function calls
    addInputClickEvent('paper');
    addInputClickEvent('compost');
    addInputClickEvent('glass');
    addInputClickEvent('metal');
    addInputClickEvent('plastic');
    addInputClickEvent('general');
});
