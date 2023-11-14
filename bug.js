function copy(){
    console.log("彩蛋!")
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', "你干嘛~哎呦!");
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
	alert("看看你的剪贴板!")
}
