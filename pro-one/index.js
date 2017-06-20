/**
 * Created by Myron on 2017/6/20.
 */
window.onload = function () {
    var btn = document.getElementById("btnEvent");
    btn.onclick = function (e) {
        var e = e || window.event
        var className="";
        var parents = null;
        if(e.target.tagName == "BUTTON"){
            className = e.target.children[0].className;
            parents = e.target.parentNode;
        }else if(e.target.tagName == "SPAN" ){
            className = e.target.className;
            parents = e.target.parentNode.parentNode;
        }
        if(document.querySelector("#id")){
            removeElement(document.querySelector("#id"))
        }
        newDiv(className,parents)
    }

    function newDiv(str,divParent) {
        var div = document.createElement("div");
        div.id = "id";
        var parents = divParent;
        div.innerHTML = str;
        parents.appendChild(div);
    }

    function removeElement(_element){
        var _parentElement = _element.parentNode;
        if(_parentElement){
            _parentElement.removeChild(_element);
        }
    }
}

