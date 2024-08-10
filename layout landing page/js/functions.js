$(function () {
  $(".flex.center").click(function () {
    $(".header:last-of-type div .inline-block")
      .slideToggle()
      .css("display", "inline-block");

    setTimeout(() => {
      $(".header:last-of-type div .inline-block").slideToggle();
    }, 4000);
  });

  //Quando Clicar no botao, ele redireciona a mensagem pro whatsapp
  $(".submit").click(() => {
      let nome = $('.nome').val();
      let dia = $(".dia").val();
      let descricao = $('.descricao').val()

    if (dia.length == 0){
      alert("Campo Invalido")
      $(".mainright input").css('border','3px solid red')
    } else if (nome.length == 0){
      alert("Campo Invalido!")
      $(".mainright input").css('border','3px solid red')
    } else if (descricao.length == 0){
      alert("Campo Invalido!")
      $(".mainright input").css('border','3px solid red')
    } else {
      $(".mainright input").css('border','2px solid green')
      // Comando pra Enviar a mensagem diretamente pro whatsapp web
      window.location.href= `https://api.whatsapp.com/send/?phone=98985385018&text=Olá, meu nome é ${nome.toUpperCase()}, desejo reservar a Arena Jesus no Dia: ${dia}, Descriçao: ${descricao}&type=phone_number&app_absent=0`;
     }
  })

  /* // MUDAR TITULO A CADA 3s
  setInterval(() => {

    setTimeout(() => {
      $("title").html("Landing");
    }, 1000);

    setTimeout(() => {
      $("title").html("LAndinG");
    }, 2000);

    setTimeout(() => {
      $("title").html("LAndiNG");
    }, 3000);

    setTimeout(() => {
      $("title").html("LANdiNG");
    }, 4000);

    setTimeout(() => {
      $("title").html("LANdING");
    }, 5000);

    setTimeout(() => {
      $("title").html("LANDING");
    }, 5000);

    setTimeout(() => {
      $("title").html("LANDING");
    }, 6000);

    setTimeout(() => {
      $("title").html("");
    }, 7000);

    setTimeout(() => {
      $("title").html("P");
    }, 8000);

    setTimeout(() => {
      $("title").html("PA");
    }, 9000);

    setTimeout(() => {
      $("title").html("PAG");
    }, 10000);

    setTimeout(() => {
      $("title").html("PAGE");
    }, 11000);
  }, 1000, 12000); */

});
