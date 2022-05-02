export const dragStart=(element)=> {
   element.dataTransfer.setData('text', element.target.id);
 }

export const dragEnter=(element)=> {
    element.preventDefault();
    element.target.classList.add('drag-over');

}

export const dragOver=(element)=> {
    element.preventDefault();
    element.target.classList.add('drag-over');
}

export const dragLeave=(element)=> {
    element.target.classList.remove('drag-over');
}

export const drop=(element)=> {
    element.preventDefault();
    let dragindex
    element.target.classList.remove('drag-over')
    let clone=element.target.cloneNode(true);
    let data=element.dataTransfer.getData("text");
    let parent=element.target.parentElement
    if(clone.id !== data) {
        let nodelist=parent.childNodes;
        for(let i=0;i<nodelist.length;i++){
        if(nodelist[i].id===data){
        dragindex=i;
    }
    }
        parent.replaceChild(document.getElementById(data),element.target);
        parent.insertBefore(clone,parent.childNodes[dragindex]);
        parent.childNodes.forEach((element, index) => { element.id = index+1; });
        parent.childNodes.forEach(element=>{
            element.addEventListener("dragstart", dragStart)
          })
    }
}