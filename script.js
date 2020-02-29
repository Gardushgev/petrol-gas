$(document).ready(function(){
    
  var metan = 9354,
      
      propan = 6100,
      
      benzin = 7718,
      
      rasxod_benz,
          
      index_met_benz = metan/benzin,
      
      index_prop_benz = propan/benzin;
      cenagaza1m3 = 190;
      
      rasxod_met_100km = rasxod_benz/index_met_benz;
    
      rasxod_prop_100km = rasxod_benz/index_prop_benz;
    
    

      
    
   $("#but").click(function(){
       $( "#rasxm" ).html('rasxod metana m3/100km: ' + ($("#test").val()/(index_met_benz)).toPrecision(2));       
       $( "#rasxpoxm" ).html('dram/100km: ' + Math.round(($("#test").val()/(index_met_benz))*($("#cena1m3").val())));
       $( "#rasx1m3" ).html('km/1m3: ' + (100/($("#test").val()/(index_met_benz))).toPrecision(3));
       $( "#polnaya" ).html('polnaya zapravka pri otmasfere 250: ' + ((($("#test1").val())*50)/4).toPrecision(4) + 'm3');
       $( "#polnayadr" ).html('cena pri polnoy zapravki: ' + Math.round(((($("#test1").val())*50)/4)*($("#cena1m3").val())) + 'dram');
       $( "#polnayakm" ).html('probeg pri polnoy zapravki: ' + Math.round(((($("#test1").val())*50)/4)*(100/($("#test").val()/(index_met_benz)))) + 'km');
       $( "#km1000dr" ).html('km na 1000dram: ' + Math.round((1000/($("#cena1m3").val()))*(100/($("#test").val()/(index_met_benz)))) + 'km');
       
    
  });
    
   
    
    
    
    
    
    
    
    
    
    
   
});