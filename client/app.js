$(document).ready(() => {
    $.get("/api/chirps/", (chirps) => {
        delete chirps.nextid
        const writeArr = object.entries(chirps);
        writeArr.reverse();
        writeArr.forEach(chirp => {
            $("#chirp-container").append(
                `
               <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${chirp[1].username}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">${chirp[1].message}</p>
                  <img onclick="deleteChirp(${chirps[0]})" class ="close-btn" src ="https://lh3.googleusercontent.com/proxy/UJWuTwqIQwjO_zXdNQ1e5ptsr13fpE_SD_r0FzD9bCxC7IY1pxtuDqu91Cq1NBGT5acko-1v0ULtmb1PJmoSacryaaupIBAYHfCcCTBYOhwCAWm_Ej6arsbZESN1QBdqsjjKU5O0Wz0"></image>
                  <img onclick=""  data-toggle="modal" data-target="#modal${chirp[0]}" class ="edit-btn" src ="https://image.flaticon.com/icons/png/512/61/61456.png"></image>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">${chirp[1].username}</h5>
                                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                                <div class="modal-body">
                                                     <textarea id="edit-chirp-message">${chirp[1].message}</textarea>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button onclick="editChirp(${chirp[0]}, '{username:${chirp[1].username}' , message: $("#edit-chirp-message").val();})" type="button" class="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>
              `
            )
        });
    })
})


const submitChirp = () => {
    const username = $("#username").val(),
        message = $("#message").val(),
        data = {
            username: username,
            message: message
        }
    $.ajax("/api/chirps/", {
        data: JSON.stringify(data),
        method: "post",
        contentType: "application/json"
    })
}


const deleteChirp = id => $.ajax(`/api/chirps/${id}`, { method: "delete" });


const editChirp = (id, user, message) => {
    const chirpObj = {
        username: user,
        message: message
    }
    $.ajax(`/api/chirps/${id}`, {
        data: JSON.stringify(chirpObj),
        method: "put",
        contentType: "application/json"
    })
}