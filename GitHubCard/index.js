/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/Minaramzey")
  .then(res => {
    // console.log(res.data);
    cardMaker(res.data);
  })
  .catch(error => {
    // handle error
    console.error(error);
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


// axios.get('https://api.github.com/users/Minaramzey') 
// .then(response => {
//   console.log(response);
//   const entryPoint = document.querySelector(".cards");
//   console.log(entryPoint);
//   entryPoint.appendChild(gitUser(response));
// })
// .catch(error => {
//   console.log("data not returned", error);
// });


const followersArray = [
    'Minaramzey',
    'CScori',
   'SyriiAdvent',
   'ajablanco',
   'kkslider2130',
   'jscheuble'
   
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)

      .then(response => {
          console.log(response);
          const entryPoint = document.querySelector(".cards");
          console.log(entryPoint);
          entryPoint.appendChild(gitUser(response));
      })
      .catch(error => {
          console.log("data not returned", error);
      });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

   

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const gitUser = response => {
  let newCard = document.createElement("div");

  let image = document.createElement("img");
  
  let cardInfo = document.createElement("div");
  let name = document.createElement("h3");
  let userName = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let url = document.createElement("a");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");

  let contribution = document.createElement("div");




  //append my child
  newCard.classList.add("card");
  image.setAttribute("src", response.data.avatar_url);
  newCard.appendChild(image);
  cardInfo.classList.add("card-info");
  newCard.appendChild(cardInfo);
  name.textContent = response.data.name;
  name.classList.add("name");
  cardInfo.appendChild(name);
  userName.textContent = response.data.login;
  userName.classList.add("username");
  cardInfo.appendChild(userName);
  location.textContent = `Location:  ${response.data.location}`;
  cardInfo.appendChild(location);
  profile.textContent = "Profile:  ";
  cardInfo.appendChild(profile);
  url.textContent = `${response.data.html_url}`;
  url.setAttribute("href", response.data.html_url);
  url.setAttribute("target", "_blank");
  profile.appendChild(url);
  followers.textContent = `Followers: ${response.data.followers}`;
  cardInfo.appendChild(followers);
  following.textContent = `Following: ${response.data.following}`;
  cardInfo.appendChild(following);
  bio.textContent = `Bio: ${response.data.bio}`;
  cardInfo.appendChild(bio);
  contribution.classList.add("calendar");
  

  GitHubCalendar(contribution, response.login, {responsive:true});
  
  document.querySelector('.cards').appendChild(newCard);
  return newCard;
};
  


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
