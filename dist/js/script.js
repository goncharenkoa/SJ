$(document).ready(function(){$("select").selectpicker(),$("#jstree").jstree(),$("#close-apply").click(function(){$(".filters-section").show(),$(".fieldsets-section").collapse("hide")}),$("#clear-filter").click(function(){$(".filters-section").hide()})});