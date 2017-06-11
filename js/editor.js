
var showingSourceCode = false;
var isInEditMode = true;

function enableEditMode() {
	TextField.document.designMode = 'On';
}
function execCmd(command) {
	TextField.document.execCommand(command, false, null);
}
function execCommandWithArg(command,arg) {
	TextField.document.execCommand(command, false, arg);
}
function toggleSource(){
	if (showingSourceCode) {
		TextField.document.getElementsByTagName('body')[0].innerHTML = TextField.document.getElementsByTagName('body')[0].
		textContent;
		showingSourceCode = false;
	}else{
		TextField.document.getElementsByTagName('body')[0].textContent = TextField.document.getElementsByTagName('body')[0].
		innerHTML;
		showingSourceCode = true;
	};
}
function toggleEdit(){
	if (isInEditMode) {
		TextField.document.designMode = 'Off';
		isInEditMode = false;
	}else{
		TextField.document.designMode = 'On';
		isInEditMode = true;
	};
}
function submit_form(){
	var theForm = document.getElementById("wysiwyg");
	theForm.elements['textarea'].value = window.frame['TextField'].document.body.innerHTML;
	theForm.submit();
	//console.log(theForm);
}
