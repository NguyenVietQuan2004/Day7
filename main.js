
var container = document.querySelector('.container'); 
var tags = ["html","css"]
const input = document.querySelector('input'); 
const footer__btn = document.querySelector('.footer__btn')


function render() {
    container.innerHTML = ""
    tags.forEach((element,index) => {
        container.innerHTML += ` 
            <div  class="course">
                 ${element}
                <i onclick = "removeCourse(${index})" class="fa-sharp fa-regular fa-circle-xmark" style="margin-left: 4px; cursor: pointer;"></i>
                </div>
             `  
    }
    )
        
        container.appendChild(input)
   
}
render()
handleCreateTags()

function handleCreateTags() {
    input.onkeydown = function (e) {
        if ( e.key == 'Enter') {
            const value = input.value
            addtags(value)
            render()
        }
        input.focus()
    }
}
function addtags (value) {
        tags.push(value);
}

function removeCourse (index) {
    tags.splice(index,1);
    render()

}
    footer__btn.onclick = function () {
        tags =[];
        render()
    }