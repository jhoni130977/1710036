function mahasiswa() {
    $('#kett').html(`
	  <div class="container d-flex justify-content-center">
		<div class="spinner-border text-danger" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	  </div>
		`);
	
	$.ajax({
        //url: 'https://smk-smeatdkosgoro2pdg.sch.id/lulusapikgr/lulus.php',
		url: 'https://smk-smeatdkosgoro2pdg.sch.id/ARN/lulus.php',
        type: 'get',
        dataType: 'json',
		//responseType:'application/json',
        data: {
            'id' : $('#mhs-input').val()
        },
        success: function(result){
				console.log(result);

			if(result.status == "sukses"){
				$('#movie-list').html('');
                let movies = result.data;
                $.each(movies, function(i, data){
					console.log(result.status);	
					 $('#kett').html('');
					 $('#ket').html(`<table border=0 width=100%><tr><td height=60><center><b>MAHASISWA</td></tr></table>`);
					 $('#hdr').html(`<table border=1 width=100%><tr>
						 <th width=10%><center>No</th>
						 <th><center>Keterangan</th>
						 </tr></table>`);
						
						$('#movie-list').append(`						    
								<table border=1 width=100%><tr>
								<td width=10%><center>` + data.nom + `</td><td>
								<table border=0 width=100%>
									<tr><td width=30%>No. BP </td><td>:<b> ` + data.no + `</td></tr>
									<tr><td>Nama </td><td>:<b> ` + data.nama + `</td></tr>
									<tr><td>Prodi </td><td>:<b> ` + data.prodi + `</td></tr>
									<tr><td>Email </td><td>:<b> ` + data.email + `</td></tr>
								</table>
								</td></tr>
								</table>
								
							</div>
                    `) 
                });
				
                $('#search-input').val('');

            }
        }
    });
}

function dosen() {
    $('#kett').html(`
	  <div class="container d-flex justify-content-center">
		<div class="spinner-border text-danger" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	  </div>
		`);
    $.ajax({
        //url: 'https://smk-smeatdkosgoro2pdg.sch.id/lulusapikgr/lulus.php',
		url: 'https://smk-smeatdkosgoro2pdg.sch.id/ARN/lulus.php',
        type: 'get',
        dataType: 'json',
		//responseType:'application/json',
        data: {
            'id' : $('#dsn-input').val()
        },
        success: function(result){
				console.log(result);

			if(result.status == "sukses"){
				$('#movie-list').html('');
                let movies = result.data;
                $.each(movies, function(i, data){
					console.log(result.status);	
					$('#kett').html('');
					$('#ket').html(`<table border=0 width=100%><tr><td height=60><center><b>DOSEN</td></tr></table>`);
					$('#hdr').html(`<table border=1 width=100%><tr>
						 <th width=10%><center>No</th>
						 <th><center>Keterangan</th>
						 </tr></table>`);
						$('#movie-list').append(`
								<table border=1 width=100%><tr>
								<td width=10%><center>` + data.nom + `</td><td>
								<table border=0 width=100%>
									<tr><td width=30%>ID Dosen </td><td>:<b> ` + data.no + `</td></tr>
									<tr><td>Nama </td><td>:<b> ` + data.nama + `</td></tr>
									<tr><td>Telp. </td><td>:<b> ` + data.telp + `</td></tr>
									<tr><td>Email </td><td>:<b> ` + data.email + `</td></tr>
								</table>
								</td></tr>
								</table>
								
							</div>
                    `) 
                });

                $('#search-input').val('');

            }
        }
    });
}

function matkul() {
    $('#kett').html(`
	  <div class="container d-flex justify-content-center">
		<div class="spinner-border text-danger" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	  </div>
		`);
    $.ajax({
        //url: 'https://smk-smeatdkosgoro2pdg.sch.id/lulusapikgr/lulus.php',
		url: 'https://smk-smeatdkosgoro2pdg.sch.id/ARN/lulus.php',
        type: 'get',
        dataType: 'json',
		//responseType:'application/json',
        data: {
            'id' : $('#mk-input').val()
        },
        success: function(result){
				console.log(result);

			if(result.status == "sukses"){
				$('#movie-list').html('');
                let movies = result.data;
                $.each(movies, function(i, data){
					console.log(result.status);	
					$('#kett').html('');
					$('#ket').html(`<table border=0 width=100%><tr><td height=60><center><b>MATA KULIAH</td></tr></table>`);
					$('#hdr').html(`<table border=1 width=100%><tr>
						 <th width=10%><center>No</th>
						 <th><center>Keterangan</th>
						 </tr></table>`);
						$('#movie-list').append(`
								<table border=1 width=100%><tr>
								<td width=10%><center>` + data.nom + `</td><td>
								<table border=0 width=100%>
									<tr><td width=30%>ID MatKul</td><td>:<b> ` + data.no + `</td></tr>
									<tr><td>Nama </td><td>:<b> ` + data.nama + `</td></tr>
									<tr><td>SKS </td><td>:<b> ` + data.sks + `</td></tr>
									</table>
								</td></tr>
								</table>
								
							</div>
                    `) 
                });

                $('#search-input').val('');

            }
        }
    });
}

$('#mhs-button').on('click', function(){
	//search1(); 
    mahasiswa(); 
	//document.getElementById("ket").innerHTML= "<center>Mahasiswa";
});

$('#dsn-button').on('click', function(){
	//search1(); 
    dosen();    
});

$('#mk-button').on('click', function(){
	//search1(); 
    matkul();   
	
});

//$(document).ready(function(){
//$(window).load(function() {
  // Run code
mahasiswa(); 
    
//});
//}