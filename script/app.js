
      fetch `https://www.themealdb.com/api/json/v1/1/search.php?s=potato`
        .then((response) => response.json())
        .then((data) => displayFood(data))

        const displayFood = (items) => {
            const itemsDiv = document.getElementById('food-item');

            const meal = items.meals;
          
            //loop for displaying each of search result
            meal.forEach((item) => {
              const itemDiv = document.createElement('div');
              itemDiv.className='d-flex justify-content-center col mt-4';
              const itemInfo = `
              <div class="card card-style" style="width: 18rem;">
              <img src='${item.strMealThumb}'>
              <div class="card-body">
                <p class="card-text text-center">${item.strMeal}</p>
              </div>
              <div class='text-center pb-3'>
              <button type="button" class="btn btn-primary" onclick="location.href='${item.strYoutube}';">Check Out</button>
              </div>
            </div>`;
              itemDiv.innerHTML = itemInfo;
              itemsDiv.appendChild(itemDiv);
            });
        }

        const hideFood=()=>{
          document.getElementById('food-item').style.display='none';
          document.getElementById('contact-form').style.display='block';
        }

        const showDetails=()=>{
          const getName=document.getElementById('name').value;
          const getGender=document.getElementById('gender').value;
          const getDate=document.getElementById('date').value;
          const getAddress=document.getElementById('address').value;
          const getPhone=document.getElementById('phone').value;
          const getEmail=document.getElementById('email').value;
          const getInquiry=document.getElementById('inquiry').value;
          const getDetails=document.getElementById('details').value;
          const getFoodRating=document.getElementById('food-rating').value;
          const getServiceRating=document.getElementById('service-rating').value;
          if(getName==''||getGender==''||getDate==''||getAddress==''||getPhone==''||getEmail==''||getInquiry==''||getDetails==''||getFoodRating==''||getServiceRating==''){
            document.getElementById('error-msg').innerText='Please fill up all the requirements carefully'
          }
          else{
            document.getElementById('error-msg').innerText='';
            document.getElementById('contact-form').style.display="none";
            document.getElementById('show-data').style.display='block';
            
            const detailsDiv=`
            <h3>Your Submitted Information</h3>
            <p>Name: ${getName}</p>
            <p>Gender: ${getGender}</p>
            <p>Date: ${getDate}</p>
            <p>Address: ${getAddress}</p>
            <p>Phone: ${getPhone}</p>
            <p>Email: ${getEmail}</p>
            <p>Inquiry About: ${getInquiry}</p>
            <p>Details: ${getDetails}</p>
            <p>Food Rating: ${getFoodRating}</p>
            <p>Service Rating: ${getServiceRating}</p>
            <button type="button" class="btn btn-primary" onclick='EditForm()'>Edit</button>
            `
            document.getElementById('show-data').innerHTML=detailsDiv;     
          }
        }

        const EditForm=()=>{
          document.getElementById('contact-form').style.display='block'
          document.getElementById('show-data').style.display='none';
        }

        const homeAction=()=>{
          document.getElementById('contact-form').innerHTML='';
        }