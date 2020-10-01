
document.addEventListener('DOMContentLoaded',() => {

	var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
	let channel=document.querySelector('#presentch').innerHTML;
	let dname=document.querySelector('#name').innerHTML;
	socket.on('connect', ()=>{
    channel=document.querySelector('#presentch').innerHTML;
	dname=document.querySelector('#name').innerHTML;	
	socket.emit('join',{'user': dname,'channel':{'ch':channel,'key': "yvh8273vrhtd^&"}});
	console.log('Connected');
	});
	  
      socket.on('recieved msg',(data)=>{
		channel= document.querySelector('#presentch').innerHTML;
		dname = document.querySelector('#name').innerHTML;
		if(data.channel==channel){  
			const p=document.createElement('p');  
			p.innerHTML=`${data.user}: ${data.msg}`;
			const t=document.createElement('p');
			t.innerHTML=`${data.time}`;
			const div = document.createElement('div'); 
			div.append(p);
			div.append(t);			
			div.setAttribute("class","p-3 m-3");
			if(dname == data.user){
			    div.setAttribute("style","border; border-radius:10px; background-color: rgb(150, 230, 236);");
			}
			else{
				div.setAttribute("style","border; border-radius:10px; background-color: rgb(150, 236, 169); ");
			}
			document.querySelector('#chat').append(div);
			
		}
	}); 
		document.querySelector('#sendmsg').onclick=function(){
			console.log("Message sent");
		    dname = document.querySelector('#name').innerHTML;	
			var msg = document.querySelector('#message').value; 
			channel= document.querySelector('#presentch').innerHTML;
			socket.emit('send msg',{'user': dname,'msg': msg, 'channel': channel});
			console.log("Message emmited");
			document.querySelector('#message').value="";
		}
		
		document.querySelector('#create').onclick =function(){
			var ch= prompt('Enter Channel Name:','');
			let channels=[];
			document.querySelectorAll('.select-room').forEach(p=>{
				channels.push(p.innerHTML);
				
			});
			console.log(channels);
			if(channels.includes(ch)== true){
				alert("Channel Already exists");
                ch= prompt('Enter Channel Name:','');
			}
			console.log(ch);
			if(ch != null && ch!=""){
				var key= prompt('Enter Channel Key:','');
				socket.emit('channel created',{'ch': ch, 'key': key});
			}
		}
        document.querySelectorAll('.select-room').forEach( p => {
            p.onclick= () => {
			if (p.innerHTML== "General" || p.innerHTML == document.querySelector('#presentch').innerHTML){
				var key="yvh8273vrhtd^&";
			}	
			else{
				var key = prompt('Enter Channel Key','');
			}
			console.log("Success101");				
			let ch = p.innerHTML;
			channel={'ch':ch,'key':key};
			dname = document.querySelector('#name').innerHTML;
			socket.emit('join',{'user': dname,'channel':channel});
			}
		});

		socket.on('channel recieved',(data)=>{
			console.log("channel received");
			const div = document.createElement('div');
			for(var i=0;i<data.channels.length;i++){
			const p= document.createElement('p');
			p.innerHTML= `${data.channels[i].ch}` ;
			p.setAttribute("class","select-room btn btn-otline-info btn-block");
			div.append(p);
			}
			document.querySelector('#channels').innerHTML=div.innerHTML;
			dname = document.querySelector('#name').innerHTML;
			channel= document.querySelector('#presentch').innerHTML;
			socket.emit('logout_reload',{'dname': dname,'channel':channel});
			location.reload();

		});
		socket.on('joined',data => {
		    dname = document.querySelector('#name').innerHTML;
		    document.querySelector('#presentch').innerHTML=`${data.data.channel.ch}`;
		    var select_msgs = [];
		    var div_ = document.createElement('div');
		    document.querySelector('#chat').innerHTML="";
		    for(var i=0;i<data.msgs.length;i++){
			    if(data.msgs[0].channel == data.data.channel.ch){
			    	const div =document.createElement('div');
					const p = document.createElement('p');
					p.innerHTML=`${data.msgs[i].user}: ${data.msgs[i].msg}`;
					const t=document.createElement('p');
					t.innerHTML=`${data.msgs[i].time}`;
					div.append(p);
					div.append(t);
					div.setAttribute("class","p-3 m-3");
					if(dname == `${data.msgs[i].user}`){
						div.setAttribute("style","border; border-radius:10px; background-color: rgb(150, 230, 236);");
					}
					else{
						div.setAttribute("style","border; border-radius:10px; background-color: rgb(150, 236, 169);");
					}				
					div_.append(div);
				}
		  }
		  document.querySelector('#chat').append(div_);
		});
		document.querySelector('#ch-head').onclick = ()=>{
        location.reload();
		}

		document.querySelector('#logout').onclick = () => {
			dname = document.querySelector('#name').innerHTML;
			channel= document.querySelector('#presentch').innerHTML;
			socket.emit('logout_reload',{'dname': dname,'channel':channel});
		}


});
