function filterNames(){
    var filterText, ul, liList, a;

    filterText = document.getElementById('myInput').value.toLowerCase();
    ul = document.getElementById('myUl');
    liList = document.getElementsByTagName('li');

    for ( let i = 0; i< liList.length; i++ ){
        a = liList[i].getElementsByTagName('a')[0];
        // let txtValue = a.innerText; ikisi ile de çalışır
        let txtValue = a.textContent.toLowerCase();
        // console.log(txtValue);
        // console.log(filterText);

        // console.log(txtValue.indexOf(filterText));

        if( txtValue.indexOf(filterText) > -1 ){
            liList[i].style.display = '';
        }else{
            liList[i].style.display = 'none';
        }
    }
}