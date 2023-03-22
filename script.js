const userName = prompt("Mutqagreq dzer anun@?", " ");
 alert(userName)


function* millioner() {
    alert("Bari galust ov e uzum darnal milionater");
    let sum = 0;  
    let res = prompt(`Erb e stexcvel hayoc grer@
   a) 501  b) 401 c) 361  d) 1`)
    if (res === "b") {
        sum += 5000; alert(`duq shahel eq " ${sum} `)
    } else {
        return alert("duq partveciq")
    }
    yield   
    res = prompt(`Exishe...? 
    a) Charenc  b)Abovyan  c)Duryan  d)Sevak`)
    if (res === "a") {
        sum += 15000; alert(`duq shahel eq " ${sum}`)
    } else {
        return alert("duq partveciq")
    }
    yield    
    res = prompt(`Fransiayi mayraqaxaq@?
    a)Fransia  b)Paris c)Moskva d)Paris`)
    if (res === "b") {
        sum += 55000; alert(`duq shahel eq " ${sum} `)
    } else {
        return alert("duq partveciq")
    }
    yield    
    res = prompt(`Vorn e hayastan mayraqaxaq@ 
    a) Yerevan b)Minsk c)Moskva d)Paris`)
    if (res === "a") {
        sum += 75000;
        let com = confirm(`Duq shahel eq andzernamxeli " ${sum} "AMD ete cankanum eq sharunakel sexmec OK ete voch sexmec Cancel`)
        if (com === true) {
            alert("Shat lav sharunakum enq")
        } else {
            return alert(`duq vercreciq andzernamxeli gumar@" ${sum} "AMD xaxn avartvec`)
        }
    } else {
        return alert("duq partveciq")
    }
    yield    
    res = prompt(`Inchpes e kochvum inch,vortex, erb xaxi mrcanak@ 
    a)archiv  b)baze  c)aragil   d)byurexya bu`)
    if (res === "d") {
        sum += 95000; alert(`duq shahel eq " ${sum} `)
    } else {
        return alert("duq partveciq")
    }
    yield    
    res = prompt(`Uzbekstani arjuyt@ 
    a)lari  b)yuan  c)sum  d)funt sterling`)
    if (res === "c") {
        sum += 115000; alert(`duq shahel eq " ${sum} `)
    } else {
        return alert("duq partveciq")
    }
    yield    
    res = prompt(`Inch en hashvum ashnan@ 
    a) poxer@  b)pakocner@  c)chter@   d)matner@`)
    if (res === "c") {
        sum += 145000; alert(`duq shahel eq " ${sum}`)
    } else {
        return alert("duq partveciq")
    }
    yield   
    res = prompt(`Inch vitamin chka sexi mej 
    a)A   b)B  c)D  d)M`)
    if (res === "d") {
        sum += 175000; alert(`duq shahel eq " ${sum}AMD`) 
        let com = confirm(`Duq shahel eq andzernamxeli " ${sum} "AMD ete cankanum eq sharunakel sexmec OK ete voch sexmec Cancel`)      
        if (com === true) {
            alert("Shat lav sharunakum enq")
        } else {
            return alert(`duq vercreciq andzernamxeli gumar@ ${sum} AMD xaxn avartvec`)
        }
    }else {
        return alert("duq partveciq")
    }
    yield    
    res = prompt(`Inch en kangnum futbolistner@ tuganayin harvacic araj?
    a)pat  b)barikad  c)sanduxq  d)darpas`)
    if (res === "a") {
        sum += 185000; alert(`duq shahel eq " ${sum} `)
    } else {
        return alert("duq partveciq")
    }
    yield    
    res = prompt(`nshvacneric vor@ cragravorman lezu chi hamarvum? 
    a)HTML  b)Java  c)PHP  d)C++`)
    if (res === "a") {
        sum += 207000; alert(`duq shahel eq " ${sum}`)       
        if (com === true) {
            alert("Duq haxteciq")
        } else {
            return alert(`dzer vastakac gumar@  ${sum} AMD xaxn avartvec`)
        }
    } else {
        return alert("duq partveciq")
    }
    yield


}
let xax = millioner();
while (xax.next().done !== true) {
    xax.next()
}

