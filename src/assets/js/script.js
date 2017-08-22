$(document).ready(function() {

    //SELECT
    $('select').selectpicker();

    //TREE
     $('#jstree').jstree();

    //  $('#close-apply').on('shown.bs.collapse', function() {
    //       $(".filters-section").show();
    //     })
    //     $('#close-apply').on('hidden.bs.collapse', function() {
    //       $(".fieldsets-section").hide();
    //     })
    $('#close-apply').click(function(){
        $(".filters-section").show();
        $('.fieldsets-section').collapse('hide');
    });

    $('#clear-filter').click(function(){
        $(".filters-section").hide();
    });

});
