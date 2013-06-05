var ppt = (function(){
    var actionList = new Array();
    var stepList = new Array();
    var init = new Array();
    var currentStep = 0;

    function dividerMove(elem, linenum, line_h) {
        elem.css('display', 'block');
        elem.css('top', (linenum*line_h)+'px');
    }

    // side 0
    stepList[0] = currentStep;
    init[currentStep] = function(){};
    actionList[currentStep++] = 0;
    
    // side 1
    stepList[1] = currentStep;
    init[currentStep] = function(){
        $('.core-details').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('.core-details').fadeIn(); 
    };
    actionList[currentStep++] = 0;

    // side 2
    stepList[2] = currentStep;
    init[currentStep] = function(){
        $('#slide2-jscode').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('#slide2-jscode').fadeIn();
    };
    actionList[currentStep++] = 0;

    // side 3
    stepList[3] = currentStep;
    init[currentStep] = function(){
        $('#slide3-jscode').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('#slide3-jscode').fadeIn();
    };
    actionList[currentStep++] = 0;

    // side 4
    stepList[4] = currentStep;
    init[currentStep] = function(){
        $('#slide4-object').css('display', 'none');
        $('#slide4-property').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('#slide4-object').fadeIn();
    };
    actionList[currentStep++] = function() {
        $('#slide4-property').fadeIn();
    };
    actionList[currentStep++] = 0;

    // side 5
    stepList[5] = currentStep;
    init[currentStep] = function(){};
    actionList[currentStep++] = 0;

    // side 6
    stepList[6] = currentStep;
    init[currentStep] = function(){};
    actionList[currentStep++] = 0;


    // side 7
    stepList[7] = currentStep;
    init[currentStep] = function(){
        $('#function-code').css('display', 'none');
        $('#eval-code').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('#function-code').fadeIn();
    };
    actionList[currentStep++] = function() {
        $('#eval-code').show('slow');
    };
    actionList[currentStep++] = 0;

    // slide 8
    stepList[8] = currentStep;  
    init[currentStep] = function(){
        $('div#function-definition').css('display', 'block');
        $('div#function-execution').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('div#function-definition').fadeOut();
        $('div#function-execution').fadeIn();
    };
    actionList[currentStep++] = 0;

    // side 9
    stepList[9] = currentStep;
    init[currentStep] = function(){
        $('div.function-code-1').css('display', 'block');
        $('div.function-code-2').css('display', 'none');
        $('div#divider-line').css('display', 'none');
        $('div#global-scope').css('display', 'none');
        $('div#outer-scope').css('display', 'none');
        $('div#inner1-scope').css('display', 'none');
        $('div#inner2-scope').css('display', 'none');
        $('div#inner11-scope').css('display', 'none');
        $('div#inner21-scope').css('display', 'none');
        $('tr#bar-row').css('display', 'none');
        $('tr#outer_x-row').css('display', 'none');
        $('tr#outer_y-row').css('display', 'none');
        $('tr#inner_1-row').css('display', 'none');
        $('tr#inner_2-row').css('display', 'none');
        $('tr#inner_1_x-row').css('display', 'none');
        $('tr#inner_1_y-row').css('display', 'none');
        $('tr#inner_1_1-row').css('display', 'none');
        $('tr#inner_2_x-row').css('display', 'none');
        $('tr#inner_2_y-row').css('display', 'none');
        $('tr#inner_2_1-row').css('display', 'none');
        $('tr#inner_1_1_x-row').css('display', 'none');
        $('tr#inner_1_1_y-row').css('display', 'none');
        $('tr#inner_2_1_x-row').css('display', 'none');
        $('tr#inner_2_1_y-row').css('display', 'none');

    };

    // scope
    actionList[currentStep++] = function() {
        $('div#global-scope').fadeIn();
    }
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 1);
        $('tr#bar-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        $('div#outer-scope').fadeIn();
    }
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 2);
        $('tr#outer_x-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 3);
        $('tr#outer_y-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 5);
        $('tr#inner_1-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 20);
        $('tr#inner_2-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        $('div#inner1-scope').fadeIn();
    }
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 6);
        $('tr#inner_1_x-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 7);
        $('tr#inner_1_y-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 10);
        $('tr#inner_1_1-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        $('div#inner2-scope').fadeIn();
    }
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 21);
        $('tr#inner_2_x-row').fadeIn();
    };

    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 22);
        $('tr#inner_2_y-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 26);
        $('tr#inner_2_1-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        $('div#inner11-scope').fadeIn();
    }
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 13);
        $('tr#inner_1_1_x-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 14);
        $('tr#inner_1_1_y-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        $('div#inner21-scope').fadeIn();
    }
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 30);
        $('tr#inner_2_1_x-row').fadeIn();
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 31);
        $('tr#inner_2_1_y-row').fadeIn();
    };

    // outer 
    actionList[currentStep++] = function() {
        $('td#global-outer').html('null');
    };
    actionList[currentStep++] = function() {
        $('td#outer-outer').html('GLOBAL');
    };
    actionList[currentStep++] = function() {
        $('td#inner_1-outer').html('outer');
        $('td#inner_2-outer').html('outer');
    };
    actionList[currentStep++] = function() {
        $('td#inner_1_1-outer').html('inner_1');
        $('td#inner_2_1-outer').html('inner_2');
    };

    // execute
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 2);
        $('td#outer_x-value').html('0');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 3);
        $('td#outer_y-value').html('0');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 37);
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 1);
        $('td#bar-value').html('{inner1, inner2}')
        $('td#bar-value').css('font-size', '16px');
    };

    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 43);
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 6);
        $('td#inner_1_x-value').html('1');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 7);
        $('td#inner_1_y-value').html('1');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 8);
        $('td#outer_x-value').html('10');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 9);
        $('td#outer_y-value').html('10');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 17);
    };

    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 44);
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 21);
        $('td#inner_2_x-value').html('2');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 22);
        $('td#inner_2_y-value').html('2');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 24);
        $('td#outer_x-value').html('20');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 25);
        $('td#outer_y-value').html('20');
    };
    actionList[currentStep++] = function() {
        dividerMove($('#divider-line'), 19, 34);
    };

    actionList[currentStep++] = function() {
        $('div.function-code-1').fadeOut();   
        $('div.function-code-2').fadeIn();
    };

    actionList[currentStep++] = 0;

    // side 10
    stepList[10] = currentStep;
    init[currentStep] = function(){
        $('div#object-diagram').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('div#object-diagram').fadeIn();
    }
    actionList[currentStep++] = 0;


    // side 11
    stepList[11] = currentStep;
    init[currentStep] = function(){
        $('tr#bar2-x').css('display', 'none');
        $('div#proto-divider').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        dividerMove($('div#proto-divider'), 34, 10); 
    };
    actionList[currentStep++] = function() {
       $('td#foo2-proto').html('bar'); 
    };
    actionList[currentStep++] = function() {
        dividerMove($('div#proto-divider'), 35, 13); 
    };
    actionList[currentStep++] = function() {
        dividerMove($('div#proto-divider'), 33, 17); 
    };
    actionList[currentStep++] = function() {
        dividerMove($('div#proto-divider'), 31, 20); 
    };
    actionList[currentStep++] = function() {
        $('tr#bar2-x').fadeIn();
    };
    actionList[currentStep++] = 0;

    // side 12
    // new operator
    stepList[12] = currentStep;
    init[currentStep] = function(){};
    actionList[currentStep++] = 0;

    // side 13
    stepList[13] = currentStep;
    init[currentStep] = function(){
        $('div#module-question').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('div#module-question').fadeIn();
    };
    actionList[currentStep++] = 0;


    // side 14
    stepList[14] = currentStep;
    init[currentStep] = function(){};
    actionList[currentStep++] = 0;


    // side 15
    stepList[15] = currentStep;
    init[currentStep] = function(){
        $('div#thread').css('display', 'none');
    };
    actionList[currentStep++] = function() {
        $('div#thread').fadeIn();
    };
    actionList[currentStep++] = 0;


    // side 16
    stepList[16] = currentStep;
    init[currentStep] = function(){};
    actionList[currentStep++] = 0;


    // side 17
    stepList[17] = currentStep;
    init[currentStep] = function(){};
    actionList[currentStep++] = 0;

    // side 18
    stepList[18] = currentStep;
    init[currentStep] = function(){};
    actionList[currentStep++] = 0;

    currentStep = 0;

    return {
        reset: function(step) {
            console.log('step: ' + step);
            if (step < stepList.length) {
                currentStep = stepList[step];
                init[currentStep]();
            } 
        },
        prev: function(){
            if (actionList[currentStep] == 0){
                currentStep--;
                if (currentStep < 0) {
                    currentStep = actionList.length-1;
                }
                init[currentStep]();              
                return true;
            } else {
                actionList[currentStep](); 
                currentStep--;
                if (currentStep < 0) {
                    currentStep = actionList.length-1;
                }
                return false;
            }    
        },
        next: function(){
            if (actionList[currentStep] == 0){
                currentStep++;
                if (currentStep == actionList.length) {
                    currentStep = 0;
                }
                init[currentStep]();              
                return true;
            } else {
                actionList[currentStep](); 
                currentStep++;
                if (currentStep == actionList.length) {
                    currentStep = 0;
                }
                return false;
            }
        }
    };
})(jQuery);
