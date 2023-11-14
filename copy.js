function copy(){
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', "sanlian114514{$rthSuffix}的主人泰裤辣!");
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
	alert("看看你的剪贴板!")
}