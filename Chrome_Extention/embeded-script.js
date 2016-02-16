document.addEventListener('paste', function(e){
	if($('#new-de-attributes').length == 0) return;
	if(!e.clipboardData || !e.clipboardData.getData('text/plain')) return;
	var rows = e.clipboardData.getData('text/plain').split(/\r\n|\r|\n/);
	if(rows.length <= 1 || rows[0].split(/\t/).length != 5) return;
	rows.forEach(function(row, i){
	setTimeout(function(){
		$row = $("#new-de-attributes .grid-row:last");
		rowValues = row.split(/\t/);
		$row.find('.field-name-cell input:not(".fuel-input-overlayInput")').val(rowValues[0]).keydown();
		$row.find('.field-length-cell input:not(".fuel-input-overlayInput")').val(rowValues[2]).keydown();
		if(rowValues[3]) $row.find('.primary-key-cell .fuel-checkboxbutton-icon').click();
		if(rowValues[4]) $row.find('.required-field-cell .fuel-checkboxbutton-icon').click();
	}, i*333);
	})
});
