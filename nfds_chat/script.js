function incoming_msg(content, time){
  var msg = '<div class="incoming_msg"><div class="incoming_msg_img"> <img src="https://static1.squarespace.com/static/5571bad4e4b08f8afa3e5544/55cd9755e4b0af9801de21eb/55cd9760e4b0af9801de220f/1452724809796/icon1.png?format=2500w" alt="sunil"></div><div class="received_msg"><div class="received_withd_msg"><p>' + content + '</p><span class="time_date">' + time + '</span></div></div></div>';
  $(".msg_history").append(msg);
  $(".msg_history").scrollTop($(".msg_history").prop("scrollHeight"));
}

function outgoing_msg(content, time){
  var msg = '<div class="outgoing_msg"><div class="sent_msg"><p>' + content + '</p><span class="time_date">' + time + '</span></div></div>';
  $(".msg_history").append(msg);
  $(".msg_history").scrollTop($(".msg_history").prop("scrollHeight"));
}

function load_message(){
  $(".msg_history").empty();
  var items = ["こんにちは〜", "お疲れ様です。","昨日の件ですが、<br/>いかがでしょうか？"]
  var dummy_data = [
    ["incoming", items[Math.floor(Math.random()*items.length)], "昨日"],
    ["outgoing", items[Math.floor(Math.random()*items.length)], "2時間前"]
  ]

  $.each(dummy_data, function(i, e) {
    if (e[0] == "incoming") {
      incoming_msg(e[1], e[2]);
    } else {
      outgoing_msg(e[1], e[2]);
    }
  });
}

$(function(){
  setTimeout(load_message, 1000);

  $(".chat_list").click(function(){
    $(".chat_list").removeClass("active_chat");
    $(".msg_history").empty().append('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>');
    setTimeout(load_message, 1000);
    $(this).addClass("active_chat");
  });

  $(".write_msg").keypress(function(e){
    if ($(this).val() != "" && e.keyCode == 13) {
      if (!e.shiftKey) {
        outgoing_msg($(this).val().replace(/\n/g, "<br/>"), "たった今");
        $(this).val("");
        e.preventDefault();
      }
    }
  });
});
