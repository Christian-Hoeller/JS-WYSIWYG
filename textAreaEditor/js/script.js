
//this works for textarea
function writeTextInEditor(element){
    var editor = document.getElementById("editor");
    var allText = editor.value;
    
    var selectedText;

    if (editor.selectionStart !== undefined)
    {
        var startPos = editor.selectionStart;
        var endPos = editor.selectionEnd;
        selectedText = editor.value.substring(startPos, endPos);
        
        var textBeforeSelection = allText.substring(0, startPos)
        var textAfterSelection = allText.substring(endPos, allText.length)
        var modifiedText;
        
        if(isSelectedTextInTags(element, selectedText)){

            var textWithoutElements = selectedText.substring(element.length + 2, selectedText.length-(element.length + 3));
            modifiedText = textBeforeSelection + textWithoutElements + textAfterSelection;
        }
        else{
            modifiedText = `${textBeforeSelection}<${element}>${selectedText}</${element}>${textAfterSelection}`
        }

        editor.value = modifiedText;
        editor.value.text.style.cssText = "font-weight: bold"
    }
}

function isSelectedTextInTags(element, selectedText){
    var startElement = selectedText.substring(0, element.length + 2);
    var endElement = selectedText.substring(selectedText.length - (element.length + 3), selectedText.length);

    //checks if the text starts and ends with the given element tag
    return (startElement == `<${element}>` && endElement == `</${element}>`);
}

function getAllTextFromEditor(){
    var editor = document.getElementById("editor");
    return editor.value;
}

function convertToHTML(){
    var allText = getAllTextFromEditor();
    var editorText = allText.replace(/(?:\r\n|\r|\n)/g, "<br>");
    writeOutput(editorText);
}

function writeOutput(htmlContent){
    var element = document.getElementById("output");
    element.innerHTML = htmlContent;
}

function textBold(){
    writeTextInEditor("b")
}

function textUnderline(){
    writeTextInEditor("u")
}

function textItalian(){
    writeTextInEditor("i")
}

function textStrike(){
    writeTextInEditor("s")
}

function textSmall(){
    writeTextInEditor("small")
}






