let wheel_front = document.querySelector('.wheel_front')
let wheel_end = document.querySelector('.wheel_end')
let size_btn_top = document.querySelector('.wheel_size_btns .top_btn')
let size_btn_bottom = document.querySelector('.wheel_size_btns .bottom_btn')
let wheel_size = document.querySelector('.wheel_size_text .bottom_h2')
let car = document.querySelector('.car')

size_btn_top.onclick = () => {
    wheel_front.setAttribute('src', './img/tesla_wheel_19.png')
    wheel_end.setAttribute('src', './img/tesla_wheel_19.png')
    wheel_size.innerHTML = "19"
}

size_btn_bottom.onclick = () => {
    wheel_front.setAttribute('src', './img/tesla_wheel_17.png')
    wheel_end.setAttribute('src', './img/tesla_wheel_17.png')
    wheel_size.innerHTML = "17"
}



let degree_top_btn = document.querySelector('.cel_deg_btns .top_btn')
let degree_bottom_btn = document.querySelector('.cel_deg_btns .bottom_btn')
let air_con = document.querySelector('.air_con .bottom_p')
let deg_show = document.querySelector('.cel_deg .bottom_h2')
let moving_btn = document.querySelector('.air_con .button_bg')
let inner_btn = document.querySelector('.air_con .button')
let number = 20

degree_top_btn.onclick = () => {
    number++
    deg_show.innerHTML = number + "°"
    if (number > 15) {
        air_con.innerHTML = "Кондиционер"
    }
}

degree_bottom_btn.onclick = () => {
    number--
    deg_show.innerHTML = number + "°"
    if (number <= 15) {
        air_con.innerHTML = "Печка"
    }
}

moving_btn.onclick = () => {
    inner_btn.style.marginLeft = '20px'
    moving_btn.style.backgroundColor = 'blue'
}

moving_btn.ondblclick = () => {
    inner_btn.style.marginLeft = '3px'
    moving_btn.style.backgroundColor = 'gray'
}



let km_h = document.querySelector('.km_h_text .bottom_h2')
let km_h_btn_top = document.querySelector('.km_h_btns .top_btn')
let km_h_btn_bottom = document.querySelector('.km_h_btns .bottom_btn')
let total_km = document.querySelector('.total_km .top_h1')
let number_2 = 60
let number_3 = 750

km_h_btn_top.onclick = () => {
    if (number_2 < 80) {
        number_2 += 5
        number_3 -= 10
        km_h.innerHTML = number_2 + " км/ч"
        total_km.innerHTML = number_3 + "км"
    }
}

km_h_btn_bottom.onclick = () => {
    if (number_2 > 20) {
        number_2 -= 5
        number_3 += 10
        km_h.innerHTML = number_2 + " км/ч"
        total_km.innerHTML = number_3 + "км"
    }
}



let car_view = document.querySelector('.car_view .bottom_p')
let car_view_btn_bg = document.querySelector('.car_view .button_bg')
let car_view_btn = document.querySelector('.car_view .button')
let black = document.querySelector('.black')
let milky = document.querySelector('.milky')
let white = document.querySelector('.white')
let inside_colors = document.querySelector('.inside_colors')
let hr = document.querySelector('.hr')

car_view_btn_bg.onclick = () => {
    car_view_btn.style.marginLeft = '20px'
    car_view_btn_bg.style.backgroundColor = 'blue'
    car.setAttribute('src', './img/tesla.jpg')
    car.style.width = "1200px"
    car.style.height = "470px"
    wheel_front.style.display = "flex"
    wheel_end.style.display = "flex"
    inside_colors.style.display = "none"
    hr.style.display = "none"
}

car_view_btn_bg.ondblclick = () => {
    car_view_btn.style.marginLeft = '3px'
    car_view_btn_bg.style.backgroundColor = 'gray'
    car.setAttribute('src', './img/black.png')
    car.style.width = "1200px"
    car.style.height = "470px"
    wheel_front.style.display = "none"
    wheel_end.style.display = "none"
    inside_colors.style.display = "flex"
    hr.style.display = "flex"
}

black.onclick = () => {
    car.setAttribute('src', './img/black.png')
    car.style.width = "1200px"
    car.style.height = "470px"
    wheel_front.style.display = "none"
    wheel_end.style.display = "none"
}

milky.onclick = () => {
    car.setAttribute('src', './img/milky.png')
    car.style.width = "1200px"
    car.style.height = "470px"
    wheel_front.style.display = "none"
    wheel_end.style.display = "none"
}

white.onclick = () => {
    car.setAttribute('src', './img/white.png')
    car.style.width = "1200px"
    car.style.height = "470px"
    wheel_front.style.display = "none"
    wheel_end.style.display = "none"
}