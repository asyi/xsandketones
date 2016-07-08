$(document).on('ready', function() {


	function draw(){
		var clickCounter = 0;
		//if(win == 0){
			$('td').on('click', function(){
				if (!$(this).hasClass("clicked")){
					if (clickCounter % 2 == 0){
						$(this).text('X');
						$(this).addClass('clicked');
						$(this).addClass('x');
					}
					else {
						$(this).text('O');
						$(this).addClass('clicked');
						$(this).addClass('o')
					};
					checkForWinX();
					checkForWinO();
					clickCounter++;
					console.log (clickCounter);
					if ((clickCounter == 9) && (win == 0)){
						alert('CATS GAME!')
						location.reload();
					}
				}; //end of if   not clicked???
			}); //end of on click function
	//	}; //end of if win
	}; //end of draw function

	draw();


	var win = 0
	function checkForWinX(){
	// 1X
		if( ($($('td')[0]).hasClass('clicked')  &&  $($('td')[0]).hasClass('x')) &&
				($($('td')[1]).hasClass('clicked')  &&  $($('td')[1]).hasClass('x')) &&
				($($('td')[2]).hasClass('clicked')  &&  $($('td')[2]).hasClass('x')) ){
			win=1;
			($($('td')[0]).addClass('grey'));
			($($('td')[1]).addClass('grey'));
			($($('td')[2]).addClass('grey'));

		};
	// 2X
		if( ($($('td')[3]).hasClass('clicked')  &&  $($('td')[3]).hasClass('x')) &&
				($($('td')[4]).hasClass('clicked')  &&  $($('td')[4]).hasClass('x')) &&
				($($('td')[5]).hasClass('clicked')  &&  $($('td')[5]).hasClass('x')) ){
			win=1;
			($($('td')[3]).addClass('grey'));
			($($('td')[4]).addClass('grey'));
			($($('td')[5]).addClass('grey'));
		};
	// 3X
		if( ($($('td')[6]).hasClass('clicked')  &&  $($('td')[6]).hasClass('x')) &&
				($($('td')[7]).hasClass('clicked')  &&  $($('td')[7]).hasClass('x')) &&
				($($('td')[8]).hasClass('clicked')  &&  $($('td')[8]).hasClass('x')) ){
			win=1;
			($($('td')[6]).addClass('grey'));
			($($('td')[7]).addClass('grey'));
			($($('td')[8]).addClass('grey'));
		};
	// 4X
		if( ($($('td')[0]).hasClass('clicked')  &&  $($('td')[0]).hasClass('x')) &&
				($($('td')[3]).hasClass('clicked')  &&  $($('td')[3]).hasClass('x')) &&
				($($('td')[6]).hasClass('clicked')  &&  $($('td')[6]).hasClass('x')) ){
			win=1;
			($($('td')[0]).addClass('grey'));
			($($('td')[3]).addClass('grey'));
			($($('td')[6]).addClass('grey'));
		};
	// 5X
		if( ($($('td')[1]).hasClass('clicked')  &&  $($('td')[1]).hasClass('x')) &&
				($($('td')[4]).hasClass('clicked')  &&  $($('td')[4]).hasClass('x')) &&
				($($('td')[7]).hasClass('clicked')  &&  $($('td')[7]).hasClass('x')) ){
			win=1;
			($($('td')[1]).addClass('grey'));
			($($('td')[4]).addClass('grey'));
			($($('td')[7]).addClass('grey'));
		};
	// 6X
		if( ($($('td')[2]).hasClass('clicked')  &&  $($('td')[2]).hasClass('x')) &&
				($($('td')[5]).hasClass('clicked')  &&  $($('td')[5]).hasClass('x')) &&
				($($('td')[8]).hasClass('clicked')  &&  $($('td')[8]).hasClass('x')) ){
			win=1;
			($($('td')[2]).addClass('grey'));
			($($('td')[5]).addClass('grey'));
			($($('td')[8]).addClass('grey'));
		};
	// 7X
		if( ($($('td')[0]).hasClass('clicked')  &&  $($('td')[0]).hasClass('x')) &&
				($($('td')[4]).hasClass('clicked')  &&  $($('td')[4]).hasClass('x')) &&
				($($('td')[8]).hasClass('clicked')  &&  $($('td')[8]).hasClass('x')) ){
			win=1;
			($($('td')[0]).addClass('grey'));
			($($('td')[4]).addClass('grey'));
			($($('td')[8]).addClass('grey'));
		};
	// 8X
		if( ($($('td')[6]).hasClass('clicked')  &&  $($('td')[6]).hasClass('x')) &&
				($($('td')[4]).hasClass('clicked')  &&  $($('td')[4]).hasClass('x')) &&
				($($('td')[2]).hasClass('clicked')  &&  $($('td')[2]).hasClass('x')) ){
			win=1;
			($($('td')[6]).addClass('grey'));
			($($('td')[4]).addClass('grey'));
			($($('td')[2]).addClass('grey'));
		};

		// X Wins
		if (win == 1){
			alert('X WINS!');
			location.reload();
		};
	};


	function checkForWinO(){
	// 1.O
		if( ($($('td')[0]).hasClass('clicked')  &&  $($('td')[0]).hasClass('o')) &&
				($($('td')[1]).hasClass('clicked')  &&  $($('td')[1]).hasClass('o')) &&
				($($('td')[2]).hasClass('clicked')  &&  $($('td')[2]).hasClass('o')) ){
			win=2;
			($($('td')[0]).addClass('grey'));
			($($('td')[1]).addClass('grey'));
			($($('td')[2]).addClass('grey'));
		};
	// 2.O
		if( ($($('td')[3]).hasClass('clicked')  &&  $($('td')[3]).hasClass('o')) &&
				($($('td')[4]).hasClass('clicked')  &&  $($('td')[4]).hasClass('o')) &&
				($($('td')[5]).hasClass('clicked')  &&  $($('td')[5]).hasClass('o')) ){
			win=2;
			($($('td')[3]).addClass('grey'));
			($($('td')[4]).addClass('grey'));
			($($('td')[5]).addClass('grey'));
		};
	// 3.O
		if( ($($('td')[6]).hasClass('clicked')  &&  $($('td')[6]).hasClass('o')) &&
				($($('td')[7]).hasClass('clicked')  &&  $($('td')[7]).hasClass('o')) &&
				($($('td')[8]).hasClass('clicked')  &&  $($('td')[8]).hasClass('o')) ){
			win=2;
			($($('td')[6]).addClass('grey'));
			($($('td')[7]).addClass('grey'));
			($($('td')[8]).addClass('grey'));
		};
	// 4.O
		if( ($($('td')[0]).hasClass('clicked')  &&  $($('td')[0]).hasClass('o')) &&
				($($('td')[3]).hasClass('clicked')  &&  $($('td')[3]).hasClass('o')) &&
				($($('td')[6]).hasClass('clicked')  &&  $($('td')[6]).hasClass('o')) ){
			win=2;
			($($('td')[0]).addClass('grey'));
			($($('td')[3]).addClass('grey'));
			($($('td')[6]).addClass('grey'));
		};
	// 5.O
		if( ($($('td')[1]).hasClass('clicked')  &&  $($('td')[1]).hasClass('o')) &&
				($($('td')[4]).hasClass('clicked')  &&  $($('td')[4]).hasClass('o')) &&
				($($('td')[7]).hasClass('clicked')  &&  $($('td')[7]).hasClass('o')) ){
			win=2;
			($($('td')[1]).addClass('grey'));
			($($('td')[4]).addClass('grey'));
			($($('td')[7]).addClass('grey'));
		};
	// 6.O
		if( ($($('td')[2]).hasClass('clicked')  &&  $($('td')[2]).hasClass('o')) &&
				($($('td')[5]).hasClass('clicked')  &&  $($('td')[5]).hasClass('o')) &&
				($($('td')[8]).hasClass('clicked')  &&  $($('td')[8]).hasClass('o')) ){
			win=2;
			($($('td')[2]).addClass('grey'));
			($($('td')[5]).addClass('grey'));
			($($('td')[8]).addClass('grey'));
		};
	// 7.O
		if( ($($('td')[0]).hasClass('clicked')  &&  $($('td')[0]).hasClass('o')) &&
				($($('td')[4]).hasClass('clicked')  &&  $($('td')[4]).hasClass('o')) &&
				($($('td')[8]).hasClass('clicked')  &&  $($('td')[8]).hasClass('o')) ){
			win=2;
			($($('td')[0]).addClass('grey'));
			($($('td')[4]).addClass('grey'));
			($($('td')[8]).addClass('grey'));
		};
	// 8.O
		if( ($($('td')[6]).hasClass('clicked')  &&  $($('td')[6]).hasClass('o')) &&
				($($('td')[4]).hasClass('clicked')  &&  $($('td')[4]).hasClass('o')) &&
				($($('td')[2]).hasClass('clicked')  &&  $($('td')[2]).hasClass('o')) ){
			win=2;
			($($('td')[6]).addClass('grey'));
			($($('td')[4]).addClass('grey'));
			($($('td')[2]).addClass('grey'));
		};

// O Wins
		if (win == 2){
			alert('O WINS!');
			location.reload();
		};
	}; //End of checkForWinO

}); //end of document ready
