// write your code here
// write your code here
/*  NEED TO DO
-render all images
-display img inside #ramen-menu
-click on img and see all info in #ramen-detail
-create new ramen after inserting*/
/* HOW TO DO
-on page load render(images)
-when clicked info is displayed
*/


function renderRamenImg(){
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(element => {
            const ramenImg = document.createElement('img');
             ramenImg.src = element["image"]
            ramenImg.alt = element["name"] 
            ramenImg.id = element['id']
            ramenImg.addEventListener('click', function(){
                // document.getElementsByClassName('detail-image').src = ramenImg.src;
               let detailImage= document.getElementById('ramen-detail').getElementsByClassName('detail-image')[0]['currentSrc']
               //detailImage.setAttribute('id', 'detail-image')
               //document.getElementById('detail-image')
               //detailName.innerHTML = ramenImg.alt
               document.getElementById('ramen-detail').getElementsByClassName('detail-image')[0]['currentSrc'] = ramenImg.src
            //    detailImage.src = ramenImg.src
            
                console.log(detailImage)
               

            })
            document.getElementById('ramen-menu').append(ramenImg)}
            )
        });

}
renderRamenImg()
