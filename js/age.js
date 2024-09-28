function getAge(){
    var dob = new Date("02/14/2008")
    var month_diff = Date.now() - dob.getTime()
    var age_dt = new Date(month_diff)
    var year = age_dt.getUTCFullYear()
    var age = Math.abs(year - 1970)
    
    return age;
}

let ageElementId = window.weaver.constants["AgeElementId"]
let element = document.getElementById(ageElementId)
element.innerText = getAge()