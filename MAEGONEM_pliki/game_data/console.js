function lead0(a){return(a.toString().length<2)?("0"+a):a}function timeNow(){var a=new Date();return lead0(a.getHours())+":"+lead0(a.getMinutes())+":"+lead0(a.getSeconds())}function log(){var b="";var c="["+timeNow()+"] ";var a=false;if(arguments.length>1){switch(parseInt(arguments[1])){case 1:b=c+"Warning: ";break;case 2:b=c+"Error: ";break;case 3:a=true;b=c+"Fatal error: ";break;default:b=c+"Unknow: "}}document.getElementById("consoleTxt").innerHTML+="<DIV"+(arguments.length>1?(" class=loglvl_"+arguments[1]):"")+">"+b+arguments[0]+(a?"<br>----------------------------<br>Jeśli nie możesz sobie poradzić z tym błędem czytaj FAQ.<br>----------------------------":"")+"</DIV>";var d=document.getElementById("con1");d.scrollTop=d.scrollHeight}function consoleParse(cmd){cmd=cmd.split(" ");switch(cmd[0]){case"help":log("Available commands: about, cls, cuser, debug, delete, dump, dup, equip, eval, glock, help, hide, locate, online, noclip, quests, send, show, teleport, ver");break;case"ver":log("Margonem MMORPG ver 1.0");break;case"about":log("Margonem MMORPG (c) by Thinker 2005-2008 [www.margonem.pl, oanemizguel@gmail.com]");break;case"cls":document.getElementById("consoleTxt").innerHTML="";break;case"cuser":log("UserID: "+hero.pid+", hash: "+hero.hash);break;case"send":dbget(cmd[1]);break;case"locate":dbget("locate","who="+cmd[1]);break;case"kick":dbget("kick","who="+cmd[1]);break;case"delete":dbget("idel","iname="+cmd[1]);break;case"teleport":dbget("teleport","nloc="+cmd[1]);break;case"eval":eval(cmd.join(" ").slice(5));break;case"dump":log("Dumping variable "+cmd[1]+"<BR>"+dump(eval(cmd[1])));break;case"show":show(cmd[1],false);break;case"hide":hide(cmd[1],false);break;case"glock":dbget("glock");break;case"debug":if(cmd[1]=="on"){global.debug=true}else{global.debug=false}break;case"dup":dbget("moveitem","stan=-3&iid="+cmd[1]);break;case"equip":el.list("equip");break;case"online":dbget("online");break;case"noclip":if(global.gm){hero.cmap=""}else{log("Go away bastard!",2)}break;case"quests":dbget("getquests","completed=1");break;case"":break;default:log("Unknow command '"+cmd+"'",2)}}function onConsoleWrite(a){if(!a){var a=window.event}var d=a.keyCode;if(d==13){var b=document.getElementById("consoleIn");consoleParse(b.value);b.value=""}}function dump(a,g){var f="";if(!g){g=0}if(g>3){return""}var e="";for(var b=0;b<g+1;b++){e+="&nbsp;&nbsp;"}if(typeof(a)=="object"){for(var c in a){var d=a[c];if(typeof(d)=="object"){f+=e+"'"+c+"' :<BR>";f+=dump(d,g+1)}else{f+=e+"'"+c+"' => \""+d+'"<BR>'}}}else{f="===>"+a+"<===("+typeof(a)+")"}return f};