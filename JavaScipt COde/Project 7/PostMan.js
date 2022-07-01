console.log('POstMAn PROject')
let index = 0

function getElementFromString(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div.firstElementChild
}
let parameterBox = document.getElementById('parametersBox')
let JsonBox = document.getElementById('requestJsonBox')
parameterBox.style.display = 'none'
paramsRadio = document.getElementById('customParameter')
paramsRadio.addEventListener('click', () => {
    parameterBox.style.display = 'block'
    JsonBox.style.display = 'none'
})
JsonRadio = document.getElementById('Json')
JsonRadio.addEventListener('click', () => {
    parameterBox.style.display = 'none'
    JsonBox.style.display = 'block'
})



let addparam = document.getElementById('addParam')
addparam.addEventListener('click', () => {
    let param = document.getElementById('params')
    let str = `<div class="row mt-3">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${index + 2}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterKey${index + 2}" placeholder="Enter Parameter ${index + 2} Key">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue${index + 2}" placeholder="Enter Parameter ${index + 2} Value">
    </div>
    <button id="subParam" class="btn btn-primary col-md-1 ">-</button>
</div>`
    index++;
    paramelem = getElementFromString(str)
    param.appendChild(paramelem)
    console.log(paramelem)
    //delete paraelem
    // let subParam = document.getElementById('subParam')
    // console.log(subParam)
    // let deleteParam = document.getElementById('subParam');
    // for (item in deleteParam) {
    //     items=deleteParam[item]
    //     items.addEventListener('click', (e) => {
    //         e.target.parentElement.remove();
    //     })
    // }
})

let submit = document.getElementById('submit')
submit.addEventListener('click', () => {
    let ContentType = document.querySelector("input[name='contentType']:checked").value
    let requestType = document.querySelector("input[name='requestType']:checked").value
    console.log(ContentType)
    document.getElementById('responseJsonText').innerHTML = 'Wait ! You result is processing...'
    if (ContentType === 'Json') {
        let data = document.getElementById('requestJsonText').value
        console.log(data)
    }
    else if (ContentType === 'Custom Parameter') {
        data = {}
        for (let i = 0; i < index + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                ParamKey = document.getElementById('parameterKey' + (i + 1)).value
                console.log(ParamKey)
                ParamValue = document.getElementById('parameterValue' + (i + 1)).value
                console.log(ParamValue)
                data[ParamKey] = ParamValue
            }
        }
        data = JSON.stringify(data)
        console.log(data)
        console.log('hello')
    }
})



