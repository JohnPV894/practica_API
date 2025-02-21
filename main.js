"use strict";

$(document).ready(async function () {

      $(".mostrarTodos").click(function () { 
            console.log("mostrarTodos");
            $.ajax({//console.log(user.responseJSON.estudiantes);
                  type: "GET",
                  url: "https://apiexpressbackend.vercel.app/users/",
                  //data: "data",
                  //dataType: "dataType",
                  success: function (datos) {
                        //console.log(datos.message);
                        $(".contenedor-estudiantes").empty();
                        for (const key in datos.message) {
                              console.log(datos.message[key]);
                              $(".contenedor-estudiantes").append(`
                              <div class="profile-card">
                                    <div class="profile-photo"><img src="/img/user.png" alt=""></div>
                                    <div class="profile-info">
                                        <h2 class="profile-name">
                                        ${datos.message[key].nombre} ${datos.message[key].apellido}
                                        </h2>
                                        <p class="profile-phone">Teléfono:${datos.message[key].telefono}</p>
                                    </div>
                              </div>
                              `);
                        }
                        
                  }
            });
      });

      $(".mostrarPrimero").click(function () { 
            console.log("mostrarPrimero");
            
            $.ajax({
                  type: "GET",
                  url: "https://apiexpressbackend.vercel.app/users/Ana",
                  //data: "data",
                  //dataType: "dataType",
                  success: function (datos) {
                        console.log(datos);
                        $(".contenedor-estudiantes").empty();
                        $(".contenedor-estudiantes").append(`
                        <div class="profile-card">
                              <div class="profile-photo"><img src="/img/user.png" alt=""></div>
                              <div class="profile-info">
                                  <h2 class="profile-name">
                                  ${datos.message.nombre} ${datos.message.apellido}
                                  </h2>
                                  <p class="profile-phone">Teléfono:${datos.message.telefono}</p>
                              </div>
                        </div>

                        `);

                        
                  }
            });
            $("body").css("background", "blue");
      });

      $(".mostrarAlguno").click(function () { 
            console.log("mostrarAlguno");
            
            $.ajax({
                  type: "GET",
                  url: "https://apiexpressbackend.vercel.app/users/Sofía",
                  //data: "data",
                  //dataType: "dataType",
                  success: function (datos) {
                        console.log(datos);
                        
                  }
            });
            $("body").css("background", "blue");
      });
       
      //Barra de busqueda de estudiantes: 
      //Evento de busqueda "Enter"
      $(".mostrarBusqueda").on("keydown", function(event) {  //Stack https://stackoverflow.com/questions/979662/how-can-i-detect-pressing-enter-on-the-keyboard-using-jquery
            if (event.key === "Enter") { 
                  console.log("enter");
                  
                  //si esta vacio
                  if ( $(".mostrarBusqueda").val().trim()=="" ){
                        return;
                  }
                  let id_estudiante=$(".mostrarBusqueda").val();

                  //Hacer algun tipo de comprobacion de que esto es un numero 
                  
                  $.ajax({
                        type: "GET",
                        url: `https://apiexpressbackend.vercel.app/users/${id_estudiante}`,
                        //data: "data",
                        //dataType: "dataType",
                        success: function (datos) {
                              console.log(datos);
                              $(".contenedor-estudiantes").empty();
                              if (datos.message.id) {
                                    $(".contenedor-estudiantes").empty();
                                    $(".contenedor-estudiantes").append(`
                                    <div class="profile-card">
                                          <div class="profile-photo"><img src="/img/user.png" alt=""></div>
                                          <div class="profile-info">
                                              <h2 class="profile-name">
                                              ${datos.message.nombre} ${datos.message.apellido}
                                              </h2>
                                              <p class="profile-phone">Teléfono:${datos.message.telefono}</p>
                                          </div>
                                    </div>
            
                                    `);
                              }else{
                                    $(".contenedor-estudiantes").append(`<h1>${datos.message} <br>`);
                              }

                        }
                  });

                  $(".mostrarBusqueda").val("");//Vaciar input
            }
            
      });

      $(".agregarUno").click(function () { 
            $(".contenedor-modal").fadeIn();
            console.log("agregarUno");
            
            $.ajax({
                  type: "GET",
                  url: "https://apiexpressbackend.vercel.app/users/user1",
                  //data: "data",
                  //dataType: "dataType",
                  success: function (datos) {
                        console.log(datos);
                  }
            });

      });

      //Modal
      $(".Cancelar").click(function () { 
            $(".contenedor-modal").fadeOut();
            /*La propiedad fadeOut se utiliza para desvanecer gradualmente un elemento o imagen hasta llegar a negro o silencio*/
            
      });

      $(".Enviar").click(function () { 
            


            /*La propiedad fadeOut se utiliza para desvanecer gradualmente un elemento o imagen hasta llegar a negro o silencio*/
            $.ajax({
                  type: "POST",
                  url: `https://apiexpressbackend-jgpw1sz1u-john-fs-projects-6889adce.vercel.app/users/agregar/${$(".nombre").val()}/${$(".apellido").val()}/${$(".telefono").val()}`,
                  //data: "data",
                  //dataType: "dataType",
                  success: function (datos) {
                        console.log(datos);
                  }
            });
      });
})
