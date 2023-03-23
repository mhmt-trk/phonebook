var personList =[
    { name: 'Ahmet Ak', Phone: '123556'},
    { name: 'Ali Gök', Phone: '123556'},
    { name: 'Beren A', Phone: '123556'},
    { name: 'Cemil Ak', Phone: '123556'},
    { name: 'Ceren Ak', Phone: '123556'},
    { name: 'Kezban Ak', Phone: '123556'},
    { name: 'Emine Ak', Phone: '123556'},
    { name: 'Semih Ak', Phone: '123556'},
    { name: 'Erdem Ak', Phone: '123556'},
    { name: 'Şeyda Ak', Phone: '123556'},
    { name: 'Berat Ak', Phone: '123556'},
    { name: 'Umut Ak', Phone: '123556'},
    { name: 'Fatma Ak', Phone: '123556'},
    { name: 'Mehmet Ak', Phone: '123556'},
    { name: 'Ayşe Ak', Phone: '123556'},
];

var filterText, ul, liList, a;

filterText = document.getElementById('myInput').value.toLowerCase();
ul = document.getElementById('myUl');
liList = document.getElementsByTagName('li');

personList.forEach( person => {
    // console.log(person.name);
    // console.log(person.phone);
    // <!-- <li><a href="#"> Ali</a></li> -->

    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    // let newNode = document.createTextNode(person.name + '' + person.phone);
    let newNode = document.createTextNode(person.name);
    newA.appendChild(newNode);
    newLi.appendChild(newA);
    ul.appendChild(newLi);
})




function filterNames(){

    filterText = document.getElementById('myInput').value.toLowerCase();
  

    // for ( let i = 0; i< liList.length; i++ ){
    //     a = liList[i].getElementsByTagName('a')[0];
    //     // let txtValue = a.innerText; ikisi ile de çalışır
    //     let txtValue = a.textContent.toLowerCase();
    //     // console.log(txtValue);
    //     // console.log(filterText);

    //     // console.log(txtValue.indexOf(filterText));

    //     if( txtValue.indexOf(filterText) > -1 ){
    //         liList[i].style.display = '';
    //     }else{
    //         liList[i].style.display = 'none';
    //     }
    // }

    while( liList.length > 0){
        liList[0].remove();
    }

    personList.map(person => {
        if(person.name.toLowerCase().includes(filterText)){
            let newLi = document.createElement('li');
            let newA = document.createElement('a');
            let newNode = document.createTextNode(person.name);
            newA.appendChild(newNode);
            newLi.appendChild(newA);
            ul.appendChild(newLi);
        }
    })
}