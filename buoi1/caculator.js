
    const screen = document.getElementById('screen');
    // hiển thị lên chỗ có id là screen
    const buttons = document.querySelectorAll('button');
    // lấy tất cả các nút button để hiển thị
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            let value =  btn.textContent;

            if(value == "AC"){ 
                screen.value = "";
            }
            // nếu nhấn AC về rỗng
            else if (value == "="){
                screen.value = eval(screen.value);
            // nhấn =  tự tính bằng hàm eval

            }
            else {
                screen.value += value;
            }

        })
    })

