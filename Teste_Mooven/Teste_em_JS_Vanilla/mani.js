(function() {
  const search = document.getElementById("search");
  const profile = document.getElementById("profile");
  const url = "https://api.github.com/users";
  const client_id = "Iv1.7a834cdacceac6d8";
  const client_secret = "c46868e0501919ba3ee8bcf42899329c6587453b";

  async function getUser(user) {
    const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const profile = profileResponse.json();

    return profile;

  }

  function showProfile(user){
    profile.innerHTML = `<div class="row mt-3">
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${user.avatar_url}">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Repositórios: <span class=" badge-success">${user.public_repos}</span></li>
            <li class="list-group-item">Seguidores: <span class=" badge-primary">${user.followers}</span></li>
            <li class="list-group-item">Seguindo: <span class=" badge-info"></span>${user.following}</li>
          </ul>
          <div class="card-body">
            <a href="${user.htm_url}" target="_blank" class="btn btn-warning btn-block">Ver Perfil</a>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div id="repos"></div>
      </div>
      </div>`;
  }


  search.addEventListener("keyup", e => {
    const user = e.target.value;

    if(user.length > 0){
      getUser(user).then(res => showProfile(res));
    }

  });
})();