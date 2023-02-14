

// Run jQuery function after html page render
$(document).ready(() => {

    $('*').css('outline', '1px solid red')

    // Click Event
    $('#btn1').on('click',() => alert("Button 1 is Clicked"))


    $("#btn2").on('click',() => {
        $('.para1').hide()
    })

    // Toggle Event
    $('#toggle').on('click', () => {
        $('.para1').toggle()
    })

    // double click
    $('#dblclick').on('dblclick',() => {
        $('.para3').hide()
    })

    // on Hover 
    $('#onHover').hover(() => {
        $('.para4').toggle()
    })

    // Mouse Enter
    $('#onMouseEnter').on('mouseenter',() => {
        $('.para5').toggle()
    })

    // Mouse Leave
    $('#onMouseLeave').on('mouseleave',() => {
        $('.para6').toggle()
    })

    // Mouse Down
    $('#onMouseDown').on('mousedown',() => {
        $('.para7').css("color","red")
    })

    // Mouse up
    $('#onMouseup').on('mouseup',() => {
        $('.para7').css("color","blue")
    })


    $('#getEvent').on('click',(e) => {
        console.log(e.currentTarget.id)
        console.log(e.currentTarget.innerHTML)
        console.log(e.currentTarget.outerHTML)
    })

    $('#div').on('mousemove',(e) => {
        $('#div').html("Y : " + e.clientY + " X : " + e.clientX)
    })

    $('input').attr('name','name').focus((e) => {
        console.log(this)
        $(this).css('background',"pink")
    })

})